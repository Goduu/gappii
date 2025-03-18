"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useCanvas } from "./CanvasContext";
import { LearningGoalsCard } from "./LearningGoalsCard";

interface CanvasComponentProps {
  isCollapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
}

export function CanvasComponent({ isCollapsed, onCollapseChange }: CanvasComponentProps) {
  const { canvasContent, updateCanvasContent, initialLearningGoals } = useCanvas();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Canvas</h2>
        {isCollapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCollapseChange(!isCollapsed)}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex-1 p-4 overflow-auto">
        <div className="prose max-w-none">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-wrap gap-4">
              {initialLearningGoals && initialLearningGoals.learningGoals.map((goal, index) => (
                <LearningGoalsCard key={index} learningGoal={goal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SimpleCanvasComponentMemo = React.memo(CanvasComponent); 