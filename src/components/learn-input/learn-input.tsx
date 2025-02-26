"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LoadingBubble } from "./loading-bubble"
import { Message } from "./types"
import { OptionsDisplay } from "./options-display"
import { MessageBubble } from "./message-bubble"
import { ShowMoreOption } from "./show-more-option"
import { InputBox } from "./input-box"
import { useDetectOutsideClick } from "@/lib/utilitary-hooks/useDetectOutsideClick"

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
    const [isCreatingLesson, setIsCreatingLesson] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (messages.length > 0 && isActive) {
            scrollToBottom()
        }
    }, [messages, isActive])

    useEffect(() => {
        setIsActive(isOpen)
    }, [isOpen])

    useDetectOutsideClick(containerRef, () => {
        setIsActive(false)
        onClose?.()
    })



    return (
        <div className={cn(
            "flex flex-col gap-4 items-center justify-center text-foreground p-4 transition-all duration-1000",
            isActive ? "fixed inset-0 z-40" : "relative"
        )}>
            <div className={cn(
                "absolute inset-0 bg-background opacity-0 scale-0 origin-center transition-all duration-500",
                isActive && "opacity-95 scale-100 backdrop-blur"
            )} />

            <div className={cn(
                "w-full max-w-3xl mx-auto space-y-6 relative transition-all duration-500",
                isActive && "z-20 scale-95"
            )}>
                <h1 className={cn(
                    "text-4xl font-bold text-center mb-12 transition-transform duration-500",
                    isActive && "-translate-y-10"
                )}>
                    What do you want to learn?
                </h1>

                <div ref={containerRef} className="flex flex-col gap-2 items-center w-full">
                    {isActive && (
                        <div className="flex-1 overflow-y-auto space-y-4 max-h-96 overflow-x-scroll w-full">
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
                                            setIsCreatingLesson={setIsCreatingLesson}
                                            isCreatingLesson={isCreatingLesson}
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
                    )}
                    <InputBox
                        error={error}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        setMessages={setMessages}
                        setError={setError}
                        isCreatingLesson={isCreatingLesson}
                    />
                </div>
            </div>
        </div>
    )
}
