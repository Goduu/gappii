"use client"
import { Activity } from "../../ogm-types";
import { ActivityCard } from "../activity-card/activity-card";
import { AnimatePresence } from "framer-motion";
import { useLessonContext } from "./lesson-context";
import { LessonSummary } from './lesson-summary';
import { SummaryLesson } from "./lesson-context";
import { LessonMode } from "./type";

function isActivity(activity: Activity | SummaryLesson): activity is Activity {
    return !('type' in activity);
}

type LessonActivityProps = {
    reportedActivityIds?: Activity[] | undefined;
    isOnboarding?: boolean;
    mode?: LessonMode
};

export const LessonActivity: React.FC<LessonActivityProps> = ({
    reportedActivityIds = [],
    isOnboarding = false,
    mode = 'normal'
}) => {
    const { currentActivity, handleNext, transitionDirection } = useLessonContext();

    if (currentActivity && !isActivity(currentActivity)) {
        return (
            <div className="w-96">
                <LessonSummary summary={currentActivity} isOnboarding={isOnboarding} />
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
                    mode={mode}
                />
            </AnimatePresence>
        </div>
    );
}; 