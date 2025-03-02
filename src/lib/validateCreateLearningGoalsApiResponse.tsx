
export type ApiCreateLearningGoalsResponse = {
    theme: string,
    description: string,
    learning_goals: string[],
}[]

export const validateCreateLearningGoalsApiResponse = (response: object | null, onError: (error: string) => void): ApiCreateLearningGoalsResponse | null => {
    if (!response) {
        onError("No response from API")
    }

    const data = response as ApiCreateLearningGoalsResponse;

    if (!data) {
        onError("Invalid response from API");
        return null
    }

    if (data.length === 0) {
        onError("No data returned from API");
        return null
    }

    if (data.find(item => item.learning_goals.length <= 0)) {
        onError("No learning goals returned from API");
        return null
    }

    return data;
};

