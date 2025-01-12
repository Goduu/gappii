"use client"
import { LessonCard } from '@/components/shared/lesson-card'
import { LessonSearchBar } from '@/components/shared/lesson-searchbar'
import { FilterBar } from '../filter-bar'
import { PageTitle } from '@/components/page-title/page-title'
import { CreateLesson } from '../create-lesson'
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useQuery } from '@apollo/client'
import { Lesson, User, UserHasLessonsConnectionWhere } from '@/ogm-resolver/ogm-types'
import { GET_USER_LESSONS } from '@/lib/gqls/userGQLs'
import { useInfiniteScroll } from '../useInfinityScroll'
import { LessonsSkeleton } from '../lessons-skeleton'

type MyLessonsProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const MyLessons = ({ searchParams }: MyLessonsProps) => {
    const userData = useUser()
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const reaction = searchParams?.reaction || '';
    const search = searchParams?.search || '';

    const { data, loading, fetchMore } = useQuery<{ users: User[] }>(GET_USER_LESSONS, {
        variables: {
            where: {
                clerkId: userData.user?.id
            },
            lessonWhere: {
                node: {
                    title_CONTAINS: search,
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
            first: 16
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

                    const newLessons = prev
                        ? fetchMoreResult?.users[0]?.hasLessonsConnection?.edges.filter(e => !prevIds.includes(e.node.id))
                        : fetchMoreResult?.users[0]?.hasLessonsConnection?.edges;

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
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <PageTitle title='My Lessons' />
                <CreateLesson />
            </div>
            <div className='flex flex-col gap-2'>
                <LessonSearchBar />
                <div className='flex flex-col gap-10 w-full items-start'>
                    <FilterBar />
                    <div className='flex flex-wrap gap-4 justify-start'>
                        {lessons.map((lesson) => (
                            <LessonCard
                                variant="my-content"
                                key={lesson.id}
                                lesson={lesson}
                            />
                        ))}
                        {(loading || isFetchingMore) && <LessonsSkeleton />}
                        {/* Loading sentinel element */}
                        <div ref={setElement} className="h-4 w-full flex flex-wrap gap-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
