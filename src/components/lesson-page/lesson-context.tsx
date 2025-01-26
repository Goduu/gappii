"use client"
import { Activity, Lesson } from "@/ogm-resolver/ogm-types";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { LessonMode } from "./type";
import { useSearchParams } from "next/navigation";

export interface ActivityAttempt {
    activityId: string;
    isCorrect: boolean;
    timeTaken: number;
    activityContent: string;
    wrongAnswer: string;
    correctAnswer: string;
}

export type SummaryLesson = {
    id: string;
    type: 'summary';
    score: number;
    mode: LessonMode;
    totalTimeTaken: number;
    correctAnswers: number;
    totalQuestions: number;
    attempts: Array<[number, ActivityAttempt]>;
};

type LessonContextType = {
    currentActivityIndex: number;
    progress: number;
    transitionDirection: 'next' | 'prev';
    currentActivity: Activity | SummaryLesson;
    activityStartTime: number;
    lessonStartTime: number;
    handleNext: (isCorrect?: boolean) => void;
    handleBack: () => void;
    attempts: Map<number, ActivityAttempt>;
    isComplete: boolean;
};

type LessonProviderProps = {
    children: ReactNode;
    lesson: Lesson;
};

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider: React.FC<LessonProviderProps> = ({ children, lesson }) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [completedActivities, setCompletedActivities] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');
    const [activityStartTime, setActivityStartTime] = useState(Date.now());
    const [lessonStartTime] = useState(Date.now());
    const [attempts, setAttempts] = useState<Map<number, ActivityAttempt>>(new Map());
    const [isComplete, setIsComplete] = useState(false);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const mode = params.get('mode') as LessonMode
    const [summaryActivity, setSummaryActivity] = useState<SummaryLesson | null>(null);

    const activities = lesson.hasActivities;

    // Reset activity timer when changing activities
    useEffect(() => {
        setActivityStartTime(Date.now());
    }, [currentActivityIndex]);

    const createSummaryLesson = (
        totalTimeTaken: number,
        correctAnswers: number,
        score: number
    ): SummaryLesson => ({
        id: lesson.id || '',
        type: 'summary',
        score: Number(score),
        mode,
        totalTimeTaken,
        correctAnswers,
        totalQuestions: activities.length,
        attempts: Array.from(attempts.entries()),
    });

    const handleNext = (isCorrect?: boolean) => {
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
                wrongAnswer: currentActivity.options.find(o => o !== currentActivity.answer) || "",
                correctAnswer: currentActivity.answer
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
            // Calculate lesson completion data
            const totalTimeTaken = Array.from(attempts.values()).reduce((acc: number, curr: ActivityAttempt) => acc + curr.timeTaken, 0);
            const correctAnswers = Array.from(attempts.values()).filter(a => a.isCorrect).length;
            const score = ((correctAnswers / activities.length) * 100).toFixed(2);

            // Create and set summary activity
            const summary = createSummaryLesson(totalTimeTaken, correctAnswers, Number(score));
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

    const value = {
        currentActivityIndex,
        progress,
        transitionDirection,
        currentActivity: isComplete ? summaryActivity! : activities[currentActivityIndex],
        activityStartTime,
        lessonStartTime,
        handleNext,
        handleBack,
        attempts,
        isComplete,
    };

    return <LessonContext.Provider value={value}>{children}</LessonContext.Provider>;
};

export const useLessonContext = () => {
    const context = useContext(LessonContext);
    if (!context) {
        throw new Error("useLessonContext must be used within a LessonProvider");
    }
    return context;
}; 