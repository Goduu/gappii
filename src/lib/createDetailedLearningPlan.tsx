import { validateCreateDetailedLearningPlanApiResponse } from "./validateCreateDetailedLearningPlanApiResponse";

export const createDetailedLearningPlan = async (input: { selectedTheme: string, selectedGoals: string }, onError: (error: string) => void) => {
    console.log("input",input)
    const apiResult = await fetch("/api/create-detailed-learning-plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ selectedTheme: input.selectedTheme, selectedGoals: input.selectedGoals })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateCreateDetailedLearningPlanApiResponse(apiResponse, onError);

    return validatedResponse;

}