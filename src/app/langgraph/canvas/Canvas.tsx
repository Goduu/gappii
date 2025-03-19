"use client";

import React, { useState } from "react";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "./resizable";
import { ChatComponent } from "./ChatComponent";
import { CanvasComponent } from "./CanvasComponent";
import { CanvasProvider } from "./CanvasContext";

export function Canvas() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CanvasProvider>
      <ResizablePanelGroup direction="horizontal" className="h-screen">
        {!isCollapsed && (
          <ResizablePanel
            defaultSize={25}
            minSize={15}
            maxSize={50}
            className="transition-all duration-700 h-screen bg-gray-50/70 shadow-inner-right"
            id="chat-panel"
            order={1}
          >
            <ChatComponent
              isCollapsed={isCollapsed}
              onCollapseChange={setIsCollapsed}
            />
          </ResizablePanel>
        )}
      
        <ResizableHandle />

        <ResizablePanel
          defaultSize={isCollapsed ? 100 : 75}
          maxSize={85}
          minSize={50}
          id="canvas-panel"
          order={2}
          className="flex flex-row w-full"
        >
          <div className="w-full">
            <CanvasComponent
              isCollapsed={isCollapsed}
              onCollapseChange={setIsCollapsed}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </CanvasProvider>
  );
}

export const SimpleCanvasMemo = React.memo(Canvas); 