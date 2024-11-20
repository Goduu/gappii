import { validateApiReturnObject } from "@/lib/validateApiReturnObject";

export const transformInputIntoData = async (topic: string, subtopic: string) => {
    const apiResult = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic, subtopic })
    })

    const apiResponse = await apiResult.json();
    const validatedResponse = validateApiReturnObject(apiResponse);

    return validatedResponse;

}