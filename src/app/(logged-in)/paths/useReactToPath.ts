
import { MutationUpdateUsersArgs } from '@/ogm-types';
import { useMutation } from '@apollo/client';
import { GET_USER_PATHS_AND_LESSONS, UPDATE_USER } from '@/lib/gqls/userGQLs';
import { PathReaction } from './types';

export const useReactToPath = (
    userEmail: string,
    pathId: string,
) => {
    const [reactToPathMutation] = useMutation(
        UPDATE_USER,
        {
            refetchQueries: [GET_USER_PATHS_AND_LESSONS]
        }
    )

    const reactToPath = (
        currentReaction: PathReaction | null,
        newReaction: PathReaction,
    ) => reactToPathMutation({
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
    })

    return reactToPath
}