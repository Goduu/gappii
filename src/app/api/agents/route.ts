import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage } from "ai";

import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { Calculator } from "@langchain/community/tools/calculator";
import {
  AIMessage,
  BaseMessageLike,
  HumanMessage,
} from "@langchain/core/messages";
import { convertLangChainMessageToVercelMessage, convertVercelMessageToLangChainMessage } from "./messageConverters";
import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { Neo4jGraph } from "./neo4j";
import { Neo4jCheckpointer } from "./neo4jCheckpointer";

export const runtime = "edge";


type State = {
  messages: BaseMessageLike[]
  learningGoalStep: {
    index: number
    subject: string
    description: string
    goas: string[]
    previousIndex: number
  }
}


/**
 * This handler initializes and calls an tool caling ReAct agent.
 * See the docs for more information:
 *
 * https://langchain-ai.github.io/langgraphjs/tutorials/quickstart/
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const returnIntermediateSteps = body.show_intermediate_steps;
    /**
     * We represent intermediate steps as system messages for display purposes,
     * but don't want them in the chat history.
     */
    const messages = (body.messages ?? [])
      .filter(
        (message: VercelChatMessage) =>
          message.role === "user" || message.role === "assistant",
      )
      .map(convertVercelMessageToLangChainMessage);

    // If no messages, return an error
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No valid messages provided" },
        { status: 400 }
      );
    }

    // Requires process.env.SERPAPI_API_KEY to be set: https://serpapi.com/
    // You can remove this or use a different tool instead.

    const model = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0,
    });

    async function callModel(state: State) {
      try {
        const response = await model.invoke(state.messages);
        // We return a list, because this will get added to the existing list
        return { messages: [response] };
      } catch (error) {
        console.error("Error calling model:", error);
        // Return a fallback response
        return { 
          messages: [
            new AIMessage("I'm sorry, I encountered an error processing your request.")
          ] 
        };
      }
    }

    const multiply = tool(
      async ({ a, b }) => {
        return a * b;
      },
      {
        name: "multiply",
        description: "multiplies two numbers together",
        schema: z.object({
          a: z.number().describe("the first number"),
          b: z.number().describe("the second number"),
        }),
      }
    );

    const tools = [new Calculator(), multiply];

    function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
      try {
        if (!messages || messages.length === 0) {
          return "__end__";
        }
        
        const lastMessage = messages[messages.length - 1] as AIMessage;

        // If the LLM makes a tool call, then we route to the "tools" node
        if (lastMessage.tool_calls?.length) {
          return "tools";
        }
        // Otherwise, we stop (reply to the user) using the special "__end__" node
        return "__end__";
      } catch (error) {
        console.error("Error in shouldContinue:", error);
        return "__end__";
      }
    }

    const toolNode = new ToolNode(tools);

    let app;
    try {
      // Try to create Neo4j connection and checkpointer
      const neo4jGraph = Neo4jGraph.create();
      const checkpointer = new Neo4jCheckpointer(neo4jGraph);

      const workflow = new StateGraph(MessagesAnnotation)
        .addNode("agent", callModel)
        .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
        .addNode("tools", toolNode)
        .addEdge("tools", "agent")
        .addConditionalEdges("agent", shouldContinue);

      // Use the checkpointer as a configuration option
      app = workflow.compile({
        // No need for type assertion now
        checkpointer: checkpointer
      });
    } catch (error) {
      console.error("Error setting up Neo4j checkpointer:", error);
      
      // Fallback to a version without checkpointing
      const workflow = new StateGraph(MessagesAnnotation)
        .addNode("agent", callModel)
        .addEdge("__start__", "agent")
        .addNode("tools", toolNode)
        .addEdge("tools", "agent")
        .addConditionalEdges("agent", shouldContinue);

      app = workflow.compile();
    }

    /**
     * We could also pick intermediate steps out from `streamEvents` chunks, but
     * they are generated as JSON objects, so streaming and displaying them with
     * the AI SDK is more complicated.
     */
    let finalState;
    try {
      finalState = await app.invoke({ messages });
    } catch (error) {
      console.error("Error invoking app:", error);
      
      // Create a fallback response if app.invoke fails
      finalState = { 
        messages: [
          ...messages,
          new AIMessage("I'm sorry, I encountered an error processing your request.")
        ]
      };
    }

    // Ensure finalState and finalState.messages exist
    if (!finalState || !finalState.messages) {
      console.warn("finalState or finalState.messages is undefined, using fallback");
      finalState = { 
        messages: [
          ...messages,
          new AIMessage("I'm sorry, I encountered an error processing your request.")
        ]
      };
    }

    return NextResponse.json(
      {
        messages: finalState.messages.map(convertLangChainMessageToVercelMessage)
      },
      { status: 200 },
    );
  } catch (e: any) {
    console.error("Error in API route:", e);
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
