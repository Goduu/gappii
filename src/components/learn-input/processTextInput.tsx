import { validateApiReturnObject } from "@/lib/validateApiReturnObject";

export const transformInputIntoData = async (topic: string, subtopic: string, level: string, onError: (error: string) => void) => {
    const apiResult = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic, subtopic, level })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateApiReturnObject(apiResponse, onError);

    return validatedResponse;

}