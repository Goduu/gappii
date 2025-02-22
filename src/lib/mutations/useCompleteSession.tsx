import { UPDATE_USER } from "@/lib/gqls/userGQLs";
import { MutationUpdateUsersArgs } from "../../ogm-types";
import { useMutation } from "@apollo/client";
import { useUser } from "@/lib/useUser";
import { isToday, isYesterday } from "@/lib/utils";
import { SessionSummaryData } from "@/components/session/types";
import { useUpdateAttemptedActivityCorrectedAt } from "./useUpdateLessonCompletionrecord";

type StreakUpdate = {
    streakCount?: number;
    streakCount_INCREMENT?: number;
    lastActivityDate: string;
};

export const useCompleteSession = () => {
    const user = useUser();
    const [updateUser] = useMutation(UPDATE_USER);
    const updateAttemptedActivityCorrectedAt = useUpdateAttemptedActivityCorrectedAt();

    const getStreakUpdate = (lastActivityDate: string, score: number): StreakUpdate => {
        const currentDate = new Date().toISOString();

        if (isYesterday(lastActivityDate)) {
            return {
                streakCount_INCREMENT: score > 0 ? 1 : 0,
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

    const createCompletedSessionNode = (summary: SessionSummaryData) => ({
        node: {
            completedAt: new Date().toISOString(),
            score: summary.score,
            timeTaken: summary.totalTimeTaken,
            mode: summary.mode,
            type: summary.type,
            forLesson: summary.type === 'lesson' ? {
                connect: { where: { node: { id: summary.id } } }
            } : undefined,
            forPath: summary.type === 'path' ? {
                connect: { where: { node: { id: summary.id } } }
            } : undefined,
            attemptedActivities: {
                connect: summary.attempts.map(([, attempt]) => ({
                    where: { node: { id: attempt.activityId } },
                    edge: {
                        attemptedAt: new Date().toISOString(),
                        isCorrect: attempt.isCorrect,
                        timeTaken: attempt.timeTaken,
                    }
                }))
            }
        }
    });

    const getStreakOperation = (summary: SessionSummaryData) => {
        if (summary.userStreak) {
            return {
                where: { node: { id: summary.userStreak.id } },
                update: {
                    node: getStreakUpdate(summary.userStreak.lastActivityDate, summary.score)
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

    const completeLesson = async (summary: SessionSummaryData) => {
        if (summary.type === 'mistake-correction') {
            const lessonCompletionRecordIds = summary.attempts
                .filter(([, attempt]) => attempt.lessonCompletionRecordId && attempt.isCorrect)
                .map(([, attempt]) => attempt.lessonCompletionRecordId)
                .filter((id): id is string => id !== undefined);

            const activityIds = summary.attempts
                .filter(([, attempt]) => attempt.attemptId && attempt.isCorrect)
                .map(([, attempt]) => attempt.attemptId)
                .filter((id): id is string => id !== undefined);

            await updateAttemptedActivityCorrectedAt(lessonCompletionRecordIds, activityIds);
        }

        await updateUser({
            variables: {
                where: { email: user?.email },
                update: {
                    completedSessions: [{
                        create: [createCompletedSessionNode(summary)]
                    }],
                    hasStreak: [getStreakOperation(summary)]
                },
            } satisfies MutationUpdateUsersArgs,
        });
    }

    return completeLesson;
};