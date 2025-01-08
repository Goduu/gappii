"use client"
import { Activity } from "@/ogm-resolver/ogm-types";
import { ActivityCard } from "../card/activity-card";
import { AnimatePresence } from "framer-motion";
import { useLessonContext } from "./lesson-context";

type LessonActivityProps = {
    reportedActivityIds: Activity[] | undefined;
};

export const LessonActivity: React.FC<LessonActivityProps> = ({
    reportedActivityIds,
}) => {
    const { currentActivity, handleNext, transitionDirection } = useLessonContext();

    return (
        <div className="flex-1 flex items-center justify-center min-h-0">
            <div className="w-full max-w-md">
                <AnimatePresence initial={false} mode="wait">
                    <ActivityCard
                        key={currentActivity.id}
                        activity={currentActivity}
                        reported={reportedActivityIds?.some(
                            (activity) => activity.id === currentActivity.id
                        ) ?? false}
                        onNext={handleNext}
                        direction={transitionDirection}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}; 