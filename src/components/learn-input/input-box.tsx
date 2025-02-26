import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { SendHorizontal } from "lucide-react"
import { useRef, useState } from "react"
import { Message } from "./types"
import { processUserInput } from "@/lib/processUserInput"

type InputBoxProps = {
    error: string
    isActive: boolean
    setIsActive: (isActive: boolean) => void
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
    setError: (error: string) => void
}

export const InputBox = ({ error, isActive, setIsActive, setMessages, setError}: InputBoxProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [input, setInput] = useState("")
    const [isUsed, setIsUsed] = useState(false)

    const handleContainerClick = () => {
        inputRef.current?.focus()
    }

    const handleSubmit = async () => {
        if (!input.trim()) return

        const userMessage = input
        setMessages((prev: Message[]) => [...prev,
        { id: 'user', type: 'user', content: userMessage } satisfies Message,
        { id: 'loading', type: 'loading', content: '' } satisfies Message
        ])
        setInput('')

        try {
            const result = await processUserInput(userMessage, setError)
            if (result) {
                setMessages(prev => [
                    ...prev.slice(0, -1),
                    { id: 'assistant', type: 'assistant', content: 'Choose one of the options or ask for more.' },
                    { id: 'options', type: 'options', content: '', options: result }
                ])
                setIsUsed(true)
            }
        } catch {
            setMessages(prev => prev.slice(0, -1))
            setError("Failed to process your request. Please try again.")
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <div className="relative w-full flex flex-col items-center">
            {error && isActive && (
                <div className="text-red-500 text-sm text-center mb-2">{error}</div>
            )}
            <div
                className={cn(
                    "flex flex-col gap-4 p-6 rounded-lg border bg-background transition-all duration-500",
                    "w-full max-w-4xl relative",
                    isActive && "shadow-lg"
                )}
                onClick={handleContainerClick}
            >
                <div className="flex gap-2 items-center">
                    <Input
                        ref={inputRef}
                        disabled={isUsed}
                        placeholder={isUsed ? "Chose from above." : "I want to learn"}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setIsActive(true)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 h-full text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                        disabled={isUsed}
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        onClick={handleSubmit}
                    >
                        <SendHorizontal className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}