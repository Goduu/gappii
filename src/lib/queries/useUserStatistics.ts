'use client'

import { useQuery } from '@apollo/client';
import { GET_USER_STATISTICS } from '../gqls/userGQLs';
import { QueryUsersArgs, User } from '@/ogm-types';
import { useSession } from 'next-auth/react';

export const useUserStatistics = () => {
    const { data: session } = useSession();
    const email = session?.user?.email;

    const { data, loading, error } = useQuery<{ users: User[] }>(
        GET_USER_STATISTICS,
        {
            variables: {
                where: {
                    email: email,
                },
            } satisfies QueryUsersArgs,
            skip: !email,
        }
    );

    return {
        streak: data?.users[0]?.hasStreak[0],
        lessonsCreatedCount: data?.users[0]?.hasLessonsConnection.edges
            .filter((edge: { properties: { type: string; }; }) => 
                edge.properties.type === "CREATED"
            ).length ?? 0,
        createdLessonsInteractionsCount: data?.users[0]?.createdLessonsInteractionsCount ?? 0,
        loading,
        error
    };
} 