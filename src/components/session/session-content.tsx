"use client"
import { Activity } from "../../ogm-types";
import { ModeSelection } from "./mode-selection";
import { SessionActivity } from "./session-activity";
import { useSessionContext } from "./session-context";
import { SessionHeader } from "./session-header";
import { SessionData, SessionMode, SessionModes } from "./types";
import { useState } from "react";

type SessionContentProps = {
    sessionData: SessionData;
    reportedActivityIds?: Activity[] | undefined;
    onActivityComplete?: (activityIndex: number) => void;
    isOnboarding?: boolean;
};

export const SessionContent: React.FC<SessionContentProps> = ({
    sessionData,
    reportedActivityIds = [],
    isOnboarding = false,
}) => {
    const { currentActivityIndex, progress, currentTitle, currentSubtitle, setMode, mode } = useSessionContext();
    const [showModeSelection, setShowModeSelection] = useState(true);

    const activities = sessionData.activities;

    const handleModeSelect = (selectedMode: SessionMode) => {
        setMode(selectedMode);
        setShowModeSelection(false);
    };

    if (showModeSelection) {
        return <ModeSelection onModeSelect={handleModeSelect} isOnboarding={isOnboarding} />;
    }

    return (
        <div className="flex flex-col w-full items-center h-full">
            <div className="flex flex-col gap-16 origin-top transform scale-100 md:scale-110 lg:scale-125 xl:scale-150">
                <div className="w-96">
                    <SessionHeader
                        title={currentTitle}
                        subtitle={currentSubtitle}
                        currentIndex={currentActivityIndex}
                        total={activities.length}
                        progress={progress}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <SessionActivity
                        reportedActivityIds={reportedActivityIds}
                        mode={mode || SessionModes.EitherOr}
                        isOnboarding={isOnboarding}
                    />
                </div>
            </div>
        </div>
    );
};