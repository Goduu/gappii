import { languages } from "@/app/types";
import { createDetailedPlanCommand } from "@/lib/prompts/createDetailedPlanPrompt";
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

  const completion = await openai.chat.completions.create({
    model: modelName,
    messages: [
      {
        // role: "system", content: createDetailedPlanPrompt.replace("{language}", language)
        role: "system", content: createDetailedPlanCommand
          .replace("<selected_theme>", selectedTheme)
          .replace("<selected_goals>", selectedGoals)
          .replace("<language>", language)
          .replace("<number_of_topics>", "2 to 3")
          .replace("<number_of_subtopics>", "2 to 3")
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
