
import { LessonReaction } from '@/components/my-content-page/types';
import { GET_USER_LESSONS, UPDATE_USER } from '../gqls/userGQLs';
import { MutationUpdateUsersArgs, UserHasLessonsConnectionWhere, UserWhere } from '@/ogm-types';
import { useMutation } from '@apollo/client';

export const useReactToLesson = (
    userEmail: string,
    lessonId: string,
) => {
    const [reactToLesson] = useMutation(
        UPDATE_USER,
        {
            refetchQueries: [GET_USER_LESSONS]
        }
    )

    return (
        currentReaction: LessonReaction | null,
        newReaction: LessonReaction,
    ) => reactToLesson({
        variables: {
            where: {
                email: userEmail
            },
            update: {
                reactedToLessons: [{
                    [currentReaction === newReaction ? 'disconnect' : 'connect']: [{
                        where: {
                            node: { id: lessonId }
                        },
                        ...(currentReaction !== newReaction && {
                            edge: {
                                type: newReaction as string,
                                reactedAt: new Date().toISOString()
                            }
                        })
                    }]
                }]
            },
        } satisfies MutationUpdateUsersArgs,
        refetchQueries: [{
            query: GET_USER_LESSONS,
            variables: {
                where: {
                    email: userEmail
                } satisfies UserWhere,
                lessonWhere: {
                    node: {
                        id: lessonId
                    }
                } satisfies UserHasLessonsConnectionWhere,
                first: 1
            }
        }]
    })
}