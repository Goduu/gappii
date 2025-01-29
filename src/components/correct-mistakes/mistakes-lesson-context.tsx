"use client"
import { Activity, Streak } from "../../ogm-types";
import { createContext, useContext, useState, ReactNode } from "react";
import { LessonMode } from "../lesson-page/type";
import { useSearchParams } from "next/navigation";
import { MistakeLesson } from "./types";

export interface MistakeActivityAttempt {
    lessonId: string;
    activityId: string;
    correctedAt: string;
}

export type MistakeLessonSummaryData = {
    id: string;
    type: 'summary';
    mistakesCorrected: number;
    mode: LessonMode;
    totalTimeTaken: number;
    userStreak?: Streak
    activities: MistakeActivityAttempt[];
};

type MistakeLessonContextType = {
    currentActivityIndex: number;
    progress: number;
    transitionDirection: 'next' | 'prev';
    currentActivity: Activity | MistakeLessonSummaryData;
    lessonStartTime: number;
    handleNext: (isCorrect?: boolean) => void;
    attempts: Map<number, MistakeActivityAttempt>;
    isComplete: boolean;
    currentLesson: MistakeLesson;
};

type LessonProviderProps = {
    children: ReactNode;
    mistakeLessons: MistakeLesson[];
    userStreak?: Streak
};

const LessonContext = createContext<MistakeLessonContextType | undefined>(undefined);

export const MistakeLessonProvider: React.FC<LessonProviderProps> = ({ children, mistakeLessons, userStreak }) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [completedActivities, setCompletedActivities] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');
    const [lessonStartTime] = useState(Date.now());
    const [attempts, setAttempts] = useState<Map<number, MistakeActivityAttempt>>(new Map());
    const [isComplete, setIsComplete] = useState(false);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const mode = params.get('mode') as LessonMode
    const [summaryActivity, setSummaryActivity] = useState<MistakeLessonSummaryData | null>();
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const activities = mistakeLessons[currentLessonIndex]?.activities;
    const currentLesson = mistakeLessons[currentLessonIndex];

    const totalActivities = mistakeLessons.reduce((acc, lesson) => acc + lesson.activities.length, 0);

    const createSummaryLesson = (
        totalTimeTaken: number,
        correctAnswers: number,
    ): MistakeLessonSummaryData => ({
        id: currentLesson.id || '',
        type: 'summary',
        mistakesCorrected: correctAnswers,
        mode,
        totalTimeTaken,
        userStreak,
        activities: []
    });

    const handleNext = (isCorrect?: boolean) => {
        setTransitionDirection('next');

        if ((isCorrect === true || isCorrect === false) && !attempts.has(currentActivityIndex)) {
            const currentActivity = activities[currentActivityIndex];
            if (!currentActivity.id) return;

            setAttempts(new Map(attempts.set(currentActivityIndex, {
                activityId: currentActivity.id,
                lessonId: currentLesson.id,
                correctedAt: new Date().toISOString(),
            })));
        }

        setCompletedActivities([...completedActivities, currentActivityIndex]);

        if (currentActivityIndex + 1 < activities.length) {
            setCurrentActivityIndex(currentActivityIndex + 1);
            setProgress(((completedActivities.length + 1) * 100) / totalActivities);
        } else if (currentLessonIndex + 1 < mistakeLessons.length) {
            setCurrentLessonIndex(currentLessonIndex + 1);
            setCurrentActivityIndex(0);
            setProgress(((completedActivities.length + 1) * 100) / totalActivities);
        } else {
            const totalTimeTaken = Math.floor((Date.now() - lessonStartTime) / 1000);
            const correctAnswers = attempts.size;
            const summary = createSummaryLesson(totalTimeTaken, correctAnswers);
            setSummaryActivity(summary);
            setIsComplete(true);
            setProgress(100);
        }
    };

    const value = {
        currentActivityIndex,
        progress,
        transitionDirection,
        currentActivity: isComplete ? summaryActivity! : activities[currentActivityIndex],
        lessonStartTime,
        handleNext,
        attempts,
        isComplete,
        mistakeLessons,
        currentLesson,
    };

    return <LessonContext.Provider value={value}>{children}</LessonContext.Provider>;
};

export const useMistakeLessonContext = () => {
    const context = useContext(LessonContext);
    if (!context) {
        throw new Error("useLessonContext must be used within a LessonProvider");
    }
    return context;
}; 