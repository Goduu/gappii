import { Message as VercelChatMessage } from "ai";

import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { Calculator } from "@langchain/community/tools/calculator";
import {
    AIMessage,
    BaseMessage,
    ChatMessage,
    HumanMessage,
    isAIMessage,
    isChatMessage,
    isHumanMessage,
    isSystemMessage,
    SystemMessage,
} from "@langchain/core/messages";


/**
 * Convert a Vercel chat message to a LangChain message
 */
export const convertVercelMessageToLangChainMessage = (message: VercelChatMessage) => {
    if (message.role === "user") {
        return new HumanMessage(message.content);
    } else if (message.role === "assistant") {
        return new AIMessage(message.content);
    } else {
        return new ChatMessage(message.content, message.role);
    }
};

/**
 * Convert a LangChain message to a Vercel chat message
 */
export const convertLangChainMessageToVercelMessage = (message: BaseMessage) => {
    // Use type assertion to avoid TypeScript errors
    const msg = message as any;
    
    if (isHumanMessage(message)) {
        return { content: msg.content, role: "user" };
    } else if (isAIMessage(message)) {
        return {
            content: msg.content,
            role: "assistant",
            tool_calls: msg.tool_calls,
        };
    } else {
        // For any other message type, use a safe fallback
        const content = typeof msg.content === 'string' 
            ? msg.content 
            : JSON.stringify(msg.content);
        
        const role = msg.role || "system";
        
        return { content, role };
    }
};