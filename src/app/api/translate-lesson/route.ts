import { translatePrompt } from "@/lib/prompts/translatePrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const lesson = JSON.stringify(body.lesson)
  const language = body.language

  const token = process.env["GITHUB_TOKEN"];
  const endpoint = "https://models.inference.ai.azure.com";
  const modelName = "gpt-4o";


  const openai = new OpenAI(
    { baseURL: endpoint, apiKey: token }
  );

  const completion = await openai.chat.completions.create({
    model: modelName,
    messages: [
      {
        role: "system", content: translatePrompt
      },
      {
        role: "user",
        content: `lesson: ${lesson}, language: ${language}`,
      },
    ],
  });
  const aiResponse = completion.choices[0].message.content

  if (aiResponse) {
    return new Response(aiResponse);
  } else {
    return new Response('Error')
  }
}

