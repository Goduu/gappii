"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LoadingBubble } from "./loading-bubble"
import { Message } from "./types"
import { OptionsDisplay } from "./options-display"
import { MessageBubble } from "./message-bubble"
import { ShowMoreOption } from "./show-more-option"
import { InputBox } from "./input-box"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDetectEsc } from "@/lib/utilitary-hooks/useDetectEsc"

type LearnInput2Props = {
    isOpen?: boolean
    onCreate?: (lessonId: string) => void
    onClose?: () => void
}

export const LearnInput = ({ isOpen = false, onCreate, onClose }: LearnInput2Props) => {
    const [isActive, setIsActive] = useState(isOpen)
    const [error, setError] = useState<string>("")
    const [level, setLevel] = useState("1")
    const [messages, setMessages] = useState<Message[]>([])
    const [numberOfQuestions, setNumberOfQuestions] = useState("7")
    // Track if user has submitted a prompt
    const [hasSubmittedPrompt, setHasSubmittedPrompt] = useState(false)

    useDetectEsc(onClose || (() => { }))

    const containerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // Prevent body scrolling when component is active
    useEffect(() => {
        if (isActive) {
            // Save the current overflow style
            const originalStyle = window.getComputedStyle(document.body).overflow;
            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';

            // Restore original overflow on cleanup
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isActive]);

    // Check if user has submitted a prompt when messages change
    useEffect(() => {
        if (messages.length > 0) {
            setHasSubmittedPrompt(true);
            scrollToBottom();
        }
    }, [messages]);

    useEffect(() => {
        setIsActive(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setIsActive(false)
        onClose?.()
    }

    return (
        <div className={cn(
            "flex flex-col items-center justify-center text-foreground p-4 transition-all duration-1000",
            isActive ? "fixed inset-0 z-40" : "relative"
        )}>
            <div className={cn(
                "absolute inset-0 bg-background opacity-0 scale-0 origin-center transition-all duration-500",
                isActive && "opacity-95 scale-100 backdrop-blur"
            )} />

            {/* Close button */}
            {isActive && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    <X className="size-6" />
                </Button>
            )}

            <div className={cn(
                "w-full max-w-3xl mx-auto relative transition-all duration-500 h-[85vh] flex flex-col",
                isActive && "z-20"
            )}>
                {/* Title - shows at top before prompt, smaller after prompt */}
                <h1 className={cn(
                    "text-4xl font-bold text-center transition-all duration-500",
                    hasSubmittedPrompt ? "text-2xl mb-4" : "mb-12"
                )}>
                    What do you want to learn?
                </h1>

                <div ref={containerRef} className={cn(
                    "flex flex-col w-full relative",
                    hasSubmittedPrompt ? "h-full" : "flex-grow flex items-center justify-center"
                )}>
                    {/* Main content area - flexible layout based on state */}
                    {hasSubmittedPrompt ? (
                        <>
                            {/* Message list - scrollable area */}
                            <div className="flex-grow overflow-y-auto pb-24">
                                <div className="space-y-4 w-full py-4">
                                    {messages.map((msg, index) => (
                                        <div key={index} className="space-y-2">
                                            {msg.type === 'user' ? (
                                                <MessageBubble content={msg.content ?? ""} isUser={true} />
                                            ) : msg.type === 'loading' ? (
                                                <LoadingBubble />
                                            ) : msg.type === 'assistant' ? (
                                                <MessageBubble content={msg.content ?? ""} isUser={false} />
                                            ) : (
                                                <OptionsDisplay
                                                    message={msg}
                                                    messages={messages}
                                                    setMessages={setMessages}
                                                    setError={setError}
                                                    level={level}
                                                    setLevel={setLevel}
                                                    numberOfQuestions={numberOfQuestions}
                                                    setNumberOfQuestions={setNumberOfQuestions}
                                                    onCreate={onCreate}
                                                />
                                            )}
                                        </div>
                                    ))}
                                    <ShowMoreOption
                                        messages={messages}
                                        setMessages={setMessages}
                                        setError={setError}
                                    />
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                            
                            {/* Input box - fixed at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm">
                                <InputBox
                                    error={error}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                    setMessages={setMessages}
                                    setError={setError}
                                />
                            </div>
                        </>
                    ) : (
                        /* Input box - centered before first prompt */
                        <div className="w-full max-w-xl mx-auto">
                            <InputBox
                                error={error}
                                isActive={isActive}
                                setIsActive={setIsActive}
                                setMessages={setMessages}
                                setError={setError}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
