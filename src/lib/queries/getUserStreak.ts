"use server"

import { getApolloClient } from '../getApolloClient';
import { GET_USER_STATISTICS } from '../gqls/userGQLs';
import { QueryUsersArgs } from '@/ogm-resolver/ogm-types';

export const getUserStatistics = async (
    userId: string,
) => {

    const client = getApolloClient();

    const { data } = await client.query({
        query: GET_USER_STATISTICS,
        variables: {
            where: {
                clerkId: userId,
            },
        } satisfies QueryUsersArgs,
    })

    return {
        streak: data.users[0].streak,
        lessonsCreatedCount: data.users[0].hasLessonsConnection.edges.filter((edge: { properties: { type: string; }; }) => edge.properties.type === "CREATED").length,
        createdLessonsInteractionsCount: data.users[0].createdLessonsInteractionsCount
    };
}