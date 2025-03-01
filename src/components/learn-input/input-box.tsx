import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { RefreshCcw, SendHorizontal } from "lucide-react"
import { useRef, useState } from "react"
import { Message } from "./types"
import { processUserInput } from "@/lib/processUserInput"
import { LanguageSelector } from "./language-selector"
import { SupportedLanguage } from "@/app/types"

type InputBoxProps = {
    error: string
    isActive: boolean
    setIsActive: (isActive: boolean) => void
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
    setError: (error: string) => void
}

export const InputBox = ({ error, isActive, setIsActive, setMessages, setError }: InputBoxProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [input, setInput] = useState("")
    const [isUsed, setIsUsed] = useState(false)
    const [language, setLanguage] = useState<SupportedLanguage | undefined>(undefined)

    const handleContainerClick = (e: React.MouseEvent) => {
        // Prevent propagation to stop useDetectOutsideClick from firing
        e.stopPropagation()
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

    const handleRestartChat = (e: React.MouseEvent) => {
        e.stopPropagation()
        setMessages([])
        setError("")
        setIsUsed(false)
    }

    return (
        <div className="relative w-full flex flex-col items-center input-box-container"
             onClick={handleContainerClick}
             onMouseDown={(e) => e.stopPropagation()}>
            {error && isActive && (
                <div className="text-red-500 text-sm text-center mb-2 flex items-center gap-2">
                    {error}
                    <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={handleRestartChat}
                    >
                        <RefreshCcw />Restart chat
                    </Button>
                </div>
            )}
            <div
                className={cn(
                    "flex flex-col gap-4 p-6 rounded-lg border bg-background transition-all duration-500",
                    "w-full max-w-4xl relative",
                    isActive && "shadow-lg"
                )}
            >
                <div className="flex gap-2 items-center">
                    <LanguageSelector onLanguageChange={setLanguage} language={language} />
                    <Input
                        ref={inputRef}
                        disabled={isUsed || !!error}
                        placeholder={isUsed ? "Chose from above." : "I want to learn"}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setIsActive(true)}
                        onKeyDown={handleKeyPress}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 h-full text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                        disabled={isUsed || !!error}
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleSubmit()
                        }}
                    >
                        <SendHorizontal className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}