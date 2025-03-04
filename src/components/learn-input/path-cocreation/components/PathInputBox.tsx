import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { SendHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PathInputBoxProps } from "../types"
import { Whisper } from "@/components/ui/tooltip"

export const PathInputBox = ({ error, isActive, disabled, onSubmit, setIsActive }: PathInputBoxProps) => {
    const [input, setInput] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async () => {
        if (!input.trim() || disabled) return

        const userInput = input
        setInput("")
        await onSubmit(userInput)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <div className="relative w-full">
            {error && isActive && (
                <div className="text-red-500 text-sm text-center mb-2">
                    {error}
                </div>
            )}
            <div
                className={cn(
                    "flex flex-col gap-4 p-4 rounded-xl border transition-all duration-300",
                    "w-full relative shadow-md",
                    isActive && "border-primary/30"
                )}
            >
                <Whisper text="Functionality is still in beta" asChild>
                    <div className="absolute top-0 right-0 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-lg border border-primary/30 translate-y-[-50%] translate-x-[-10%]">
                        BETA
                    </div>
                </Whisper>

                <div className="flex gap-2 items-center">
                    <Input
                        ref={inputRef}
                        disabled={disabled}
                        placeholder="What would you like to learn about today?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setIsActive(true)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 h-12 text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                    />
                    <Button
                        disabled={disabled}
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "shrink-0 h-10 w-10 rounded-full transition-colors",
                            input.trim() ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground"
                        )}
                        onClick={handleSubmit}
                    >
                        <SendHorizontal className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
} 