import { languages } from "@/app/types";
import { createDetailedPlanPrompt } from "@/lib/prompts/createDetailedPlanPrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const selectedTheme = body.selectedTheme
  const selectedGoals = body.selectedGoals
  const language = body.language || languages.en

  const token = process.env["GITHUB_TOKEN"];
  const endpoint = "https://models.inference.ai.azure.com";
  const modelName = "gpt-4o-mini";

  const openai = new OpenAI(
    { baseURL: endpoint, apiKey: token }
  );
  console.log("selectedTheme",selectedTheme)
  console.log("selectedGoals",selectedGoals)

  const completion = await openai.chat.completions.create({
    model: modelName,
    messages: [
      {
        role: "system", content: createDetailedPlanPrompt.replace("{language}", language)
      },
      {
        role: "user",
        content: `selected_theme: ${selectedTheme}, selected_goals: ${selectedGoals}`
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
