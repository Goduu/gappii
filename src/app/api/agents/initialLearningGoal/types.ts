import { Annotation } from "@langchain/langgraph"
import { z } from "zod"

export const InitialLearningGoalsState = Annotation.Root({
    userInput: Annotation<string>({
        reducer: (x, y) => y ?? x ?? "",
    }),
    initialLearningGoals: Annotation<InitialLearningGoals>({
        reducer: (x, y) => y ?? x ?? [],
    }),
    aiMessage: Annotation<string>({
        reducer: (x, y) => y ?? x ?? "",
    }),
    pastSteps: Annotation<[string, string][]>({
        reducer: (x, y) => x.concat(y),
    }),
    response: Annotation<string>({
        reducer: (x, y) => y ?? x,
    }),
})

export type InitialLearningGoal = z.infer<typeof learningGoalSchema>

export type InitialLearningGoals = {
    learningGoals: InitialLearningGoal[]
}

export const learningGoalSchema = z.object({
    index: z.number(),
    subject: z.string(),
    description: z.string(),
    goals: z.array(z.string()),
    previousIndex: z.number(),
})

