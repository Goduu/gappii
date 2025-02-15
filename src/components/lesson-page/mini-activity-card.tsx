import { ActivityAttempt } from "./lesson-context";
import { CheckCircle2, XCircle } from "lucide-react";

interface MiniActivityCardProps {
    attempt: ActivityAttempt;
    activityContent: string;
    wrongAnswer: string;
    correctAnswer: string;
}

export const MiniActivityCard: React.FC<MiniActivityCardProps> = ({
    attempt,
    activityContent,
    wrongAnswer,
    correctAnswer
}) => {

    return (
        <div className="space-y-2">
            <div className="text-sm font-medium break-words">
                {activityContent.replace(/({gap})/g, '___')}
            </div>

            <div className="flex flex-col gap-1.5">
                <div className={`text-sm p-1.5 rounded-md ${attempt.isCorrect ? 'bg-green-50/50' : 'bg-red-50/50'} flex items-start gap-2`}>
                    {attempt.isCorrect ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                        <XCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                    )}
                    <div className="flex-1">
                        <span className="text-xs text-muted-foreground block mb-0.5">Your answer</span>
                        <span className={`${attempt.isCorrect ? 'text-green-700' : 'text-red-700'} text-sm break-words`}>
                            {attempt.isCorrect ? correctAnswer : wrongAnswer}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}; 