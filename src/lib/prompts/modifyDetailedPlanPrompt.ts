export const modifyDetailedPlanPrompt = `
You previously created a detailed plan structure for the theme "{selected_theme}" and learning goals "{selected_goals}".
The original plan is as follows:
{plan}

The user has selected the topic "{topic}" and subtopic "{subtopic}" for modification.
The user's requested modifications are:
{user_modifications}

Instructions:
1. Locate the exact topic and subtopic in the original plan.
2. Apply the user's modifications ONLY to the selected topic and subtopic.
3. Keep all other topics, subtopics, and learning points exactly as they were in the original plan.
4. Ensure the modified plan maintains the same structure and number of elements as the original.

Please provide the updated plan, incorporating the user's modifications for the selected topic and subtopic only.

Return in **valid JSON format** without code blocks.
Output the entire modified plan in the following format:
[
  {
    "topic": "string",
    "subtopic": "string",
    "learning_points": ["string", "string", "string"]
  },
  ...
]

Important: The output should include ALL topics and subtopics from the original plan, with modifications applied only to the user-selected topic and subtopic.
`