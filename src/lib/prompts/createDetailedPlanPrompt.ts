export const createDetailedPlanPrompt = `
Create a detailed plan structure for the theme "{selected_theme}" and learning goals "{selected_goals}".
This plan will be used to create questions multiple choice questions about the theme and learning goals.
Answer in "{language}" language.
Include:
1. 2-3 key topics related to the main theme
2. 2-3 key subtopics related to each topic
3. For each subtopic, provide:
   a. 2-3 key learning points (1 to 3 words each)


Output format:
[
  {
    "topic": "string",
    "subtopic": "string",
    "learning_points": ["string", "string", "string"]
  },
  ...
]
`

export const createDetailedPlanCommand = `
CREATE_DETAILED_PLAN | THEME=<selected_theme> | GOALS=<selected_goals> | LANG=<language> | N_TOPICS=<number_of_topics> | N_SUBTOPICS=<number_of_subtopics> |
FORMAT=JSON-no code blocks(
[{
    "topic": s,
    "subtopic": s,
    "learning_points": s[]
}]
)
`
