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
        return (
            <div className="w-96">
                <LessonSummary activity={currentActivity} isOnboarding={isOnboarding} />
            </div>
        );
    }

    return (
        <div className="w-96">
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
    );
}; 