export type ApiActivityResponse = {
    topic: string,
    subtopic: string,
    validTopicSubtopic: boolean,
    keywords: string[],
    level: number,
    activities: {
        description: string,
        options: string[],
        answer: string,
        comment: string
    }[]
}


export const validateApiReturnObject = (response: object | null, onError: (error: any) => void): ApiActivityResponse | null => {
    if (!response) {
        onError("No response from API")
    }

    const data = response as ApiActivityResponse;

    if (!data) {
        onError("Invalid response from API");
        return null
    }
    if (!data.validTopicSubtopic) {
        onError("Invalid topic and subtopic pair");
        return null
    }
    if (!data.topic) {
        onError("Invalid response from API, missing topic");
        return null
    }
    if (!data.subtopic) {
        onError("Invalid response from API, missing subtopic");
        return null
    }
    if (!data.activities || !data.activities.length) {
        onError("Invalid response from API, missing activities");
        return null
    }
    if (data.keywords.length === 0) {
        onError("Invalid response from API, missing keywords");
        return null
    }

    return data;
};


