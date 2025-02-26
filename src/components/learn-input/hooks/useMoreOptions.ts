import { Message, MessageHandlerProps } from "../types";
import { processUserInput } from "@/lib/processUserInput";
import { aiMessages } from "../aiMessages";

export const useMoreOptions = ({ messages, setMessages, setError }: MessageHandlerProps) => {
    const userInput = messages.find(msg => msg.type === 'user');
    const lastMessage = messages[messages.length - 1];
    const isLastMessageOptions = lastMessage?.type === 'options';
    const hasSubtopics = lastMessage?.options?.every(opt => opt.subtopic);
    const topicOptionsCount = messages.filter(msg => msg.type === 'options').length;

    const showMoreOptions = isLastMessageOptions && hasSubtopics && topicOptionsCount < 2;


    const handleMoreOptions = async (message: Message | undefined) => {
        if (!message?.options) return
        setMessages(prev => [...prev, { id: 'loading', type: 'loading', content: '' }])

        try {
            const result = await processUserInput(
                `I want more options similar to this theme: ${userInput?.content}. 
                You already gave me these options which doesn't fit my expectation: ${message.options.map(opt =>
                    `${opt.topic} (${opt.subtopic})`
                ).join(', ')}`,
                setError
            )
            if (result) {
                setMessages(prev => [
                    ...prev.slice(0, -1),
                    aiMessages.hereAreMoreOptions,
                    { id: 'options', type: 'options', content: '', options: result }
                ])
            }
        } catch {
            setMessages(prev => prev.slice(0, -1))
            setError("Failed to get more options. Please try again.")
        }
    }


    return { showMoreOptions, handleMoreOptions };
}; 