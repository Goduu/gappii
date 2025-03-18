import { InitialLearningGoal } from "@/app/api/agents/initialLearningGoal/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Target } from "lucide-react"

type LearningGoalsCardProps = {
    learningGoal: InitialLearningGoal
}

export const LearningGoalsCard = ({ learningGoal }: LearningGoalsCardProps) => {
    return (
        <Card className="w-96 hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    {learningGoal.subject}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">{learningGoal.description}</p>
                <div className="flex flex-col gap-2">
                    {learningGoal.goals.map((goal, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle2 className="size-3 text-green-500" />
                            <div className="flex-1">{goal}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}