import { UPDATE_USER } from "@/lib/gqls/userGQLs";
import { MutationUpdateUsersArgs } from "../../ogm-types";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { SummaryLesson } from "./lesson-context";
import { isToday, isYesterday } from "@/lib/utils";

type StreakUpdate = {
    streakCount?: number;
    streakCount_INCREMENT?: number;
    lastActivityDate: string;
};

export const useCompleteLesson = () => {
    const { user } = useUser();
    const [updateUser] = useMutation(UPDATE_USER);

    const getStreakUpdate = (lastActivityDate: string): StreakUpdate => {
        const currentDate = new Date().toISOString();

        if (isYesterday(lastActivityDate)) {
            return {
                streakCount_INCREMENT: 1,
                lastActivityDate: currentDate
            };
        }

        if (isToday(lastActivityDate)) {
            return {
                lastActivityDate: currentDate
            };
        }

        return {
            streakCount: 1,
            lastActivityDate: currentDate
        };
    };

    const createCompletedLessonNode = (summary: SummaryLesson) => ({
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
    });

    const getStreakOperation = (summary: SummaryLesson) => {
        if (summary.userStreak) {
            return {
                where: { node: { id: summary.userStreak.id } },
                update: {
                    node: getStreakUpdate(summary.userStreak.lastActivityDate)
                }
            };
        }

        return {
            create: [{
                node: {
                    streakCount: 1,
                    lastActivityDate: new Date().toISOString()
                }
            }]
        };
    };

    const completeLesson = async (summary: SummaryLesson) => {
        await updateUser({
            variables: {
                where: { clerkId: user?.id },
                update: {
                    completedLessons: [{
                        create: [createCompletedLessonNode(summary)]
                    }],
                    hasStreak: [getStreakOperation(summary)]
                },
            } satisfies MutationUpdateUsersArgs,
        });
    };

    return completeLesson;
};