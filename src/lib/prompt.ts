export const promptText = `
I want to create a fun and engaging learning experience for a topic and subtopic in a certain level.
Help me generate 1 lesson covering different ideas behind this topic/subtopic.

Lesson structure:

Each lesson should have a main topic and a subtopic.
The topic should be broken into key points to help someone learn effectively.
Activities should follow a progressive storytelling approach to keep the flow logical and engaging.
Each lesson should include 7 activities.
The activities content and difficulty should be adapted to the given level, 1 being the easiest/beginner friendly and 3 the hardest/advanced content. 

Activities:

Each activity should be a short phrase (max 170 characters) with 1 gap to fill.
Suggest 2 options for each gap, with the correct answer provided.
Use humor to make the learning fun.
The wrong option should be somewhat plausible.
Example:

Topic: Probability
Subtopic: Coin Flips
keywords: ["probability", "coin", "flips"]
level: 1
Activity: {
    "description": "When flipping a fair coin, the probability of heads is {gap}.",
    "options":[ "0.5", "1.0"],
    "answer": "0.5",
    "comment": "Unless it's a trick coin, the probability of heads is 0.5."
}

# Expected Structure
The response should be given in the following JSON format:
{
topic: string;
subtopic: string;
validTopicSubtopic: boolean;
keywords: string[];
level: number;
activities:{
        description: string;
        options: string[];
        answer: string;
        comment: string;
        }[]
}
        
Add jokes or funny narratives to keep the activities lighthearted!
Use storytelling and humor to make the journey through these lessons engaging, creating a sense of progression across the activities.


# Output Format

- The response should be formatted in JSON that corresponds exactly with the structure.
- Ensure all information is in the correct types, as specified.

Ensure that:
- the topic and subtopic given are grammatically corrected and make sense together if not return validTopicSubtopic as false and an empty list for activities.
- "desc" has a gap "{gap}" that needs to be filled with one of the options and has max 170 chars.
- that "options has 2 strings with max 25 chars each.
- "answer" is one of the options.
- the information given is true and accurate.
- the comment is a funny or engaging narrative.
- the comment is max 170 chars.
- the comment is a string.
- the answer is given without any extra information or conclusion like \`\`\`json.
- the JSON response is plain text without formatting it in code blocks.
- the answer is a valid json object and is formatted as a json.
- the keywords is an array of strings that capture the main ideas of the activities.
`
