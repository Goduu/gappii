export const translatePrompt = `
Translate the [lesson] created using the following structure into [language].
Ensure that:

The topic and subtopic are translated if required, based on the activities context, focusing on how this topic/subtopic is typically discussed or referenced in the target language context.
All activities, comments, and descriptions remain relevant to the new language and culture.
Ensure that the lesson structure is maintained, with all JSON keys intact, and only the necessary changes are made to language-specific parts (e.g., descriptions, comments, and options).
If a direct translation would be unclear, adjust the text to convey the intended meaning in a way that feels natural to a native speaker of the target language.
The lesson must adhere to the following principles:

The level and complexity should be maintained according to the given level (Beginner, Intermediate, Advanced).
The activities should retain the structure, and the gap should be filled with culturally and linguistically relevant terms.
Translate keywords appropriately, and ensure that the answer choices reflect the translated context.
Return the result in valid JSON format without code blocks. Keep the rest of the JSON structure (order, options, and format) unchanged, only translating content as needed.
`
