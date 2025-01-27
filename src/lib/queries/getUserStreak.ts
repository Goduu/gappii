"use server"

import { getApolloClient } from '../getApolloClient';
import { GET_USER_STATISTICS } from '../gqls/userGQLs';
import { QueryUsersArgs, User } from '@/ogm-types';

export const getUserStatistics = async (
    userId: string,
) => {

    try {

        const client = getApolloClient();

        const { data } = await client.query<{ users: User[] }>({
            query: GET_USER_STATISTICS,
            variables: {
                where: {
                    clerkId: userId,
                },
            } satisfies QueryUsersArgs,
        })


        return {
            streak: data.users[0].hasStreak[0],
            lessonsCreatedCount: data.users[0].hasLessonsConnection.edges
                .filter((edge: { properties: { type: string; }; }) => edge.properties.type === "CREATED").length,
            createdLessonsInteractionsCount: data.users[0].createdLessonsInteractionsCount
        };
    } catch (error) {
        console.dir("xongas paha");
        console.dir(error, { depth: null });
        return {
            streak: undefined,
            lessonsCreatedCount: 0,
            createdLessonsInteractionsCount: 0
        };
    }
}