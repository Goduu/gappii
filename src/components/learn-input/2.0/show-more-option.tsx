import { Button } from "@/components/ui/button"
import { Message } from "./types"
import { processUserInput } from "@/lib/processUserInput"
import { aiMessages } from "./aiMessages"

type ShowMoreOptionProps = {
    messages: Message[]
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
    setError: React.Dispatch<React.SetStateAction<string>>
}

export const ShowMoreOption = ({ messages, setMessages, setError }: ShowMoreOptionProps) => {
    const lastMessage = messages[messages.length - 1]
    const isLastMessageOptions = lastMessage?.type === 'options'
    const hasSubtopics = lastMessage?.options?.every(opt => opt.subtopic)
    const topicOptionsCount = messages.filter(msg => msg.type === 'options').length
    const showMoreOptions = isLastMessageOptions && hasSubtopics && topicOptionsCount < 2

    if (!showMoreOptions) return null

    const handleMoreOptions = async (message: Message | undefined) => {
        if (!message?.options) return
        setMessages(prev => [...prev, { type: 'loading', content: '' }])

        try {
            const result = await processUserInput(
                `I want more options similar to these topics: ${message.options.map(opt =>
                    `${opt.topic} (${opt.subtopic})`
                ).join(', ')}`,
                setError
            )
            console.log(aiMessages.hereAreMoreOptions,
                { type: 'options', content: '', options: result })
            if (result) {
                setMessages(prev => [
                    ...prev.slice(0, -1),
                    aiMessages.hereAreMoreOptions,
                    { type: 'options', content: '', options: result }
                ])
            }
        } catch (err) {
            setMessages(prev => prev.slice(0, -1))
            setError("Failed to get more options. Please try again.")
        }
    }

    return (
        <div className="relative mt-2 before:absolute before:left-0 before:right-0 before:top-1/2 before:h-px before:bg-muted">
            <Button
                variant="ghost"
                className="relative justify-center text-center hover:bg-muted/50 border border-dashed border-muted-foreground/50"
                onClick={() => handleMoreOptions(lastMessage)}
            >
                <span className="font-medium text-muted-foreground">
                    Show me more options...
                </span>
            </Button>
        </div>
    )
}