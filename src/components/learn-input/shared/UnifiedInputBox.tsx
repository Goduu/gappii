import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { SendHorizontal, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SupportedLanguage } from "@/app/types"
import { LanguageSelector } from "../language-selector"

type UnifiedInputBoxProps = {
    error: string
    isActive: boolean
    disabled?: boolean
    placeholder?: string
    showLanguageSelector?: boolean
    showRestartButton?: boolean
    isUsed?: boolean
    setIsActive: (isActive: boolean) => void
    onSubmit: (input: string) => Promise<void>
    onRestart?: () => void
    language?: SupportedLanguage
    onLanguageChange?: (language: SupportedLanguage | undefined) => void
    betaLabel?: boolean
}

export const UnifiedInputBox = ({ 
    error, 
    isActive, 
    disabled = false,
    placeholder = "What would you like to learn about today?",
    showLanguageSelector = false,
    showRestartButton = false,
    isUsed = false,
    setIsActive, 
    onSubmit,
    onRestart,
    language,
    onLanguageChange,
    betaLabel = false
}: UnifiedInputBoxProps) => {
    const [input, setInput] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleContainerClick = (e: React.MouseEvent) => {
        // Prevent propagation to stop useDetectOutsideClick from firing
        e.stopPropagation()
        inputRef.current?.focus()
    }

    const handleSubmit = async () => {
        if (!input.trim() || disabled || isUsed) return

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

    const handleRestartChat = (e: React.MouseEvent) => {
        e.stopPropagation()
        onRestart?.()
    }

    return (
        <div className="relative w-full"
            onClick={handleContainerClick}
            onMouseDown={(e) => e.stopPropagation()}>
            {error && isActive && (
                <div className="text-red-500 text-sm text-center mb-2 flex items-center justify-center gap-2">
                    {error}
                    {showRestartButton && (
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={handleRestartChat}
                            className="ml-2"
                        >
                            <RefreshCcw className="mr-1 h-4 w-4" />Restart
                        </Button>
                    )}
                </div>
            )}
            <div
                className={cn(
                    "flex flex-col gap-4 p-4 rounded-xl border bg-background transition-all duration-300",
                    "w-full relative",
                    isActive && "border-primary/30 shadow-md"
                )}
            >
                {betaLabel && (
                    <div className="absolute top-0 right-0 text-primary text-xs font-semibold px-2 py-0.5 rounded-md border border-primary/30">
                        BETA
                    </div>
                )}

                <div className="flex gap-2 items-center">
                    {showLanguageSelector && language && onLanguageChange && (
                        <LanguageSelector 
                            onLanguageChange={onLanguageChange} 
                            language={language} 
                            allowAll={false} 
                        />
                    )}
                    <Input
                        ref={inputRef}
                        disabled={disabled || isUsed}
                        placeholder={isUsed ? "Choose from above options" : placeholder}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setIsActive(true)}
                        onKeyDown={handleKeyPress}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 h-12 text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                    />
                    <Button
                        disabled={disabled || isUsed}
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "shrink-0 h-10 w-10 rounded-full transition-colors",
                            input.trim() && !isUsed ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground"
                        )}
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