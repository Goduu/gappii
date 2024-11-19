import { promptText } from "@/lib/prompt";
import { validateApiReturnObject } from "@/lib/validateApiReturnObject";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const text = body.text
  console.log('request', body);

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
        content: text,
      },
    ],
  });
  console.log('xongas',completion.choices[0].message.content)
  const aiResponse = completion.choices[0].message.content
  return new Response(aiResponse);
  return new Response(test);
}

const test = `
{
    "basicInfo": {
        "name": "Sarah Lin",
        "age": "1993-07-09",
        "allergies": ["penicillin", "sulfa drugs"]
    },
    "vitals": {
        "temperature": "101°F",
        "bloodPressure": "130/85",
        "heartRate": 88,
        "respiratoryRate": 18,
        "mentalStatus": "Drowsy",
        "painLevel": 7,
        "painLocation": "left leg",
        "painResponse": ""
    },
    "medications": [
        {
            "name": "acetaminophen",
            "lastDose": "3 PM"
        }
    ],
    "shiftNotes": {
        "summary": "Patient resting, slight fever.",
        "nextShift": "Monitor temperature, and consider pain management update."
    }
}
`

