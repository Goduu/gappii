"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCanvas } from "./CanvasContext";
import { HumanMessage } from "@langchain/core/messages";
import { Message } from "@ai-sdk/react";

interface ChatComponentProps {
  isCollapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
}

export function ChatComponent({ isCollapsed, onCollapseChange }: ChatComponentProps) {
  const { messages, addMessage } = useCanvas();
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const uuid = crypto.randomUUID();

    addMessage({
      id: uuid,
      content: inputMessage,
      role: "user",
    } satisfies Message);

    setInputMessage("");
  };

  return (
    <div className="flex flex-col h-screen fixed top-0 left-0">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Chat</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onCollapseChange(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-scroll overflow-x-hidden p-4">
        <div className="flex flex-col flex-wrap gap-4 w-80">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3">
              <div className="flex-1 space-y-2">
                <p className={`text-sm ${message.role === "user" ? "text-blue-600" : "text-gray-600"}`}>
                  {message.content.toString()}
                </p>
                <p className="text-xs text-gray-400">
                </p>
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className="flex items-start space-x-3">
              <div className="flex-1 space-y-2">
                <p className="text-sm text-gray-600">Start a conversation...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
}

export const SimpleChatComponentMemo = React.memo(ChatComponent); 