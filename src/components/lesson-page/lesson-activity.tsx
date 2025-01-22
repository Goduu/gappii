"use client"
import { Activity } from "@/ogm-resolver/ogm-types";
import { ActivityCard } from "../activity-card/activity-card";
import { AnimatePresence } from "framer-motion";
import { useLessonContext } from "./lesson-context";
import { LessonSummary } from './lesson-summary';
import { SummaryLesson } from "./lesson-context";

function isActivity(activity: Activity | SummaryLesson): activity is Activity {
    return !('type' in activity);
}

type LessonActivityProps = {
    reportedActivityIds?: Activity[] | undefined;
    isOnboarding?: boolean;
};

export const LessonActivity: React.FC<LessonActivityProps> = ({
    reportedActivityIds = [],
    isOnboarding = false,
}) => {
    const { currentActivity, handleNext, transitionDirection } = useLessonContext();

    if (currentActivity && !isActivity(currentActivity)) {
        return <LessonSummary activity={currentActivity} isOnboarding={isOnboarding} />;
    }

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