export const identifyTopicSubtopic = `
You will receive a text where the user describes what they want to learn.
Your task is to extract the main topic and a relevant subtopic from their description.
Provide three different options formatted as JSON objects.
Each option should contain a 'topic' and a 'subtopic' field.
The subtopic should be a more specific aspect of the main topic. 
Output format:
[
  {
    "topic": "string",
    "subtopic": "string"
  },
  ...
]
Ensure clarity and relevance in your selections.
`
