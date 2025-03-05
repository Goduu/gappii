"use client"

import { useState, useEffect } from "react"
import { Message } from "./types"
import { OptionsDisplay } from "./options-display"
import { ShowMoreOption } from "./show-more-option"
import { MessageBubble } from "./message-bubble"
import { LoadingBubble } from "./loading-bubble"
import { SupportedLanguage, languages } from "@/app/types"
import { processUserInput } from "@/lib/processUserInput"

// Import shared components
import { ModalContainer } from "./shared/ModalContainer"
import { UnifiedInputBox } from "./shared/UnifiedInputBox"
import { useModalState } from "./shared/useModalState"
import { NavigationOptions } from "./shared/NavigationOptions"
import { cn } from "@/lib/utils"

type LearnInputProps = {
    isOpen?: boolean
    onCreate?: (lessonId: string) => void
    onClose?: () => void
}

export const LearnInput = ({ isOpen = false, onCreate, onClose }: LearnInputProps) => {
    // Use the shared modal state hook
    const {
        isActive,
        setIsActive,
        error,
        setError,
        messages,
        setMessages,
        hasSubmittedPrompt,
        messagesEndRef,
        containerRef,
        handleClose
    } = useModalState({ isOpen, onClose })

    // Component-specific state
    const [level, setLevel] = useState("1")
    const [numberOfQuestions, setNumberOfQuestions] = useState("7")
    const [isUsed, setIsUsed] = useState(false)
    const [language, setLanguage] = useState<SupportedLanguage | undefined>(languages["en"])
    const [createdLessonId, setCreatedLessonId] = useState<string | null>(null)
    const [createdLessonTitle, setCreatedLessonTitle] = useState<string | null>(null)
    const [showNavigationOptions, setShowNavigationOptions] = useState(false)

    // Reset isUsed when messages change
    useEffect(() => {
        if (messages.length === 0) {
            setIsUsed(false)
            setCreatedLessonId(null)
            setCreatedLessonTitle(null)
            setShowNavigationOptions(false)
        }
    }, [messages])

    // Handle user input submission
    const handleSubmit = async (userInput: string) => {
        if (isUsed) return

        setMessages((prev: Message[]) => [...prev,
        { id: 'user', type: 'user', content: userInput } satisfies Message,
        { id: 'loading', type: 'loading', content: '' } satisfies Message
        ])

        try {
            const result = await processUserInput(userInput, setError)
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

    // Handle restart
    const handleRestart = () => {
        setMessages([])
        setError("")
        setIsUsed(false)
        setCreatedLessonId(null)
        setCreatedLessonTitle(null)
        setShowNavigationOptions(false)
    }

    // Handle lesson creation
    const handleLessonCreated = (lessonId: string, lessonTitle: string) => {
        setCreatedLessonId(lessonId)
        setCreatedLessonTitle(lessonTitle)
        setShowNavigationOptions(true)

        // Call the original onCreate if provided
        if (onCreate) onCreate(lessonId)
    }

    // Custom renderer for message content
    const renderMessageContent = (msg: Message) => {
        if (msg.type === 'user') {
            return <MessageBubble content={msg.content ?? ""} isUser={true} />
        } else if (msg.type === 'loading') {
            return <LoadingBubble />
        } else if (msg.type === 'assistant') {
            return <MessageBubble content={msg.content ?? ""} isUser={false} />
        } else if (msg.type === 'options') {
            return (
                <OptionsDisplay
                    message={msg}
                    messages={messages}
                    setMessages={setMessages}
                    setError={setError}
                    level={level}
                    setLevel={setLevel}
                    numberOfQuestions={numberOfQuestions}
                    setNumberOfQuestions={setNumberOfQuestions}
                    onCreate={(lessonId) => {
                        // Extract the topic from the last user message
                        const lastUserMessage = [...messages].reverse().find(m => m.type === 'user')
                        const lessonTitle = lastUserMessage?.content || "Created Lesson"
                        handleLessonCreated(lessonId, lessonTitle)
                    }}
                />
            )
        }
        return null
    }

    // Render bottom content (show more option and navigation options)
    const renderBottomContent = () => (
        <>
            <ShowMoreOption
                messages={messages}
                setMessages={setMessages}
                setError={setError}
            />

            {showNavigationOptions && createdLessonId && (
                <div className="mt-6">
                    <NavigationOptions
                        lessonId={createdLessonId}
                        lessonTitle={createdLessonTitle || "Created Lesson"}
                    />
                </div>
            )}
        </>
    )

    return (
        <ModalContainer
            isActive={isActive}
            onClose={handleClose}
            title="What do you want to learn?"
            hasSubmittedPrompt={hasSubmittedPrompt}
        >
            <div ref={containerRef} className="flex-grow overflow-y-auto">
                {hasSubmittedPrompt ? (
                    <div className={cn(
                        "flex flex-col",
                        isActive && "h-full"
                    )}>
                        {/* Message list - scrollable area */}
                        {isActive && (
                            <div className="flex-grow overflow-y-auto pb-24">
                                <div className="space-y-4 w-full py-4">
                                    {messages.map((msg, index) => (
                                        <div key={index} className="space-y-2">
                                            {renderMessageContent(msg, index)}
                                        </div>
                                    ))}
                                    {renderBottomContent()}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                        )}

                        {/* Input box - fixed at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm">
                            <UnifiedInputBox
                                error={error}
                                isActive={isActive}
                                isUsed={isUsed}
                                setIsActive={setIsActive}
                                onSubmit={handleSubmit}
                                onRestart={handleRestart}
                                showRestartButton={true}
                                showLanguageSelector={true}
                                language={language}
                                onLanguageChange={setLanguage}
                            />
                        </div>
                    </div>
                ) : (
                    /* Input box - centered before first prompt */
                    <div className={cn(
                        "w-full flex items-center justify-center",
                        isActive && "h-full"
                    )}>
                        <div className="w-full max-w-xl">
                            <UnifiedInputBox
                                error={error}
                                isActive={isActive}
                                isUsed={isUsed}
                                setIsActive={setIsActive}
                                onSubmit={handleSubmit}
                                onRestart={handleRestart}
                                showRestartButton={true}
                                showLanguageSelector={true}
                                language={language}
                                onLanguageChange={setLanguage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </ModalContainer>
    )
}
