"use client"
import { useState } from "react";
import { ActivityCard } from "../card/activity-card";
import { Activity } from "@/ogm-resolver/ogm-types";
import { Progress } from "../ui/progress";
import { redirect } from "next/navigation";
import { CircleX, ChevronLeft, ChevronRight } from "lucide-react";
import { routes } from "@/lib/routes";
import { AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

type LessonProgressManagerProps = {
    topic: string;
    subtopic: string;
    activities: Activity[];
    reportedActivityIds: Activity[] | undefined;
};

export const LessonProgressManager: React.FC<LessonProgressManagerProps> = ({
    activities,
    topic,
    subtopic,
    reportedActivityIds
}) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [completedActivities, setCompletedActivities] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');

    const handleNext = () => {
        setTransitionDirection('next');
        setCompletedActivities([...completedActivities, currentActivityIndex]);
        if (currentActivityIndex + 1 < activities.length) {
            setCurrentActivityIndex(currentActivityIndex + 1);
            setProgress(((currentActivityIndex + 1) * 100) / activities.length);
        } else {
            redirect(routes.lessons);
        }
    };

    const handleBack = () => {
        if (currentActivityIndex > 0) {
            setTransitionDirection('prev');
            setCurrentActivityIndex(currentActivityIndex - 1);
            setProgress(((currentActivityIndex - 1) * 100) / activities.length);
            setCompletedActivities(completedActivities.filter(i => i !== currentActivityIndex - 1));
        }
    };

    const currentActivity = activities[currentActivityIndex];

    return (
        <div className="flex flex-col px-4 py-4 gap-2 sm:py-10 items-center">
            <div className="flex flex-col gap-2 sm:gap-4 w-full">
                <div className="px-4 sm:px-0 flex items-center justify-between">
                    <div className="text-base sm:text-lg font-bold flex items-center gap-2 text-ellipsis overflow-hidden">
                        {topic} <span className="text-muted-foreground">/</span> {subtopic}
                    </div>
                    <CircleX
                        className="h-5 w-5 cursor-pointer hover:text-destructive transition-colors"
                        onClick={() => redirect(routes.lessons)}
                    />
                </div>

                <div className="flex items-center gap-2 ">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleBack}
                        disabled={currentActivityIndex === 0}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="relative flex items-center justify-center flex-1">
                        <span className="text-xs text-muted-foreground whitespace-nowrap absolute z-10">
                            {currentActivityIndex + 1}/{activities.length}
                        </span>
                        <Progress value={progress} className="h-4 flex-1" />
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        disabled={currentActivityIndex === activities.length - 1}
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-0">
                <div className="w-full max-w-md">
                    <AnimatePresence initial={false} mode="wait">
                        <ActivityCard
                            key={currentActivity.id}
                            activity={currentActivity}
                            topic={topic}
                            subtopic={subtopic}
                            reported={reportedActivityIds?.some(
                                (activity) => activity.id === currentActivity.id
                            ) ?? false}
                            onNext={handleNext}
                            direction={transitionDirection}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};