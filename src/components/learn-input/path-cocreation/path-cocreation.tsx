"use client"

import { useRef } from "react"
import { usePathCreation } from "./hooks/usePathCreation"
import { useMessageState } from "./hooks/useMessageState"
import { MessageList } from "./components/MessageList"
import { ExtendedMessage } from "./types"

// Import shared components
import { ModalContainer } from "../shared/ModalContainer"
import { UnifiedInputBox } from "../shared/UnifiedInputBox"
import { NavigationOptions } from "../shared/NavigationOptions"

type PathCocreationProps = {
    isOpen?: boolean
    onCreate?: (lessonId: string) => void
    onClose?: () => void
}

export const PathCocreation = ({ isOpen = false, onCreate, onClose }: PathCocreationProps) => {
    // Use custom hooks for path-specific state management
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
        handleModificationSelection,
        hasSubmittedPrompt
    } = useMessageState(isOpen)

    const {
        processingTopics,
        failedTopics,
        createdPath,
        createdLessons,
        autoCreationInProgress,
        startAutoCreation: startAutoCreationBase,
    } = usePathCreation(onCreate)

    const containerRef = useRef<HTMLDivElement>(null)

    // Handle close
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
    }

    // Check if path creation is complete and path data is available
    const isPathCreationComplete = 
        !autoCreationInProgress && 
        createdLessons.length > 0 && 
        processingTopics.length === 0 &&
        createdPath !== null;

    // Get the last created lesson for navigation
    const lastCreatedLesson = createdLessons.length > 0 ? createdLessons[createdLessons.length - 1] : undefined;

    // Extract path data safely
    const pathId = createdPath?.id || "";
    const pathTitle = createdPath?.title || "";

    return (
        <ModalContainer
            isActive={isActive}
            onClose={handleClose}
            title="Create Your Learning Path"
            hasSubmittedPrompt={hasSubmittedPrompt}
        >
            <div ref={containerRef} className="flex-grow overflow-y-auto pb-10">
                {hasSubmittedPrompt ? (
                    <div className="h-full flex flex-col">
                        {/* Message list - scrollable area */}
                        <div className="flex-grow overflow-y-auto pb-24">
                            <MessageList 
                                messages={messages as ExtendedMessage[]}
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
                            
                            {/* Show navigation options if path creation is complete */}
                            {isPathCreationComplete && pathId && (
                                <div className="px-4 py-2">
                                    <NavigationOptions 
                                        pathId={pathId}
                                        pathTitle={pathTitle}
                                        lessonId={lastCreatedLesson?.id}
                                        lessonTitle={lastCreatedLesson ? `${lastCreatedLesson.topic}: ${lastCreatedLesson.subtopic}` : undefined}
                                    />
                                </div>
                            )}
                        </div>
                        
                        {/* Input box - fixed at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm">
                            <UnifiedInputBox
                                error={error}
                                isActive={isActive}
                                setIsActive={setIsActive}
                                onSubmit={handleUserInputWithTracking}
                                disabled={autoCreationInProgress || processingTopics.length > 0}
                                betaLabel={true}
                            />
                        </div>
                    </div>
                ) : (
                    /* Input box - centered before first prompt */
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full max-w-xl">
                            <UnifiedInputBox
                                error={error}
                                isActive={isActive}
                                setIsActive={setIsActive}
                                onSubmit={handleUserInputWithTracking}
                                disabled={autoCreationInProgress || processingTopics.length > 0}
                                betaLabel={true}
                            />
                        </div>
                    </div>
                )}
            </div>
        </ModalContainer>
    )
}
