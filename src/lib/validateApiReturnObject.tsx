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


export const validateApiReturnObject = (response: object | null, onError: (error: any) => void): ApiActivityResponse => {
    if (!response) {
        onError("No response from API");
    }

    const data = response as ApiActivityResponse;

    if (!data) {
        onError("Invalid response from API");
        throw new Error("Invalid response from API");
    }
    if (!data.validTopicSubtopic) {
        onError("Invalid response from API, invalid topic or subtopic");
        throw new Error("Invalid response from API, invalid topic or subtopic");
    }
    if (!data.topic) {
        onError("Invalid response from API, missing topic");
        throw new Error("Invalid response from API, missing topic");
    }
    if (!data.subtopic) {
        onError("Invalid response from API, missing subtopic");
        throw new Error("Invalid response from API, missing subtopic");

    }
    if (!data.activities || !data.activities.length) {
        onError("Invalid response from API, missing activities");
        throw new Error("Invalid response from API, missing activities");
    }
    if (data.keywords.length === 0) {
        onError("Invalid response from API, missing keywords");
    }

    return data;
};


