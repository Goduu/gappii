import { validateIdentifyTopicSubtopicApiResponse } from "./validateIdentifyTopicSubtopicApiResponse";

export const processUserInput = async (input: string, onError: (error: string) => void) => {
    const apiResult = await fetch("/api/identify-topic-subtopic", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ input })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateIdentifyTopicSubtopicApiResponse(apiResponse, onError);

    return validatedResponse;

}