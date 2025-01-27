import { UPDATE_USER } from "@/lib/gqls/userGQLs";
import { MutationUpdateUsersArgs } from "../../ogm-types";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { SummaryLesson } from "./lesson-context";
import { isToday, isYesterday } from "@/lib/utils";


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
                        }],
                    }],
                    hasStreak: [
                        summary.userStreak ?
                            {
                                where: {
                                    node: {
                                        id: summary.userStreak.id
                                    }
                                },
                                update: {
                                    node: isYesterday(summary.userStreak.lastActivityDate) ?
                                        {
                                            streakCount_INCREMENT: 1,
                                            lastActivityDate: new Date().toISOString()
                                        } :
                                        isToday(summary.userStreak.lastActivityDate) ?
                                            {
                                                lastActivityDate: new Date().toISOString()
                                            } :
                                            {
                                                streakCount: 1,
                                                lastActivityDate: new Date().toISOString()
                                            }
                                }
                            }
                            :
                            {
                                create: [{
                                    node: {
                                        streakCount: 1,
                                        lastActivityDate: new Date().toISOString()
                                    }
                                }]
                            }

                    ]

                },
            } satisfies MutationUpdateUsersArgs,
        });
    }

    return completeLesson;
}