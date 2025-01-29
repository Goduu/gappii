import { formatTime } from "@/lib/utils";
import { routes } from "@/lib/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useEffect, useTransition, useRef } from "react";
import { MistakeLessonSummaryData } from "./mistakes-lesson-context";

interface LessonSummaryProps {
    summary: MistakeLessonSummaryData;
    isOnboarding?: boolean;
}

export const MistakeLessonSummary: React.FC<LessonSummaryProps> = ({ summary, isOnboarding = false }) => {
    const router = useRouter();
    const { user } = useUser();
    const [isPending, startTransition] = useTransition();
    const hasCompletedRef = useRef(false);
    const searchParams = useSearchParams();
    const mode = searchParams.get("mode");

    // @TODO complete this component
    const completeLesson = () => { }
    // const yesterday = new Date();
    // yesterday.setDate(yesterday.getDate() - 1);

    useEffect(() => {
        if (isPending || hasCompletedRef.current || !user) return;

        startTransition(async () => {
            try {
                hasCompletedRef.current = true;
                // await completeLesson(summary);

            } catch (error) {
                // Reset the flag if there's an error so it can try again
                hasCompletedRef.current = false;
                console.error('Error completing lesson:', error);
            }
        });
    }, [completeLesson, isOnboarding, isPending, summary, user]);

    const handleFinish = () => {
        if (mode === "hard") {
            router.push(routes.dashboard(mode));
        } else {
            router.push(routes.dashboard());
        }
    }

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
                            <p className="text-sm font-medium text-muted-foreground">Mistakes Corrected</p>
                            <p className="text-2xl font-bold">{summary.mistakesCorrected}%</p>
                        </Card>
                        <Card className="p-4">
                            <p className="text-sm font-medium text-muted-foreground">Time</p>
                            <p className="text-2xl font-bold">{formatTime(summary.totalTimeTaken)}</p>
                        </Card>
                    </div>

                </CardContent>

                <CardFooter>
                    {user === null ? (
                        <SignInButton mode="modal">
                            <Button className="w-full" size="lg">
                                Create your account
                            </Button>
                        </SignInButton>
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
                                    'Return to Dashboard'}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}; 