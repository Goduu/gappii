"use client"

import { useRef, useEffect } from "react"
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

        // handleTopicClickBase(topic, subtopic, level, language, numberOfQuestions, setMessages);
        
    }

    const startAutoCreation = () => {
        startAutoCreationBase(selectedTheme, detailedPlanItems, level, language, numberOfQuestions, setMessages);
    }

    return (
        <div className={cn(
            "flex flex-col gap-4 items-center justify-center text-foreground p-4 transition-all duration-1000",
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
                "w-full max-w-3xl mx-auto space-y-6 relative transition-all duration-500",
                isActive && "z-20 scale-95"
            )}>
                <h1 className={cn(
                    "text-4xl font-bold text-center mb-12 transition-transform duration-500",
                    isActive && "-translate-y-10"
                )}>
                    Create Your Learning Path
                </h1>

                <div ref={containerRef} className="flex flex-col gap-2 items-center w-full">
                    {isActive && (
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
                    )}
                    <PathInputBox
                        error={error}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        onSubmit={handleUserInput}
                        disabled={autoCreationInProgress || processingTopics.length > 0}
                    />
                </div>
            </div>
        </div>
    )
}
