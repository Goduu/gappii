export type TopicsOption = {
    topic: string;
    subtopic?: string;
    value?: string;
}

export type Message = {
    id: string;
    type: 'user' | 'assistant' | 'options' | 'loading';
    content?: string;
    options?: TopicsOption[];
}

export type MessageUser = {
    type: 'user',
    mode: 'input',
    content: string,
    nextStepId: string,
}

export type MessageHandlerProps = {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    setError: (error: string) => void;
}


export interface LevelSelectorProps {
    level?: string
    onLevelChange: (level: string | undefined) => void
}
