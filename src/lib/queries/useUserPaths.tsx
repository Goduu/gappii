"use client"
import { Path, User, UserHasPathsConnectionWhere } from "@/ogm-types"
import { useQuery } from "@apollo/client"
import { GET_USER_PATHS_AND_LESSONS } from "../gqls/userGQLs"
import { useEffect, useState } from "react"
import { useUser } from "../useUser"
import { useDebouncedCallback } from "use-debounce"
import { useInfiniteScroll } from "@/components/my-content-page/my-lessons/useInfinityScroll"

type QueryResponse = {
    users: User[];
};

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

    const { data: userData, loading, refetch, fetchMore } = useQuery<QueryResponse>(GET_USER_PATHS_AND_LESSONS, {
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
        skip: !user?.email,
        // notifyOnNetworkStatusChange: true // Important: This ensures loading state updates on fetchMore
    });

    const userPathsConnection = userData?.users[0]?.hasPathsConnection;
    const hasNextPage = userPathsConnection?.pageInfo.hasNextPage;
    const endCursor = userPathsConnection?.pageInfo.endCursor;

    const updateQueryWithNewPaths = (prev: QueryResponse, fetchMoreResult: QueryResponse | undefined) => {
        if (!fetchMoreResult || !fetchMoreResult.users || fetchMoreResult.users.length === 0) return prev;
        if (!prev || !prev.users || prev.users.length === 0) return fetchMoreResult;

        const prevUserData = prev.users[0];
        const newUserData = fetchMoreResult.users[0];

        // Ensure we are updating the same user
        if (prevUserData.id !== newUserData.id) {
            console.error("User mismatch in fetchMore pagination!");
            return prev;
        }

        // Safely get previous IDs, defaulting to empty array if edges is undefined
        const prevEdges = prevUserData.hasPathsConnection.edges || [];
        const prevIds = prevEdges.map(e => e.node.id);

        const newEdges = newUserData.hasPathsConnection.edges || [];
        const newPaths = newEdges.filter(e => !prevIds.includes(e.node.id));
        const updatedHasNextPage = newUserData.hasPathsConnection.pageInfo.hasNextPage;

        // If no new paths were found and hasNextPage is true, it might be a pagination issue
        if (newPaths.length === 0 && updatedHasNextPage === true) {
            console.warn("No new paths found but hasNextPage is true. This might indicate a pagination issue.");
        }

        return {
            users: [{
                ...prevUserData,
                hasPathsConnection: {
                    ...newUserData.hasPathsConnection,
                    edges: [...prevEdges, ...newPaths],
                    // Important: Use the pageInfo from the new result
                    pageInfo: {
                        ...prevUserData.hasPathsConnection?.pageInfo,
                        ...newUserData.hasPathsConnection?.pageInfo
                    }
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
                    after: userPathsConnection?.pageInfo.endCursor
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
    }, [search, reaction]);

    // Extract paths from the connection-based data structure
    const paths: Path[] = userPathsConnection?.edges?.map(
        (edge: { node: Path }) => edge.node
    ) || [];

    return {
        userPaths: paths,
        userLessons: userData?.users[0]?.hasLessons,
        loading: loading || isFetchingMore,
        setInfiniteScrollRef: setElement,
        refetch
    };
}