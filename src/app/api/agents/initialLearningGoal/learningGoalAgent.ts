import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createModelWithStructuredOutput } from "./modelWithStructuredOutput";

export const createLearningGoalAgent = () => {

    const promptFromMessages = ChatPromptTemplate.fromMessages([
        ["system", "You are an intelligent learning assistant that helps users define structured and actionable learning goals. Your task is to generate three detailed learning goals based on what the user wants to learn."],
        ["human", "Generate 4 main themes and corresponding learning goals from the the input: {userInput}?"]
    ]);

    const modelWithStructure = createModelWithStructuredOutput();

    const initialLearningGoalAgent = promptFromMessages.pipe(modelWithStructure)

    return initialLearningGoalAgent;

}