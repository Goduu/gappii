import { InitialLearningGoals, InitialLearningGoal } from "@/app/api/agents/initialLearningGoal/types"

export const isLearningGoal = (goal: any): goal is InitialLearningGoal => {
    return (
        typeof goal === "object" &&
        goal !== null &&
        typeof goal.index === "number" &&
        typeof goal.subject === "string" &&
        typeof goal.description === "string" &&
        Array.isArray(goal.goals) &&
        goal.goals.every((g: any) => typeof g === "string") &&
        typeof goal.previousIndex === "number"
    )
}

export const isLearningGoals = (data: any): data is InitialLearningGoals => {
    return (
        typeof data === "object" &&
        data !== null &&
        Array.isArray(data.learningGoals) &&
        data.learningGoals.every(isLearningGoal)
    )
}