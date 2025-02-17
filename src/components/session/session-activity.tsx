"use client"
import { Activity } from "../../ogm-types";
import { ActivityCard } from "../activity-card/activity-card";
import { AnimatePresence } from "framer-motion";
import { SessionMode, SessionModes, SessionSummaryData } from "./types";
import { useSessionContext } from "./session-context";
import { SessionSummary } from "./session-summary";

function isActivity(activity: Activity | SessionSummaryData): activity is Activity {
    return !('type' in activity);
}

type SessionActivityProps = {
    reportedActivityIds?: Activity[] | undefined;
    isOnboarding?: boolean;
    mode?: SessionMode
};

export const SessionActivity: React.FC<SessionActivityProps> = ({
    reportedActivityIds = [],
    isOnboarding = false,
    mode = SessionModes.EitherOr,
}) => {
    const { currentActivity, handleNext, transitionDirection } = useSessionContext();

    if (currentActivity && !isActivity(currentActivity)) {
        return (
            <div className="w-96">
                <SessionSummary summary={currentActivity} isOnboarding={isOnboarding} />
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