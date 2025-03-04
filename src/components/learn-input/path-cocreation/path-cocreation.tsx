"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDetectEsc } from "@/lib/utilitary-hooks/useDetectEsc"
import { PathInputBox } from "./components/PathInputBox"
import { MessageList } from "./components/MessageList"
import { usePathCreation } from "./hooks/usePathCreation"
import { useMessageState } from "./hooks/useMessageState"

type PathCocreationProps = {
    isOpen?: boolean
    onCreate?: (lessonId: string) => void
    onClose?: () => void
}

export const PathCocreation = ({ isOpen = false, onCreate, onClose }: PathCocreationProps) => {
    // Use custom hooks for state management
    const {
        isActive,
        setIsActive,
        error,
        messages,
        setMessages,
        level,
        language,
        numberOfQuestions,
        selectedTheme,
        detailedPlanItems,
        planModificationState,
        messagesEndRef,
        handleUserInput,
        handleThemeSelection,
        startPlanModification,
        handleTopicOnlyClick,
        handleModificationSelection
    } = useMessageState(isOpen)

    const {
        processingTopics,
        failedTopics,
        createdLessons,
        autoCreationInProgress,
        startAutoCreation: startAutoCreationBase,
    } = usePathCreation(onCreate)

    // Track if user has submitted a prompt
    const [hasSubmittedPrompt, setHasSubmittedPrompt] = useState(false)

    useDetectEsc(onClose || (() => { }))

    const containerRef = useRef<HTMLDivElement>(null)

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
        if (messages.length > 1) {
            setHasSubmittedPrompt(true);
        }
    }, [messages]);

    const handleClose = () => {
        setIsActive(false)
        onClose?.()
    }

    // Wrapper functions to connect the hooks
    const handleTopicClick = (topic: string, subtopic: string) => {
        // If in modification selection mode
        if (planModificationState === 'selecting') {
            handleModificationSelection(topic, subtopic);
            return;
        }
    }

    const startAutoCreation = () => {
        startAutoCreationBase(selectedTheme, detailedPlanItems, level, language, numberOfQuestions, setMessages);
    }

    // Handle user input and track submission
    const handleUserInputWithTracking = async (input: string) => {
        await handleUserInput(input);
        setHasSubmittedPrompt(true);
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
                    Create Your Learning Path
                </h1>

                <div ref={containerRef} className={cn(
                    "flex flex-col w-full relative",
                    hasSubmittedPrompt ? "h-full" : "flex-grow flex items-center justify-center"
                )}>
                    {/* Main content area - flexible layout based on state */}
                    {hasSubmittedPrompt ? (
                        <>
                            {/* Message list - scrollable area */}
                            <div className="flex-grow overflow-y-auto mb-24">
                                <MessageList 
                                    messages={messages}
                                    messagesEndRef={messagesEndRef}
                                    planModificationState={planModificationState}
                                    processingTopics={processingTopics}
                                    failedTopics={failedTopics}
                                    createdLessons={createdLessons}
                                    autoCreationInProgress={autoCreationInProgress}
                                    onThemeSelect={handleThemeSelection}
                                    onTopicClick={handleTopicClick}
                                    onTopicOnlyClick={handleTopicOnlyClick}
                                    onStartAutoCreation={startAutoCreation}
                                    onStartPlanModification={startPlanModification}
                                    detailedPlanItems={detailedPlanItems}
                                />
                            </div>
                            
                            {/* Input box - fixed at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm">
                                <PathInputBox
                                    error={error}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                    onSubmit={handleUserInputWithTracking}
                                    disabled={autoCreationInProgress || processingTopics.length > 0}
                                />
                            </div>
                        </>
                    ) : (
                        /* Input box - centered before first prompt */
                        <div className="w-full max-w-xl mx-auto">
                            <PathInputBox
                                error={error}
                                isActive={isActive}
                                setIsActive={setIsActive}
                                onSubmit={handleUserInputWithTracking}
                                disabled={autoCreationInProgress || processingTopics.length > 0}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
