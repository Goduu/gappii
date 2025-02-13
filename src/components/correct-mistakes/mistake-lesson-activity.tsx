"use client"
import { Activity } from "../../ogm-types";
import { ActivityCard } from "../activity-card/activity-card";
import { AnimatePresence } from "framer-motion";
import { MistakeLessonSummaryData, useMistakeLessonContext } from "./mistakes-lesson-context";
import { LessonMode, LessonModes } from "../lesson-page/type";
import { MistakeLessonSummary } from "./mistake-lesson-summary";

function isActivity(activity: Activity | MistakeLessonSummaryData): activity is Activity {
    return !('type' in activity);
}

type MistakeLessonActivityProps = {
    reportedActivityIds?: Activity[] | undefined;
    mode?: LessonMode
};

export const MistakeLessonActivity: React.FC<MistakeLessonActivityProps> = ({
    reportedActivityIds = [],
    mode = LessonModes.EitherOr
}) => {
    const { currentActivity, handleNext, transitionDirection } = useMistakeLessonContext();

    if (currentActivity && !isActivity(currentActivity)) {
        return (
            <div className="w-96">
                <MistakeLessonSummary summary={currentActivity} />
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
                    isCorrectingMistakes
                />
            </AnimatePresence>
        </div>
    );
}; 