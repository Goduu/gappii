import { NextRequest } from "next/server";
import OpenAI from "openai";
import { modifyDetailedPlanPrompt } from "@/lib/prompts/modifyDetailedPlanPrompt";
import { languages } from "@/app/types";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const selectedTheme = body.selectedTheme;
    const selectedGoals = body.selectedGoals;
    const topic = body.topic;
    const subtopic = body.subtopic;
    const plan = body.plan;
    const userModifications = body.userModifications;
    const language = body.language || languages.en;

    const token = process.env["GITHUB_TOKEN"];
    const endpoint = "https://models.inference.ai.azure.com";
    const modelName = "gpt-4o-mini";

    const openai = new OpenAI({ baseURL: endpoint, apiKey: token });

    console.log("Modifying plan for:", selectedTheme);
    console.log("Selected goals:", selectedGoals);
    console.log("Topic to modify:", topic);
    console.log("Subtopic to modify:", subtopic || "All subtopics");
    
    // Format the plan as a string for the prompt
    const planString = JSON.stringify(plan, null, 2);
    
    // Create the prompt with all the necessary replacements
    const prompt = modifyDetailedPlanPrompt
        .replace("{selected_theme}", selectedTheme)
        .replace("{selected_goals}", selectedGoals.join(", "))
        .replace("{language}", language)
        .replace("{plan}", planString)
        .replace("{topic}", topic)
        .replace("{subtopic}", subtopic || "all subtopics")
        .replace("{user_modifications}", userModifications);

    const completion = await openai.chat.completions.create({
        model: modelName,
        messages: [
            {
                role: "system",
                content: prompt
            }
        ],
    });
    
    const aiResponse = completion.choices[0].message.content;
    
    if (!aiResponse) {
        return new Response(JSON.stringify({ error: "No response from AI" }), { status: 500 });
    }
    
    try {
        // Try to parse the response as JSON
        const parsedResponse = JSON.parse(aiResponse);
        return new Response(JSON.stringify(parsedResponse));
    } catch (error) {
        console.error("Failed to parse AI response:", error);
        console.error("Raw response:", aiResponse);
        return new Response(JSON.stringify({ error: "Failed to parse AI response" }), { status: 500 });
    }
} 