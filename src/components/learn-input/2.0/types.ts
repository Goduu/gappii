export type TopicsOption = {
    topic: string;
    subtopic?: string;
}

export type Message = {
    id: string,
    type: 'user' | 'assistant' | 'options' | 'loading',
    content?: string,
    options?: TopicsOption[],
}

export type MessageUser = {
    type: 'user',
    mode: 'input',
    content: string,
    nextStepId: string,
}
