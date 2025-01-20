import { languages } from "@/app/types";
import { createLessonPrompt } from "@/lib/prompts/createLessonPrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const topic = body.topic
  const subtopic = body.subtopic
  const level = body.level
  const language = body.language || languages.en
  const activitiesNumber = body.activitiesNumber || 7

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
        role: "system", content: createLessonPrompt
      },
      {
        role: "user",
        content: `topic: ${topic}, subtopic: ${subtopic}, level: ${level}, language: ${language}. activitiesNumber: ${activitiesNumber}`,
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

