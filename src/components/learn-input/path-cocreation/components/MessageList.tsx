import { MessageBubble } from "../../message-bubble"
import { LoadingBubble } from "../../loading-bubble"
import { ExtendedMessage } from "../types"
import { memo, RefObject } from "react"
import { LearningGoalOptions } from "./LearningGoalOptions"
import { ClickableTopics } from "./ClickableTopics"
import { DetailedPlanItem } from "../types"

interface MessageListProps {
    messages: ExtendedMessage[]
    messagesEndRef: RefObject<HTMLDivElement>
    planModificationState: 'none' | 'selecting' | 'describing'
    processingTopics: string[]
    failedTopics: string[]
    createdLessons: { id: string, topic: string, subtopic: string }[]
    autoCreationInProgress: boolean
    onThemeSelect: (theme: string) => void
    onTopicClick: (topic: string, subtopic: string) => void
    onTopicOnlyClick: (topic: string) => void
    onStartAutoCreation: () => void
    onStartPlanModification: () => void
    detailedPlanItems: DetailedPlanItem[]
}

const MessageListComponent = ({
    messages,
    messagesEndRef,
    planModificationState,
    processingTopics,
    failedTopics,
    createdLessons,
    autoCreationInProgress,
    onThemeSelect,
    onTopicClick,
    onTopicOnlyClick,
    onStartAutoCreation,
    onStartPlanModification,
    detailedPlanItems
}: MessageListProps) => {
    return (
        <div className="flex flex-col w-full space-y-4 py-4">
            {messages.map((msg, index) => (
                <div key={index} className="space-y-2">
                    {msg.type === 'user' ? (
                        <MessageBubble content={msg.content ?? ""} isUser={true} />
                    ) : msg.type === 'loading' ? (
                        <LoadingBubble />
                    ) : msg.type === 'assistant' ? (
                        <div>
                            <MessageBubble content={msg.content ?? ""} isUser={false} />
                            {msg.learningGoals && (
                                <div className="mt-4">
                                    <LearningGoalOptions
                                        message={msg}
                                        onThemeSelect={onThemeSelect}
                                    />
                                </div>
                            )}
                            {msg.detailedPlan && (
                                <div className="mt-4">
                                    <ClickableTopics
                                        message={msg}
                                        planModificationState={planModificationState}
                                        processingTopics={processingTopics}
                                        failedTopics={failedTopics}
                                        createdLessons={createdLessons}
                                        autoCreationInProgress={autoCreationInProgress}
                                        onTopicClick={onTopicClick}
                                        onTopicOnlyClick={onTopicOnlyClick}
                                        onStartAutoCreation={onStartAutoCreation}
                                        onStartPlanModification={onStartPlanModification}
                                        detailedPlanItems={detailedPlanItems}
                                    />
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export const MessageList = memo(MessageListComponent);
MessageList.displayName = 'MessageList'; 

