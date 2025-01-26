import { UPDATE_USER } from "@/lib/gqls/userGQLs";
import { MutationUpdateUsersArgs } from "../../ogm-types";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { SummaryLesson } from "./lesson-context";

export const useCompleteLesson = () => {
    const { user } = useUser();
    const [updateUser] = useMutation(UPDATE_USER);

    const completeLesson = async (summary: SummaryLesson) => {
        await updateUser({
            variables: {
                where: { clerkId: user?.id },
                update: {
                    completedLessons: [{
                        create: [{
                            node: {
                                completedAt: new Date().toISOString(),
                                score: summary.score,
                                timeTaken: summary.totalTimeTaken,
                                mode: summary.mode,
                                forLesson: {
                                    connect: { where: { node: { id: summary.id } } }
                                },
                                attemptedActivities: {
                                    connect: summary.attempts.map(([, attempt]) => ({
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
    }

    return completeLesson;
}