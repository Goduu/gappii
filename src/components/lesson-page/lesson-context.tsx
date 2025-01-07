"use client"
import { Activity, Lesson } from "@/ogm-resolver/ogm-types";
import { createContext, useContext, useState, ReactNode } from "react";
import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

type LessonContextType = {
    currentActivityIndex: number;
    progress: number;
    transitionDirection: 'next' | 'prev';
    currentActivity: Activity;
    handleNext: () => void;
    handleBack: () => void;
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

    const activities = lesson.hasActivities;

    const handleNext = () => {
        setTransitionDirection('next');
        setCompletedActivities([...completedActivities, currentActivityIndex]);
        if (currentActivityIndex + 1 < activities.length) {
            setCurrentActivityIndex(currentActivityIndex + 1);
            setProgress(((currentActivityIndex + 1) * 100) / activities.length);
        } else {
            redirect(routes.lessons);
        }
    };

    const handleBack = () => {
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
        currentActivity: activities[currentActivityIndex],
        handleNext,
        handleBack,
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