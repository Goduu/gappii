import { formatTime } from "@/lib/utils";
import { SummaryLesson } from "./lesson-context";
import { routes } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { UPDATE_USER } from "@/lib/gqls/userGQLs";
import { useMutation } from "@apollo/client";
import { SignInButton, useUser } from "@clerk/nextjs";
import { MutationUpdateUsersArgs } from "@/ogm-resolver/ogm-types";
import { useTransitionContext } from "../loading-store";

interface LessonSummaryProps {
    activity: SummaryLesson;
}

export const LessonSummary: React.FC<LessonSummaryProps> = ({ activity }) => {
    const router = useRouter();
    const { user } = useUser();
    const { startTransition } = useTransitionContext()

    const [updateUser] = useMutation(UPDATE_USER);
    // const yesterday = new Date();
    // yesterday.setDate(yesterday.getDate() - 1);

    const handleUpdateUser = async () => {
        startTransition(async () => {
            await updateUser({
                variables: {
                    where: { clerkId: user?.id },
                    update: {
                        completedLessons: [{
                            create: [{
                                node: {
                                    completedAt: new Date().toISOString(),
                                    score: activity.score,
                                    timeTaken: activity.totalTimeTaken,
                                    forLesson: {
                                        connect: { where: { node: { id: activity.id } } }
                                    },
                                    attemptedActivities: {
                                        connect: activity.attempts.map(([, attempt]) => ({
                                            where: { node: { id: attempt.activityId } },
                                            edge: {
                                                attemptedAt: new Date().toISOString(),
                                                isCorrect: attempt.isCorrect,
                                                timeTaken: attempt.timeTaken
                                            }
                                        }))
                                    }
                                }
                            }]
                        }]
                    },
                } satisfies MutationUpdateUsersArgs,
            });
            router.push(routes.dashboard)
        })
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
        >
            <Card className="border-2">
                <CardHeader className="text-center space-y-2">
                    <h2 className="text-2xl font-bold">Lesson Complete! 🎉</h2>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4">
                            <p className="text-sm font-medium text-muted-foreground">Score</p>
                            <p className="text-2xl font-bold">{activity.score}%</p>
                        </Card>
                        <Card className="p-4">
                            <p className="text-sm font-medium text-muted-foreground">Time</p>
                            <p className="text-2xl font-bold">{formatTime(activity.totalTimeTaken)}</p>
                        </Card>
                    </div>

                    <Card className="p-4">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-4 gap-4">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Question Breakdown
                                </p>
                                <p className="text-sm font-medium">
                                    {activity.correctAnswers} of {activity.totalQuestions} correct
                                </p>
                            </div>

                            <div className="space-y-4">
                                {activity.attempts.map(([index, data]) => (
                                    <div
                                        key={index}
                                        className={`
                                            relative p-1 rounded-lg border
                                            ${data.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}
                                        `}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {data.isCorrect ? (
                                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                ) : (
                                                    <XCircle className="w-5 h-5 text-red-500" />
                                                )}
                                                <span className="font-medium">
                                                    Question {index + 1}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-sm text-muted-foreground">
                                                    {formatTime(data.timeTaken)}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={`
                                                absolute bottom-0 left-0 h-1 rounded-b-lg
                                                ${data.isCorrect ? 'bg-green-500' : 'bg-red-500'}
                                            `}
                                            style={{
                                                width: `${(data.timeTaken / activity.totalTimeTaken) * 100}%`
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </CardContent>

                <CardFooter>
                    {user === null ?
                        <SignInButton mode="modal">
                            <Button className="w-full" size="lg">
                                Create your account
                            </Button>
                        </SignInButton>
                        :
                        <Button
                            className="w-full"
                            size="lg"
                            onClick={handleUpdateUser}
                        >
                            Return to Dashboard
                        </Button>
                    }
                </CardFooter>
            </Card>
        </motion.div>
    );
}; 