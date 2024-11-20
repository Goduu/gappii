import { promptText } from "@/lib/prompt";
import { validateApiReturnObject } from "@/lib/validateApiReturnObject";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const text = body.text

  const openai = new OpenAI(
    { apiKey: process.env.OPENAI_API_KEY }
  );

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
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

  return new Response(completion.choices[0].message.content);
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

