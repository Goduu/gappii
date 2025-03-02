export const createLessonPrompt = `
I want to create an engaging, effective learning experience for a given topic and subtopic at a specified difficulty level.
The lesson should be based on cutting-edge research in neuroscience and educational psychology, focusing on techniques proven to enhance memory retention, comprehension, and active recall.

Lesson structure:

- Each lesson should have a main **topic** and **subtopic**.

Learning Path:

The lesson should use an **engaging learning path** to enhance retention:
1. Content should be logically sequenced to build understanding progressively.
2. Include diverse but related activities exploring different aspects of the topic/subtopic (e.g., definitions, applications, implications).
3. Activities should encourage **active recall**, using varied approaches like examples, reasoning, and problem-solving.
4. Introduce spaced repetition by subtly revisiting key concepts across activities.
5. The lesson should be in "{language}" language.

Activities:

Each lesson must include **activitiesNumber*** activities that encourage engagement and critical thinking.
The activities will have (if any) the following learning goals: {learningGoals}
Follow these requirements:
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

Response Format:

- Return the lesson in **valid JSON format** without code blocks.
- JSON structure:
  {
    "topic": string,
    "subtopic": string,
    "keywords": string[],
    "language": string,
    "level": number,
    "activities": [
      {
        "description": string, // must contain one gap "{gap}" to fill
        "order": number,
        "options": string[],
        "answer": string,
        "comment": string,
        "mermaid": string,
      }
    ]
  }

Ensure:
- Descriptions are clear and engaging, with a gap to fill in the format "{gap}".
- Information is NOT invented, inaccurate or irrelevant.
- Activities adapt to the given level and reflect progressive learning principles.
- Mermaid diagrams are valid, render correctly, are not complex and don't contain the direct answer.
- All special characters are escaped.
`
