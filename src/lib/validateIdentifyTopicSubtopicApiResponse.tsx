
export type ApiTopicSubtopicResponse = {
    topic: string,
    subtopic: string,
}[]

export const validateIdentifyTopicSubtopicApiResponse = (response: object | null, onError: (error: string) => void): ApiTopicSubtopicResponse | null => {
    if (!response) {
        onError("No response from API")
    }

    const data = response as ApiTopicSubtopicResponse;

    if (!data) {
        onError("Invalid response from API");
        return null
    }

    if (data.length === 0) {
        onError("No data returned from API");
        return null
    }

    if (data.length > 3) {
        onError("Too many options returned from API");
        return null
    }

    return data;
};

