import { validateCreateDetailedLearningPlanApiResponse } from "./validateCreateDetailedLearningPlanApiResponse";

export const modifyDetailedLearningPlan = async (input: { 
    selectedTheme: string, 
    selectedGoals: string[], 
    topic: string,
    subtopic?: string,
    plan: any[],
    userModifications: string,
    language?: string
}, onError: (error: string) => void) => {

    const apiResult = await fetch("/api/modify-detailed-learning-plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            selectedTheme: input.selectedTheme, 
            selectedGoals: input.selectedGoals,
            topic: input.topic,
            subtopic: input.subtopic,
            plan: input.plan,
            userModifications: input.userModifications,
            language: input.language || "en-us"
        })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateCreateDetailedLearningPlanApiResponse(apiResponse, onError);

    return validatedResponse;
}