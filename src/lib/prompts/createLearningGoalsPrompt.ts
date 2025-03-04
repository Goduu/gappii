export const createLearningGoalsPrompt = `
Based on the user's input about what they want to learn "{user_input}", 
generate 4 main themes and corresponding learning goals. 
The themes will be used to create a leaning plan for the user.
Answer in "{language}" language.
For each theme, provide:
1. A concise theme title (max 5 words)
2. A brief description (max 20 words)
3. 2-3 specific learning goals

Output format:
[
  {
    "theme": "string",
    "description": "string",
    "learning_goals": ["string", "string", "string"]
  },
  ...
]
`

export const createLearningGoalsCommand = `
CREATE_LEARNING_GOALS | INPUT=<user_input> | N=<number_of_themes> | LANG=<language> | 
FORMAT=JSON-no code blocks (
[{
    "theme": s, // max 5 words
    "description": s, // max 20 words
    "learning_goals": s[] // 2-3 goals
}]
)
`
