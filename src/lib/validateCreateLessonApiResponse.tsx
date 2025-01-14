import { SupportedLanguage, supportedLanguages } from "@/app/types";

export type ApiActivityResponse = {
    topic: string,
    subtopic: string,
    validTopicSubtopic: boolean,
    keywords: string[],
    level: number,
    language: string,
    activities: {
        description: string,
        order: number,
        options: string[],
        answer: string,
        comment: string
    }[]
}


export const validateCreateLessonApiResponse = (response: object | null, onError: (error: string) => void): ApiActivityResponse | null => {
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
    if (data.activities.find(activity => !activity.description.includes("{gap}"))) {
        onError("Invalid response from API, missing gap in activity description");
        return null
    }
    if (!data.language) {
        onError("Invalid response from API, missing language");
        return null
    } else if (!supportedLanguages.includes(data.language as SupportedLanguage)) {
        onError("Invalid response from API, language not supported");
        return null
    }

    return data;
};

