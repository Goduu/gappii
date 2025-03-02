export type ApiModifyDetailedLearningPlanResponse = {
    topic: string,
    subtopic: string,
    learning_points: string[],
}[]

export const validateModifyDetailedLearningPlanApiResponse = (response: object | null, onError: (error: string) => void): ApiModifyDetailedLearningPlanResponse | null => {
    if (!response) {
        onError("No response from API");
        return null;
    }

    const data = response as ApiModifyDetailedLearningPlanResponse;

    if (!data) {
        onError("Invalid response from API");
        return null;
    }

    if (data.length === 0) {
        onError("No data returned from API");
        return null;
    }

    if (data.find(item => item.topic.length <= 0)) {
        onError("No topic returned from API");
        return null;
    }

    if (data.find(item => item.subtopic.length <= 0)) {
        onError("No subtopic returned from API");
        return null;
    }

    if (data.find(item => item.learning_points.length <= 0)) {
        onError("No learning points returned from API");
        return null;
    }

    return data;
}; 