import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { learningGoalSchema } from "./types";


export const initialLearningGoalSchema = z.object({
    aiMessage: z.string().describe("The AI message to the user"),
    userInput: z.string().describe("The user input"),
    learningGoals: z.array(learningGoalSchema).describe("The learning goals for the user input, should containt 4 objects")
})

export const createModelWithStructuredOutput = () => {
    const model = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
    });

    const modelWithStructure = model.withStructuredOutput(initialLearningGoalSchema);

    return modelWithStructure;

}