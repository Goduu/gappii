import { useUser } from "@/lib/useUser";
import { useEffect, useState } from "react";
import { useFilter } from "./filter-hooks";
import { Lesson, User, UserHasLessonsConnectionWhere } from "../../../ogm-types";
import { useQuery } from "@apollo/client";
import { GET_USER_LESSONS } from "@/lib/gqls/userGQLs";


const TOPICS_PER_PAGE = 10; // Number of topics to load per scroll

export const useMyLessonsFunctions = () => {
    const userData = useUser()
    const { filter, setFilter, setSubtopicFilter, setTopicFilter, setKeywordFilter } = useFilter()
    const [endCursor, setEndCursor] = useState<string | null>(null);
    const [sortedLessonByTopic, setSortedLessonByTopic] = useState<Record<string, Lesson[]>>({});
    const [hasNextPage, setHasNextPage] = useState(false);
    const [page, setPage] = useState(1);

    // GraphQL query with pagination support
    const { loading, fetchMore, refetch } = useQuery<{ users: Array<User> }>(GET_USER_LESSONS, {
        variables: {
            where: {
                clerkId: userData.user?.id
            },
            lessonWhere: {
                node: {
                    hasTopic: filter.topic?.id ? {
                        id: filter.topic.id
                    } : {},
                    hasSubtopic: filter.subtopic?.id ? {
                        id: filter.subtopic.id
                    } : {},
                    wasReactedConnection_SOME: filter.reaction ? {
                        node: {
                            clerkId: userData.user?.id
                        },
                        edge: filter.reaction ? {
                            type: filter.reaction
                        } : {}
                    } : {}
                }
            } satisfies UserHasLessonsConnectionWhere,
            // Add pagination parameters
            first: TOPICS_PER_PAGE * page, // Load cumulative lessons
        },
        onCompleted: (data) => {
            if (!data?.users[0]) return;

            const groupedLessons = data.users[0].hasLessonsConnection.edges.reduce((acc, lessonConnection) => {
                const lesson = lessonConnection.node;

                // Skip lessons without a topic
                if (!lesson.hasTopic) return acc;

                // Group lessons by topic title
                const topicTitle = lesson.hasTopic.title;
                acc[topicTitle] ??= [];
                acc[topicTitle].push(lesson);

                return acc;
            }, {} as Record<string, Lesson[]>);

            // Sort topics by number of lessons (descending)
            const sortedTopics = Object.entries(groupedLessons)
                .sort(([, a], [, b]) => b.length - a.length)
                .reduce((sortedAcc, [key, value]) => {
                    sortedAcc[key] = value;
                    return sortedAcc;
                }, {} as Record<string, Lesson[]>);

            setSortedLessonByTopic(sortedTopics);

            // Set pagination info
            const lessonConnection = data.users[0].hasLessonsConnection;
            if(lessonConnection.pageInfo.endCursor) setEndCursor(lessonConnection.pageInfo.endCursor);
            setHasNextPage(lessonConnection.pageInfo.hasNextPage);
        },
        skip: !userData.user
    });

    const loadMoreLessons = () => {
        fetchMore({
            variables: {
                after: endCursor
            },
            updateQuery: (prev, { fetchMoreResult }): { users: User[] } => {
                if (!fetchMoreResult?.users[0]) return { users: prev.users };

                const newEdges = fetchMoreResult.users[0].hasLessonsConnection.edges;
                const pageInfo = fetchMoreResult.users[0].hasLessonsConnection.pageInfo;

                // Group new lessons
                const newGroupedLessons = newEdges.reduce((acc, lessonConnection) => {
                    const lesson = lessonConnection.node;

                    if (!lesson.hasTopic) return acc;

                    const topicTitle = lesson.hasTopic.title;
                    acc[topicTitle] ??= [];
                    acc[topicTitle].push(lesson);

                    return acc;
                }, { ...sortedLessonByTopic });

                // Sort topics by number of lessons (descending)
                const updatedSortedTopics = Object.entries(newGroupedLessons)
                    .sort(([, a], [, b]) => b.length - a.length)
                    .reduce((sortedAcc, [key, value]) => {
                        sortedAcc[key] = value;
                        return sortedAcc;
                    }, {} as Record<string, Lesson[]>);

                setSortedLessonByTopic(updatedSortedTopics);

                // Update pagination info
                if(pageInfo.endCursor) setEndCursor(pageInfo.endCursor);
                setHasNextPage(pageInfo.hasNextPage);

                return { users: [...prev.users] };
            }
        });
    };




    // Effect to refetch when filters change
    useEffect(() => {
        refetch();
        setPage(1); // Reset pagination when filters change
    }, [filter, refetch]);

    return { setFilter, filter, sortedLessonByTopic, setKeywordFilter, setSubtopicFilter, setTopicFilter, loading, hasNextPage, loadMoreLessons }
}