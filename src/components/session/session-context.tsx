"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Streak } from "@/ogm-types";
import { ActivityAttempt, SessionData, SessionSummaryData } from "@/components/session/types";
import { SessionMode, SessionModes } from "./types";

type SessionContextType = {
    currentActivityIndex: number;
    progress: number;
    transitionDirection: 'next' | 'prev';
    currentActivity: SessionData["activities"][number] | SessionSummaryData;
    currentTitle: string;
    currentSubtitle: string;
    activityStartTime: number;
    sessionStartTime: number;
    handleNext: (isCorrect?: boolean) => void;
    handleBack: () => void;
    setMode: (mode: SessionMode) => void;
    mode: SessionMode;
    attempts: Map<number, ActivityAttempt>;
    isComplete: boolean;
};

type SessionProviderProps = {
    children: ReactNode;
    sessionData: SessionData;
    userStreak?: Streak
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<SessionProviderProps> = ({ children, sessionData, userStreak }) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [completedActivities, setCompletedActivities] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');
    const [activityStartTime, setActivityStartTime] = useState(Date.now());
    const [sessionStartTime] = useState(Date.now());
    const [attempts, setAttempts] = useState<Map<number, ActivityAttempt>>(new Map());
    const [isComplete, setIsComplete] = useState(false);
    const [mode, setMode] = useState<SessionMode>(SessionModes.EitherOr);
    const [summaryActivity, setSummaryActivity] = useState<SessionSummaryData | null>(null);

    const activities = sessionData.activities;

    // Reset activity timer when changing activities
    useEffect(() => {
        setActivityStartTime(Date.now());
    }, [currentActivityIndex]);

    const createSessionSummary = (
        totalTimeTaken: number,
        correctAnswers: number,
        score: number,
        mode: SessionMode
    ): SessionSummaryData => ({
        id: sessionData.type === 'lesson' ? sessionData.lessonId : sessionData.type === 'path' ? sessionData.pathId : '',
        type: sessionData.type,
        score: Number(score),
        mode,
        totalTimeTaken,
        correctAnswers,
        totalQuestions: activities.length,
        attempts: Array.from(attempts.entries()),
        userStreak
    });

    const handleNext = (isCorrect?: boolean, answer?: string) => {
        setTransitionDirection('next');

        // Only record the attempt if it hasn't been recorded before
        if ((isCorrect === true || isCorrect === false) && !attempts.has(currentActivityIndex)) {
            const timeTaken = Math.floor((Date.now() - activityStartTime) / 1000);
            if (!activities[currentActivityIndex].id) {
                throw new Error("Activity ID is undefined");
            }

            const currentActivity = activities[currentActivityIndex];
            if (!currentActivity.id) return

            setAttempts(new Map(attempts.set(currentActivityIndex, {
                activityId: currentActivity.id,
                isCorrect,
                timeTaken,
                activityContent: currentActivity.description,
                wrongAnswer: (mode === SessionModes.TypeIn && !isCorrect) ? answer || "" : currentActivity.options.find(o => o !== currentActivity.answer) || "",
                correctAnswer: (mode === SessionModes.TypeIn && isCorrect) ? answer || "" : currentActivity.answer
            })));
        }

        setCompletedActivities([...completedActivities, currentActivityIndex]);

        if (currentActivityIndex + 1 < activities.length) {
            setCurrentActivityIndex(currentActivityIndex + 1);
            setProgress(((currentActivityIndex + 1) * 100) / activities.length);
        }
        // check if every activity is completed with the attempts
        else if (attempts.size !== activities.length) {
            return;
        } else {
            // Calculate session completion data
            const totalTimeTaken = Array.from(attempts.values()).reduce((acc: number, curr: ActivityAttempt) => acc + curr.timeTaken, 0);
            const correctAnswers = Array.from(attempts.values()).filter(a => a.isCorrect).length;
            const score = ((correctAnswers / activities.length) * 100).toFixed(2);

            // Create and set summary activity
            const summary = createSessionSummary(totalTimeTaken, correctAnswers, Number(score), mode);
            setSummaryActivity(summary);
            setIsComplete(true);
            setProgress(100);

        }
    };

    const handleBack = () => {
        if (isComplete) {
            return; // Prevent going back from summary screen
        }
        if (currentActivityIndex > 0) {
            setTransitionDirection('prev');
            setCurrentActivityIndex(currentActivityIndex - 1);
            setProgress(((currentActivityIndex - 1) * 100) / activities.length);
            setCompletedActivities(completedActivities.filter(i => i !== currentActivityIndex - 1));
        }
    };
    const currentActivity = isComplete ? summaryActivity! : activities[currentActivityIndex];
    const currentTitle = isComplete ? "Summary" : activities[currentActivityIndex]?.title;
    const currentSubtitle = isComplete ? "" : sessionData.type === "lesson" ? sessionData.activities[currentActivityIndex].subtitle : "";

    const value = {
        currentActivityIndex,
        progress,
        transitionDirection,
        currentActivity,
        currentTitle,
        currentSubtitle: currentSubtitle || "",
        activityStartTime,
        sessionStartTime,
        handleNext,
        handleBack,
        setMode,
        mode,
        attempts,
        isComplete,
    };

    return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSessionContext = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSessionContext must be used within a SessionProvider");
    }
    return context;
}; 