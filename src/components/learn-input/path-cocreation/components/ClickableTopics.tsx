import { Button } from "@/components/ui/button"
import { Whisper } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import { DetailedPlanItem, ExtendedMessage } from "../types"
import { memo } from "react"
import { PlanOptions } from "./PlanOptions"

interface ClickableTopicsProps {
    message: ExtendedMessage
    planModificationState: 'none' | 'selecting' | 'describing'
    processingTopics: string[]
    failedTopics: string[]
    createdLessons: {id: string, topic: string, subtopic: string}[]
    autoCreationInProgress: boolean
    onTopicClick: (topic: string, subtopic: string) => void
    onTopicOnlyClick: (topic: string) => void
    onStartAutoCreation: () => void
    onStartPlanModification: () => void
    detailedPlanItems: DetailedPlanItem[]
}

const ClickableTopicsComponent = ({
    message,
    planModificationState,
    processingTopics,
    failedTopics,
    createdLessons,
    autoCreationInProgress,
    onTopicClick,
    onTopicOnlyClick,
    onStartAutoCreation,
    onStartPlanModification,
    detailedPlanItems
}: ClickableTopicsProps) => {
    if (!message.detailedPlan) return null

    // Group by topic
    const topicGroups: Record<string, DetailedPlanItem[]> = {}
    message.detailedPlan.forEach(item => {
        if (!topicGroups[item.topic]) {
            topicGroups[item.topic] = []
        }
        topicGroups[item.topic].push(item)
    })

    const isSelectingPlanModification = planModificationState === 'selecting'

    return (
        <div className="mt-4 space-y-4">
            {Object.entries(topicGroups).map(([topic, items], topicIndex) => (
                <div key={topicIndex} className="space-y-2">
                    {isSelectingPlanModification ? (
                        <Button
                            variant="secondary"
                            className="w-fit justify-start font-semibold break-words"
                            onClick={() => onTopicOnlyClick(topic)}
                        >
                            <span className="break-words">{topic}</span>
                        </Button>
                    ) : (
                        <h3 className="font-semibold break-words">{topic}</h3>
                    )}
                    <div className="flex flex-col gap-2">
                        {items.map((item, itemIndex) => {
                            const topicKey = `${topic}-${item.subtopic}`;
                            const isProcessing = processingTopics.includes(topicKey);
                            const hasFailed = failedTopics.includes(topicKey);
                            const isCreated = createdLessons.some(lesson => 
                                lesson.topic === topic && lesson.subtopic === item.subtopic
                            );

                            return (
                                <div key={itemIndex} className="flex items-center gap-2">
                                    <Button
                                        variant={hasFailed ? "destructive" : isCreated ? "default" : "outline"}
                                        className="flex flex-wrap justify-start h-auto py-2 px-3 w-fit max-w-full"
                                        disabled={isProcessing || (planModificationState === 'none' && autoCreationInProgress) || isCreated}
                                        onClick={() => onTopicClick(topic, item.subtopic)}
                                    >
                                        <div className="flex items-start gap-2 w-full">
                                            <span className="break-words flex-1">{item.subtopic} </span>
                                            {isProcessing && (
                                                <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full flex-shrink-0" />
                                            )}
                                            {hasFailed && !isProcessing && (
                                                <span className="text-xs whitespace-nowrap flex-shrink-0">Click to retry</span>
                                            )}
                                            {isCreated && !isProcessing && (
                                                <span className="text-xs whitespace-nowrap flex-shrink-0">✓ Created</span>
                                            )}
                                        </div>
                                    </Button>
                                    <Whisper text={item.learning_points.join(", ")} asChild>
                                        <Info className="text-muted-foreground size-6" />
                                    </Whisper>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
            {message.showPlanOptions && planModificationState === 'none' && (
                <PlanOptions
                    autoCreationInProgress={autoCreationInProgress}
                    planModificationState={planModificationState}
                    onStartAutoCreation={onStartAutoCreation}
                    onStartPlanModification={onStartPlanModification}
                    createdLessons={createdLessons}
                    detailedPlanItems={detailedPlanItems}
                />
            )}
        </div>
    )
}

export const ClickableTopics = memo(ClickableTopicsComponent);
ClickableTopics.displayName = 'ClickableTopics'; 