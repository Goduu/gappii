import { Activity, MistakenActivity, Streak } from "@/ogm-types";


export type LessonSessionData = {
    type: 'lesson';
    lessonId: string;
    activities: (Activity & {
        title: string;
        subtitle?: string;
    })[]
}

export type PathSessionData = {
    pathId: string;
    type: 'path';
    activities: (Activity & {
        title: string;
    })[]
}

export type MistakeCorrectionSessionData = {
    type: 'mistake-correction';
    activities: (MistakenActivity & {
        title: string;
    })[]
}

export type SessionData = LessonSessionData | PathSessionData | MistakeCorrectionSessionData

export type SessionType = 'lesson' | 'path' | 'mistake-correction'

export interface ActivityAttempt {
    lessonCompletionRecordId?: string;
    attemptId?: string;
    activityId: string;
    isCorrect: boolean;
    timeTaken: number;
    activityContent: string;
    wrongAnswer: string;
    correctAnswer: string;
}

export type SessionSummaryData = {
    id: string;
    score: number;
    mode: SessionMode;
    totalTimeTaken: number;
    correctAnswers: number;
    totalQuestions: number;
    attempts: Array<[number, ActivityAttempt]>;
    userStreak?: Streak
    type: SessionType
};

export type SessionMode = "either-or" | "type-in" | "pick-n-match"

export enum SessionModes {
    EitherOr = "either-or",
    TypeIn = "type-in",
    PickNMatch = "pick-n-match"
}