"use client";

import React, { createContext, useContext, useState } from "react";
import { BaseMessage } from "@langchain/core/messages";
import { toast } from "@/hooks/use-toast";
import { Message, useChat } from "@ai-sdk/react";
import { InitialLearningGoals } from "@/app/api/agents/initialLearningGoal/types";

interface CanvasContextType {
    messages: Message[];
    addMessage: (message: Message) => void;
    canvasContent: string;
    updateCanvasContent: (content: string) => void;
    initialLearningGoals: InitialLearningGoals | null;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export function CanvasProvider({ children }: { children: React.ReactNode }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [canvasContent, setCanvasContent] = useState<string>("");
    const [initialLearningGoals, setInitialLearningGoals] = useState<InitialLearningGoals | null>(null);

    const chat = useChat({
        api: "api/agents",
        onResponse: async (response: Response) => {
            const data = await response.json();
            const assistantMessage = data.messages.find((m: Message) => m.role === "assistant");
            const dataMessage = data.messages.find((m: Message) => m.role === "data");

            if (assistantMessage) {
                setMessages(prev => [...prev, assistantMessage]);
            }

            if (dataMessage) {
                try {
                    const goals = JSON.parse(dataMessage.content);
                    setInitialLearningGoals(goals);
                } catch (error) {
                    console.error("Error parsing initial learning goals:", error);
                }
            }
        },
        onError: (e) =>
            toast({
                title: "Error while processing your request",
                description: e.message,
            }),
    });

    const addMessage = (message: Message) => {
        if (chat.status === "streaming") return;
        setMessages((prev) => [...prev, message]);
        chat.append(message);
    };

    const updateCanvasContent = (content: string) => {
        setCanvasContent(content);
    };

    return (
        <CanvasContext.Provider
            value={{
                messages,
                addMessage,
                canvasContent,
                updateCanvasContent,
                initialLearningGoals,
            }}
        >
            {children}
        </CanvasContext.Provider>
    );
}

export function useCanvas() {
    const context = useContext(CanvasContext);
    if (context === undefined) {
        throw new Error("useCanvas must be used within a CanvasProvider");
    }
    return context;
} 