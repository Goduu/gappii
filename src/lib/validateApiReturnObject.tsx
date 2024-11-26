
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


export const validateApiReturnObject = (response: object | null): ApiActivityResponse => {
    if (!response) {
        throw new Error("No response from API");
    }

    const data = response as ApiActivityResponse;

    if (!data) {
        throw new Error("Invalid response from API");
    }
    if (!data.validTopicSubtopic) {
        // throw new Error("Invalid response from API, invalid topic or subtopic");
    }
    if (!data.topic) {
        throw new Error("Invalid response from API, missing topic");
    }
    if (!data.subtopic) {
        throw new Error("Invalid response from API, missing subtopic");
    }
    if (!data.activities || !data.activities.length) {
        throw new Error("Invalid response from API, missing activities");
    }
    if(data.keywords.length === 0){
        throw new Error("Invalid response from API, missing keywords");
    }

    return data;
};


