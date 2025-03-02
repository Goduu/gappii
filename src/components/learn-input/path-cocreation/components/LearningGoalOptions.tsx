import { Button } from "@/components/ui/button"
import { ExtendedMessage } from "../types"
import { memo } from "react"

interface LearningGoalOptionsProps {
    message: ExtendedMessage
    onThemeSelect: (theme: string) => void
}

const LearningGoalOptionsComponent = ({ message, onThemeSelect }: LearningGoalOptionsProps) => {
    if (!message.learningGoals) return null

    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {message.learningGoals.map((goal, index) => (
                <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start text-left hover:bg-accent/50 transition-colors break-words whitespace-normal"
                    onClick={() => onThemeSelect(goal.theme)}
                >
                    <h3 className="text-md font-semibold mb-1">{goal.theme}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{goal.description}</p>
                    <div className="w-full">
                        <h4 className="text-xs font-medium text-muted-foreground mb-1">Learning goals:</h4>
                        <ul className="text-xs list-disc pl-4 space-y-1">
                            {goal.learning_goals.map((lg, lgIndex) => (
                                <li key={lgIndex}>{lg}</li>
                            ))}
                        </ul>
                    </div>
                </Button>
            ))}
        </div>
    )
}

export const LearningGoalOptions = memo(LearningGoalOptionsComponent);
LearningGoalOptions.displayName = 'LearningGoalOptions'; 