import { promptText } from "@/lib/prompt2";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const topic = body.topic
  const subtopic = body.subtopic
  const level = body.level

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
        role: "system", content: promptText
      },
      {
        role: "user",
        content: `Topic: ${topic}, Subtopic: ${subtopic}, Level: ${level}`,
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

