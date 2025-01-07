"use client"
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

type LessonNavigationProps = {
    currentIndex: number;
    total: number;
    progress: number;
    onBack: () => void;
    onNext: () => void;
};

export const LessonNavigation: React.FC<LessonNavigationProps> = ({
    currentIndex,
    total,
    progress,
    onBack,
    onNext,
}) => {
    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                disabled={currentIndex === 0}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="relative flex items-center justify-center flex-1">
                <span className="text-xs text-muted-foreground whitespace-nowrap absolute z-10">
                    {currentIndex + 1}/{total}
                </span>
                <Progress value={progress} className="h-4 flex-1" />
            </div>
            <Button
                variant="ghost"
                size="icon"
                disabled={currentIndex === total - 1}
                onClick={onNext}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
}; 