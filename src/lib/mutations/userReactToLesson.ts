"use server"

import { LessonReaction } from '@/components/my-content-page/my-lessons/lesson-reactions'
import { getApolloClient } from '../getApolloClient';
import { UPDATE_USER } from '../gqls/userGQLs';
import { MutationUpdateUsersArgs } from '@/ogm-resolver/ogm-types';

export const userReactToLesson = async (
    userId: string,
    lessonId: string,
    currentReaction: LessonReaction | null,
    newReaction: LessonReaction,
) => {

    const client = getApolloClient();
    // use optimistic return
    
    await client.mutate({
        mutation: UPDATE_USER,
        variables: {
            where: {
                clerkId: userId
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
    })
}