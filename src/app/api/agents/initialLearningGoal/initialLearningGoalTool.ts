import zodToJsonSchema from "zod-to-json-schema";
import { initialLearningGoalSchema } from "./modelWithStructuredOutput";


export const createInitialLearningGoalTool = () => {
    const initialLearningGoalTool = {
        type: "function",
        function: {
            name: "initialLearningGoal",
            description: "This tool is used to generate 4 learning goals based on the user's input.",
            parameters: zodToJsonSchema(initialLearningGoalSchema),
        },
    };

    const planTool = {
        type: "function",
        function: initialLearningGoalTool,
    };

    return planTool;

}