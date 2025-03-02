export const identifyTopicSubtopic = `
You will receive a short text where a user describes what they want to learn 
(e.g., "I want to learn about honey production").
Your task is to extract a main topic and a relevant subtopic from the user's description.
These will serve as the basis for creating a lesson about the theme, so they must be concise and easily understandable.
Generate exactly three options as JSON objects following these guidelines:

    Interpretation:
        Two options: Provide direct, varied interpretations of the input (i.e., the topic and subtopic should clearly relate to the user's description).
        One option: Offer a creative or tangential interpretation that still connects directly to the input.

    Conciseness for Lesson Creation:
        The topic should be 1 to 3 words maximum.
        The subtopic should be concise, using no more than 5 words.
        Both must be clear and specific enough to serve as the basis for a lesson.

    Diversity:
        Ensure the three options cover a wide range of knowledge areas.

    Output Format:
    Return the options in the following JSON format:
  [
    {
      "topic": "string",
      "subtopic": "string"
    },
    {
      "topic": "string",
      "subtopic": "string"
    },
    {
      "topic": "string",
      "subtopic": "string"
    }
  ]
    
Ensure that each option is clear, relevant, and fulfills the criteria above for lesson creation.
`
