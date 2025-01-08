export type ApiActivityResponse = {
    topic: string,
    subtopic: string,
    validTopicSubtopic: boolean,
    keywords: string[],
    level: number,
    activities: {
        description: string,
        order: number,
        options: string[],
        answer: string,
        comment: string
    }[]
}


export const validateApiReturnObject = (response: object | null, onError: (error: unknown) => void): ApiActivityResponse | null => {
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
    if (!!data.activities.find(activity => (
        typeof activity.order !== 'number' ||
        !activity.description ||
        !activity.comment ||
        !activity.options.includes(activity.answer) ||
        activity.options.length < 1)
    )) {
        onError("Invalid response from API, missing activity properties");
        return null
    }
    if (data.keywords.length === 0) {
        onError("Invalid response from API, missing keywords");
        return null
    }

    return data;
};


