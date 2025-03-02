import { validateCreateLearningGoalsApiResponse } from "./validateCreateLearningGoalsApiResponse";

export const createLearningGoals = async (input: string, onError: (error: string) => void) => {
    const apiResult = await fetch("/api/create-learning-goals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ input })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateCreateLearningGoalsApiResponse(apiResponse, onError);

    return validatedResponse;

}