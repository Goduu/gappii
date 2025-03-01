
import { MutationUpdateUsersArgs, UserHasLessonsConnectionWhere, UserWhere } from '@/ogm-types';
import { useMutation } from '@apollo/client';
import { GET_USER_PATHS_AND_LESSONS, UPDATE_USER } from '@/lib/gqls/userGQLs';
import { PathReaction } from './types';

export const useReactToPath = (
    userEmail: string,
    pathId: string,
) => {
    const [reactToPath] = useMutation(
        UPDATE_USER,
        {
            refetchQueries: [GET_USER_PATHS_AND_LESSONS]
        }
    )

    return (
        currentReaction: PathReaction | null,
        newReaction: PathReaction,
    ) => reactToPath({
        variables: {
            where: {
                email: userEmail
            },
            update: {
                reactedToPaths: [{
                    [currentReaction === newReaction ? 'disconnect' : 'connect']: [{
                        where: {
                            node: { id: pathId }
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
            query: GET_USER_PATHS_AND_LESSONS,
            variables: {
                where: {
                    email: userEmail
                } satisfies UserWhere,
                lessonWhere: {
                    node: {
                        id: pathId
                    }
                } satisfies UserHasLessonsConnectionWhere,
                first: 1
            }
        }]
    })
}