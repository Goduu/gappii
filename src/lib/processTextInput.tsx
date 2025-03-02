import { SupportedLanguage } from "@/app/types";
import { validateCreateLessonApiResponse } from "@/lib/validateCreateLessonApiResponse";

export const transformInputIntoData = async (topic: string, subtopic: string, level: string, language: SupportedLanguage, activitiesNumber: string, onError: (error: string) => void, learningGoals?: string[]) => {
    const apiResult = await fetch("/api/create-lesson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic, subtopic, level, language, activitiesNumber, learningGoals: learningGoals || "" })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateCreateLessonApiResponse(apiResponse, onError);

    return validatedResponse;

}