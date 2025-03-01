"use client"
import { Path, User, UserHasPathsConnectionWhere } from "@/ogm-types"
import { useQuery } from "@apollo/client"
import { GET_USER_PATHS_AND_LESSONS } from "../gqls/userGQLs"
import { useEffect, useState } from "react"
import { useUser } from "../useUser"
import { useDebouncedCallback } from "use-debounce"
import { useInfiniteScroll } from "@/components/my-content-page/my-lessons/useInfinityScroll"


export const useUserPathsAndLessons = (searchParams?: { pathSearch?: string, pathReaction?: string }) => {
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const user = useUser();
    const reaction = searchParams?.pathReaction || '';
    const search = searchParams?.pathSearch || '';

    const getReactionFilter = (reaction: string) => {
        if (!reaction) return {};

        return {
            wasReactedConnection_SOME: {
                node: { email: user?.email },
                edge: { type: reaction }
            }
        };
    };

    const { data: userData, loading, refetch, fetchMore } = useQuery<{ users: User[] }>(GET_USER_PATHS_AND_LESSONS, {
        variables: {
            where: { email: user?.email },
            pathWhere: {
                node: {
                    title_CONTAINS: search,
                    ...getReactionFilter(reaction)
                }
            } satisfies UserHasPathsConnectionWhere,
            first: 12,
            email: user?.email || ''
        },
        skip: !user?.email
    });

    const userPathsConnection = userData?.users[0]?.hasPathsConnection;
    const hasNextPage = userPathsConnection?.pageInfo.hasNextPage;
    const endCursor = userPathsConnection?.pageInfo.endCursor;

    const updateQueryWithNewPaths = (prev: { users: User[] }, fetchMoreResult: { users: User[] } | undefined) => {
        if (!fetchMoreResult) return prev;

        const prevUserData = prev.users[0];
        const newUserData = fetchMoreResult.users[0];
        const prevIds = prevUserData.hasPathsConnection?.edges.map(e => e.node.id);

        const newPaths = prev
            ? newUserData?.hasPathsConnection?.edges.filter(e => !prevIds.includes(e.node.id))
            : newUserData?.hasPathsConnection?.edges;

        return {
            users: [{
                ...prevUserData,
                hasPathsConnection: {
                    ...newUserData.hasPathsConnection,
                    edges: [...prevUserData.hasPathsConnection?.edges, ...newPaths],
                },
            }],
        };
    };

    const handleFetchMore = useDebouncedCallback(async () => {
        if (!hasNextPage || loading || isFetchingMore) return;

        setIsFetchingMore(true);
        try {
            await fetchMore({
                variables: {
                    after: endCursor,
                    email: user?.email || ''
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return updateQueryWithNewPaths(prev, fetchMoreResult);
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

    useEffect(() => {
        if (user?.email) {
            refetch();
        }
    }, [user?.email, search, reaction]);

    // Extract paths from the connection-based data structure
    const paths: Path[] = userPathsConnection?.edges.map(
        (edge: { node: Path }) => edge.node
    ) || [];

    return {
        userPaths: paths,
        userLessons: userData?.users[0]?.hasLessons,
        loading: loading || isFetchingMore,
        setInfiniteScrollRef: setElement
    };
}