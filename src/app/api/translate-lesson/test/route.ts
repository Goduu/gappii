import { translatePrompt, translatePromptCommand, translatePromptJson } from "@/lib/prompts/translatePrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

// Maximum number of internal retries before returning an error
const MAX_INTERNAL_RETRIES = 2;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const lesson = JSON.stringify(body.lesson);
  const language = body.language;
  const promptType = body.promptType || "command"; // Default to command prompt if not specified

  const token = process.env["GITHUB_TOKEN"];
  const endpoint = "https://models.inference.ai.azure.com";
  const modelName = "gpt-4o";

  const openai = new OpenAI(
    { baseURL: endpoint, apiKey: token }
  );

  // Select the appropriate prompt based on the promptType
  let promptContent = "";
  switch (promptType) {
    case "standard":
      promptContent = translatePrompt
        .replace("<lesson_json>", lesson)
        .replace("<target_language>", language);
      break;
    case "json":
      promptContent = translatePromptJson
        .replace("<lesson_json>", lesson)
        .replace("<target_language>", language);
      break;
    case "command":
    default:
      promptContent = translatePromptCommand
        .replace("<lesson_json>", lesson)
        .replace("<target_language>", language);
      break;
  }

  // Function to attempt translation with internal retry logic
  async function attemptTranslation(retryCount = 0) {
    try {
      const completion = await openai.chat.completions.create({
        model: modelName,
        messages: [
          {
            role: "system",
            content: promptContent
          }
        ],
        temperature: 0.7, // Add some randomness for retries
      });

      const aiResponse = completion.choices[0].message.content;

      if (!aiResponse) {
        throw new Error("No response from AI");
      }

      // Validate that the response is valid JSON if using JSON prompt
      if (promptType === "json") {
        try {
          // Try to parse as JSON to validate
          JSON.parse(aiResponse);
        } catch {
          // If we have retries left, try again
          if (retryCount < MAX_INTERNAL_RETRIES) {
            console.log(`Invalid JSON response, retrying (${retryCount + 1}/${MAX_INTERNAL_RETRIES})...`);
            return attemptTranslation(retryCount + 1);
          }
          throw new Error("AI response is not valid JSON");
        }
      }

      return aiResponse;
    } catch (error) {
      // If we have retries left, try again
      if (retryCount < MAX_INTERNAL_RETRIES) {
        console.log(`Translation attempt failed, retrying (${retryCount + 1}/${MAX_INTERNAL_RETRIES})...`);
        return attemptTranslation(retryCount + 1);
      }
      throw error;
    }
  }

  try {
    const aiResponse = await attemptTranslation();

    return new Response(aiResponse);
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to translate lesson";

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

