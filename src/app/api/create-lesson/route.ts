import { languages } from "@/app/types";
import { createLessonPrompt } from "@/lib/prompts/createLessonPrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const topic = body.topic
  const subtopic = body.subtopic
  const level = body.level
  const levelDescription = getLevelDescription(level)
  const language = body.language || languages.en
  const activitiesNumber = body.activitiesNumber || 7

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
        role: "system", content: createLessonPrompt
      },
      {
        role: "user",
        content: `topic: ${topic}, subtopic: ${subtopic}, language: ${language}. activitiesNumber: ${activitiesNumber}  ${levelDescription}`,
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


const getLevelDescription = (level: string) => {
  if (level === "1") {
    return "**Beginner level**: Simplify concepts using foundational principles and accessible language."
  } else if (level === "2") {
    return "**Intermediate level**: Include more complex ideas and examples, requiring application of knowledge."
  } else if (level === "3") {
    return "**Advanced level**: Provide research-level and challenging content, with subtle nuances and potential for multiple interpretations."
  } else {
    return "Random dificulty"
  }
}