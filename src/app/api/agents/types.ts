import { BaseMessageLike } from "@langchain/core/messages"


export type State = {
    messages: BaseMessageLike[]
    learningGoalStep: LearningGoal
}


export type EpisodicMemory = {
    userInput: string
    agentResponse: string
    timestamp: string
}


export type LearningGoal = {
    index: number
    subject: string
    description: string
    goals: string[]
    previousIndex: number
}

export type Message = {
    id: string
    content: string
    role: "assistant" | "user" | "system" | "canvas"
    toolCalls?: string[]
}