"use server"

import { LessonPossession } from '@/components/my-content-page/types';
import { getApolloClient } from '../getApolloClient';
import { UPDATE_USER } from '../gqls/userGQLs';
import { MutationUpdateUsersArgs } from '@/ogm-types';

export const userHasLesson = async (
    userEmail: string,
    lessonId: string,
    lessonPossession: LessonPossession,
) => {

    const client = getApolloClient();

    await client.mutate({
        mutation: UPDATE_USER,
        variables: {
            where: {
                email: userEmail
            },
            update: {
                hasLessons: [{
                    connect: [{
                        where: {
                            node: { id: lessonId }
                        },
                        edge: {
                            type: lessonPossession as string,
                            hasAt: new Date().toISOString()
                        }
                    }]
                }]
            },
        } satisfies MutationUpdateUsersArgs,
    })
}