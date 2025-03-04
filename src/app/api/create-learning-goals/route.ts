import { languages } from "@/app/types";
import { createLearningGoalsCommand } from "@/lib/prompts/createLearningGoalsPrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const input = body.input
  const language = body.language || languages.en


  const token = process.env["GITHUB_TOKEN"];
  const endpoint = "https://models.inference.ai.azure.com";
  const modelName = "gpt-4o-mini";


  const openai = new OpenAI(
    { baseURL: endpoint, apiKey: token }
  );

  const completion = await openai.chat.completions.create({
    model: modelName,
    messages: [
      {
        role: "system", content:
          createLearningGoalsCommand
            .replace("<user_input>", input)
            .replace("<number_of_themes>", "4")
            .replace("<language>", language)
      }
    ],
  });
  const aiResponse = completion.choices[0].message.content
  if (aiResponse) {
    return new Response(aiResponse);
  } else {
    return new Response('Error')
  }
}
