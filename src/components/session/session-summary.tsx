import { formatTime } from "@/lib/utils";
import { routes } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { completeOnboarding } from "@/app/onboarding/actions";
import { useEffect, useTransition, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SessionSummaryResultCard } from "./session-summary-result-card";
import { MiniActivityCard } from "./mini-activity-card";
import { useCompleteSession } from "@/lib/mutations/useCompleteSession";
import { SessionSummaryData } from "./types";
import { useUser } from "@/lib/useUser";

interface SessionSummaryProps {
    summary: SessionSummaryData;
    isOnboarding?: boolean;
}

export const SessionSummary: React.FC<SessionSummaryProps> = ({ summary, isOnboarding = false }) => {
    const router = useRouter();
    const user = useUser();
    const [isPending, startTransition] = useTransition();
    const hasCompletedRef = useRef(false);

    const completeLesson = useCompleteSession();

    useEffect(() => {
        if (isPending || hasCompletedRef.current || !user) return;

        startTransition(async () => {
            try {
                hasCompletedRef.current = true;
                await completeLesson(summary);

                if (isOnboarding) {
                    const res = await completeOnboarding();
                    if (res?.message) {
                        await user?.reload();
                    }
                }
            } catch (error) {
                // Reset the flag if there's an error so it can try again
                hasCompletedRef.current = false;
                console.error('Error completing lesson:', error);
            }
        });
    }, [completeLesson, isOnboarding, isPending, summary, user]);

    const handleFinish = () => {
        router.push(routes.dashboard);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
        >
            <Card className="border-2">
                <CardHeader className="text-center space-y-2">
                    <h2 className="text-2xl font-bold">Session Complete! 🎉</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4">
                            <p className="text-sm font-medium text-muted-foreground">Score</p>
                            <p className="text-2xl font-bold">{summary.score}%</p>
                        </Card>
                        <Card className="p-4">
                            <p className="text-sm font-medium text-muted-foreground">Time</p>
                            <p className="text-2xl font-bold">{formatTime(summary.totalTimeTaken)}</p>
                        </Card>
                    </div>

                    <Card className="p-4">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-4 gap-4">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Question Breakdown
                                </p>
                                <p className="text-sm font-medium">
                                    {summary.correctAnswers} of {summary.totalQuestions} correct
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                {summary.attempts.map(([index, data]) => (
                                    <Dialog key={index}>
                                        <DialogTrigger>
                                            <SessionSummaryResultCard activityAttempt={data} index={index} totalTimeTaken={summary.totalTimeTaken} />
                                        </DialogTrigger>
                                        <DialogContent className="w-[95%]">
                                            <DialogTitle >Question {index + 1}</DialogTitle>
                                            <DialogDescription hidden title="Mini-card shown the answer for question {index + 1}" />
                                            <MiniActivityCard
                                                attempt={data}
                                                activityContent={data.activityContent}
                                                wrongAnswer={data.wrongAnswer}
                                                correctAnswer={data.correctAnswer}
                                            />
                                        </DialogContent>
                                    </Dialog>
                                )
                                )}
                            </div>
                        </div>
                    </Card>
                </CardContent>

                <CardFooter>
                    {user === null ? (
                        <Button className="w-full" size="lg">
                            Create your account
                        </Button>
                    ) : (
                        <Button
                            className="w-full"
                            size="lg"
                            onClick={handleFinish}
                            disabled={isPending}
                        >
                            {
                                isPending ?
                                    "Saving your data..." :
                                    isOnboarding ?
                                        'Complete Onboarding' :
                                        'Return to Dashboard'}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}; 