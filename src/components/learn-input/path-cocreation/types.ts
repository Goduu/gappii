import { ApiCreateLearningGoalsResponse } from "@/lib/validateCreateLearningGoalsApiResponse";
import { Message } from "../types";

// Define Topic type since it's not exported from types.ts
export type Topic = {
    id: string;
    title: string;
}

export type DetailedPlanItem = {
    topic: string;
    subtopic: string;
    learning_points: string[];
}

// Extend Message type to include detailedPlan
export type ExtendedMessage = Message & {
    detailedPlan?: DetailedPlanItem[];
    learningGoals?: ApiCreateLearningGoalsResponse;
    showPlanOptions?: boolean;
}

// Custom InputBox for path cocreation
export type PathInputBoxProps = {
    error: string;
    isActive: boolean;
    disabled?: boolean;
    onSubmit: (input: string) => Promise<void>;
    setIsActive: (isActive: boolean) => void;
    setError: (error: string) => void;
}