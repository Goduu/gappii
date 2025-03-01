import { GET_USER_LESSONS, GET_USER_MISTAKES } from '@/lib/gqls/userGQLs';
import { Lesson, User, UserHasLessonsConnectionWhere } from '@/ogm-types';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useInfiniteScroll } from '../useInfinityScroll';
import { useUser } from '@/lib/useUser';

type SearchParams = {
    lessonSearch?: string;
    lessonReaction?: string;
};

type QueryResponse = {
    users: User[];
};

export const useGetUserLessons = (searchParams?: SearchParams) => {
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const user = useUser();
    const reaction = searchParams?.lessonReaction || '';
    const search = searchParams?.lessonSearch || '';
    const { data: mistakes } = useQuery(GET_USER_MISTAKES, { variables: { where: { email: user?.email } } })
    console.info("mistakes", mistakes)

    const getReactionFilter = (reaction: string) => {
        if (!reaction) return {};
        
        return {
            wasReactedConnection_SOME: {
                node: { email: user?.email },
                edge: { type: reaction }
            }
        };
    };

    const { data, loading, fetchMore } = useQuery<QueryResponse>(GET_USER_LESSONS, {
        variables: {
            where: { email: user?.email },
            lessonWhere: {
                node: {
                    title_CONTAINS: search,
                    ...getReactionFilter(reaction)
                }
            } satisfies UserHasLessonsConnectionWhere,
            first: 12
        },
    });

    const userLessonsConnection = data?.users[0]?.hasLessonsConnection;
    const hasNextPage = userLessonsConnection?.pageInfo.hasNextPage;
    const endCursor = userLessonsConnection?.pageInfo.endCursor;

    const updateQueryWithNewLessons = (prev: QueryResponse, fetchMoreResult: QueryResponse | undefined) => {
        if (!fetchMoreResult) return prev;

        const prevUserData = prev.users[0];
        const newUserData = fetchMoreResult.users[0];
        const prevIds = prevUserData.hasLessonsConnection?.edges.map(e => e.node.id);

        const newLessons = prev
            ? newUserData?.hasLessonsConnection?.edges.filter(e => !prevIds.includes(e.node.id))
            : newUserData?.hasLessonsConnection?.edges;

        return {
            users: [{
                ...prevUserData,
                hasLessonsConnection: {
                    ...newUserData.hasLessonsConnection,
                    edges: [...prevUserData.hasLessonsConnection?.edges, ...newLessons],
                },
            }],
        };
    };

    const handleFetchMore = useDebouncedCallback(async () => {
        if (!hasNextPage || loading || isFetchingMore) return;

        setIsFetchingMore(true);
        try {
            await fetchMore({
                variables: { after: endCursor },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return updateQueryWithNewLessons(prev, fetchMoreResult);
                },
            });
        } finally {
            setIsFetchingMore(false);
        }
    }, 200);

    const { setElement } = useInfiniteScroll({
        loading: loading || isFetchingMore,
        hasNextPage,
        onLoadMore: handleFetchMore,
    });

    const lessons: Lesson[] = userLessonsConnection?.edges.map(
        (edge: { node: Lesson }) => edge.node
    ) || [];

    return {
        lessons,
        loading: loading || isFetchingMore,
        setInfiniteScrollRef: setElement
    };
};