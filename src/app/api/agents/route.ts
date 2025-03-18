import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage } from "ai";

import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { Calculator } from "@langchain/community/tools/calculator";
import {
  AIMessage,
  BaseMessageLike,
  HumanMessage,
} from "@langchain/core/messages";
import { convertLangChainMessageToVercelMessage, convertVercelMessageToLangChainMessage } from "./messageConverters";
import { StateGraph, MessagesAnnotation, InMemoryStore } from "@langchain/langgraph";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { Neo4jGraph } from "./neo4j";
import { Neo4jCheckpointer } from "./neo4jCheckpointer";
import { createInMemoryStore } from "./inMemoryStore";
import { State } from "./types";
import { createModelWithStructuredOutput } from "./initialLearningGoal/modelWithStructuredOutput";
import { createInitialGoalGraph } from "./initialLearningGoal/initialGoalGraph";
import { Message } from "@ai-sdk/react";

export const runtime = "edge";




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



    // Define schema
    // const schema = { foo: "bar" };

    // // Bind schema to model
    const inMemoryStore = createInMemoryStore();

    // Invoke the model to produce structured output that matches the schema
    // const modelWithStructure = model.withStructuredOutput(schema);
    // const structuredOutput = await modelWithStructure.invoke(userInput);

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

    const model = createModelWithStructuredOutput();

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

    const checkpointer = new Neo4jCheckpointer();

    const workflow = new StateGraph(MessagesAnnotation)
      .addNode("agent", callModel)
      .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
      .addNode("tools", toolNode)
      .addEdge("tools", "agent")
      .addConditionalEdges("agent", shouldContinue);



    // Use the checkpointer as a configuration option
    const app = workflow.compile({
      // No need for type assertion now
      // checkpointer: checkpointer,
      store: inMemoryStore
    });

    const app2 = createInitialGoalGraph();

    let finalState;
    try {
      finalState = await app2.invoke({ userInput: messages[0].content });
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

    console.log("--------------------------------")
    console.log('finalState xongas',finalState)
    console.log("--------------------------------")
    console.dir(finalState, { depth: null });

    // Ensure finalState and finalState.messages exist
    // if (!finalState || !finalState.messages) {
    if (!finalState || !finalState.aiMessage || !finalState.initialLearningGoals?.learningGoals.length) {
      console.warn("finalState or finalState.messages is undefined, using fallback");
      finalState = {
        messages: [
          ...messages,
          new AIMessage("I'm sorry, I encountered an error processing your request.")
        ]
      };
    }

    console.log("--------------------------------")
    console.log('finalState.aiMessage',finalState.aiMessage)
    console.log("--------------------------------")
    console.log('finalState.initialLearningGoals',finalState.initialLearningGoals)
    console.log("--------------------------------")

    return NextResponse.json(
      {
        // messages: finalState.messages.map(convertLangChainMessageToVercelMessage)
        messages: [
          {
            id: crypto.randomUUID(),
            content: finalState.aiMessage || "",
            role: "assistant",
          },
          {
            id: crypto.randomUUID(),
            content: JSON.stringify(finalState.initialLearningGoals),
            role: "data",
          },
        ] satisfies Message[]
      },
      { status: 200 },
    );
  } catch (e: any) {
    console.error("Error in API route:", e);
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
