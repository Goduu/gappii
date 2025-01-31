export const createLessonPrompt = `
I want to create an engaging, effective learning experience for a given topic and subtopic at a specified difficulty level.
The lesson should be based on cutting-edge research in neuroscience and educational psychology, focusing on techniques proven to enhance memory retention, comprehension, and active recall.

Lesson structure:

- Each lesson should have a main **topic** and **subtopic**.
- Validate the relationship between the topic and subtopic:
  - If they are not semantically related, set "validTopicSubtopic" to **false** and provide no activities.
- The lesson should be in the **language** given.
- The lesson should adapt content to the specified **level**:
  - **Beginner level**: Simplify concepts using foundational principles and accessible language.
  - **Intermediate level**: Include more complex ideas and examples, requiring application of knowledge.
  - **Advanced level**: Provide research-level and challenging content, with subtle nuances and potential for multiple interpretations.

Learning Path:

The lesson should use an **engaging learning path** to enhance retention:
1. Content should be logically sequenced to build understanding progressively.
2. Include diverse but related activities exploring different aspects of the topic/subtopic (e.g., definitions, applications, implications).
3. Activities should encourage **active recall**, using varied approaches like examples, reasoning, and problem-solving.
4. Introduce spaced repetition by subtly revisiting key concepts across activities.

Activities:

Each lesson must include **activitiesNumber*** activities that encourage engagement and critical thinking. Follow these requirements:
- Each activity should consist of:
  1. A **description** (max 170 characters) with one gap "{gap}" to fill.
  2. Two **options** for the gap (max 25 characters each), with the correct answer provided.
  3. A brief **comment** (max 170 characters) explaining the answer, using engaging or relatable phrasing.
  4. A **mermaid diagram** is optional and can be of any type if applicable to the activity description (graph TD, gitGraph,sequenceDiagram,classDiagram,journey,pie,gantt,timeline etc.) It should illustrate the activity as in a workbook style.
  - Ensure that:
  - The correct answer is one of the options.
  - The order property is set to reflect the activity sequence.
  - The wrong option is plausible but incorrect.
  - The answer is not directly stated elsewhere in the description or comment.
  - That you just add a mermaid diagram if it is very logical and applicable to the activity description.
  - The mermaid diagram does not contain the answer.
  
Example Lesson:

Topic: Artificial Intelligence  
Subtopic: Automation  
Level: 1 (Beginner)  

{
  "topic": "Artificial Intelligence",
  "order": 0,
  "subtopic": "Automation",
  "validTopicSubtopic": true,
  "language": "en-us"
  "keywords": ["AI", "automation", "algorithms"],
  "level": 1,
  "activities": [
    {
      "description": "Automation in AI relies heavily on {gap}.",
      "options": ["algorithms", "guesswork"],
      "answer": "algorithms",
      "comment": "Guesswork? No way! AI isn't reading tea leaves for automation!",
    }
  ]
}

Response Format:

- Return the lesson in **valid JSON format** without code blocks.
- JSON structure:
  {
    "topic": string,
    "subtopic": string,
    "validTopicSubtopic": boolean,
    "keywords": string[],
    "language": string,
    "level": number,
    "activities": [
      {
        "description": string,
        "order": number,
        "options": string[],
        "answer": string,
        "comment": string,
        "mermaid": string,
      }
    ]
  }

Ensure:
- Topics and subtopics are grammatically corrected and semantically related.
- Descriptions are clear and engaging, with a gap to fill.
- Information is accurate and relevant.
- Activities adapt to the given level and reflect progressive learning principles.
- Mermaid diagrams are valid, render correctly, are not complex and don't contain the direct answer.
`
