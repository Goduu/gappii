"use client"

import React, { FC, useState } from 'react'
import { FilterBar } from './filter-bar'
import { LessonCard } from './lesson-card'
import { useQuery } from '@apollo/client'
import { GET_USER_LESSONS } from '@/lib/gqls/userGQLs'
import { Lesson, User, UserHasLessonsConnectionWhere } from '@/ogm-resolver/ogm-types'
import { useUser } from '@clerk/nextjs'
import { useInfiniteScroll } from './useInfinityScroll'
import { LessonsSkeletons } from './lessons-skeletons'

type MyLessonsProps = {
    searchParams?: {
        topic?: string,
        subtopic?: string,
        reaction?: string,
        endCursor?: string
    }
}

export const MyLessons: FC<MyLessonsProps> = ({ searchParams }) => {
    const userData = useUser()
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const topic = searchParams?.topic || '';
    const subtopic = searchParams?.subtopic || '';
    const reaction = searchParams?.reaction || '';
    const { data, loading, fetchMore } = useQuery<{ users: User[] }>(GET_USER_LESSONS, {
        variables: {
            where: {
                clerkId: userData.user?.id
            },
            lessonWhere: {
                node: {
                    hasTopic: topic ? {
                        title: topic
                    } : {},
                    hasSubtopic: subtopic ? {
                        title: subtopic
                    } : {},
                    wasReactedConnection_SOME: reaction ? {
                        node: {
                            clerkId: userData.user?.id
                        },
                        edge: reaction ? {
                            type: reaction
                        } : {}
                    } : {}
                }
            } satisfies UserHasLessonsConnectionWhere,
            first: 4,
            after: searchParams?.endCursor || undefined,
        },
    });

    const hasNextPage = data?.users[0]?.hasLessonsConnection.pageInfo.hasNextPage;
    const endCursor = data?.users[0]?.hasLessonsConnection.pageInfo.endCursor;

    const lessons: Lesson[] = data?.users[0]?.hasLessonsConnection.edges.map(
        (edge: { node: Lesson }) => edge.node
    ) || [];

    const handleLoadMore = async () => {
        if (!hasNextPage || loading || isFetchingMore) return;

        setIsFetchingMore(true);
        try {
            await fetchMore({
                variables: {
                    after: endCursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;

                    const prevIds = prev?.users[0].hasLessonsConnection.edges.map(e => e.node.id);

                    const newLessons = prev ? fetchMoreResult.users[0].hasLessonsConnection.edges.filter(e => !prevIds.includes(e.node.id)) : fetchMoreResult.users[0].hasLessonsConnection.edges;
                    return {
                        users: [
                            {
                                ...prev.users[0],
                                hasLessonsConnection: {
                                    ...fetchMoreResult.users[0].hasLessonsConnection,
                                    edges: [
                                        ...prev.users[0].hasLessonsConnection.edges,
                                        ...newLessons
                                    ],
                                },
                            },
                        ],
                    };
                },
            });
        } finally {
            setIsFetchingMore(false);
        }
    };

    const { setElement } = useInfiniteScroll({
        loading: loading || isFetchingMore,
        hasNextPage,
        onLoadMore: handleLoadMore,
    });

    return (
        <div className='flex flex-col gap-10 w-full items-start'>
            <FilterBar />
            <div className='flex flex-wrap gap-4 justify-start'>
                {lessons.map((lesson) => (
                    <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                    />
                ))}
                {(loading || isFetchingMore) && <LessonsSkeletons />}
                {/* Loading sentinel element */}
                <div ref={setElement} className="h-4 w-full flex flex-wrap gap-4" />
            </div>
        </div>
    )
}