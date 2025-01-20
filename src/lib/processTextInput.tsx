import { SupportedLanguage } from "@/app/types";
import { validateCreateLessonApiResponse } from "@/lib/validateCreateLessonApiResponse";

export const transformInputIntoData = async (topic: string, subtopic: string, level: number, language: SupportedLanguage, activitiesNumber: number, onError: (error: string) => void) => {
    const apiResult = await fetch("/api/create-lesson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic, subtopic, level, language, activitiesNumber })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateCreateLessonApiResponse(apiResponse, onError);

    return validatedResponse;

}