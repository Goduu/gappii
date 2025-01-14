import { SupportedLanguage } from "@/app/types";
import { LessonToTranslate } from "./queries/getLessonByIdToTranslate";
import { validateTranslateLessonApiResponse } from "./validateTranslateLessonApiResponse";

export const translateLesson = async (lesson: LessonToTranslate, language: SupportedLanguage, onError: (error: string) => void) => {
    const apiResult = await fetch("/api/translate-lesson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ lesson, language })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateTranslateLessonApiResponse(apiResponse, language, onError);

    return validatedResponse;

}