import { Button } from "@/components/ui/button"
import { DetailedPlanItem } from "../types"
import { memo } from "react"

interface PlanOptionsProps {
    autoCreationInProgress: boolean
    planModificationState: 'none' | 'selecting' | 'describing'
    onStartAutoCreation: () => void
    onStartPlanModification: () => void
    createdLessons: {id: string, topic: string, subtopic: string}[]
    detailedPlanItems: DetailedPlanItem[]
}

const PlanOptionsComponent = ({
    autoCreationInProgress,
    planModificationState,
    onStartAutoCreation,
    onStartPlanModification,
    createdLessons,
    detailedPlanItems
}: PlanOptionsProps) => {
    return (
        <div className="flex w-full gap-3 items-end justify-end">
            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full">
                <Button
                    variant="default"
                    className="flex-1 py-2"
                    onClick={onStartAutoCreation}
                    disabled={autoCreationInProgress || planModificationState !== 'none'}
                >
                    <div className="flex flex-col items-center p-2 w-full">
                        <span className="text-md font-medium break-words">It looks nice!</span>
                        <span className="text-xs text-muted-foreground break-words">Start creating my learning path</span>
                    </div>
                </Button>
                <Button
                    variant="outline"
                    className="flex-1 py-2"
                    onClick={onStartPlanModification}
                    disabled={autoCreationInProgress || planModificationState !== 'none'}
                >
                    <div className="flex flex-col items-center p-2 w-full">
                        <span className="text-md font-medium break-words">I want to change something</span>
                        <span className="text-xs text-muted-foreground break-words">Modify topics or subtopics</span>
                    </div>
                </Button>
            </div>
            {autoCreationInProgress && (
                <div className="mt-4 w-full">
                    <div className="text-sm text-center mb-2">
                        Creating lessons: {createdLessons.length} of {detailedPlanItems.length} complete
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                        <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${(createdLessons.length / detailedPlanItems.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export const PlanOptions = memo(PlanOptionsComponent);
PlanOptions.displayName = 'PlanOptions'; 