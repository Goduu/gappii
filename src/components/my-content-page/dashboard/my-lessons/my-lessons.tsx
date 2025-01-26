"use client"
import { LessonCard } from '@/components/lesson-card/lesson-card'
import { LessonSearchBar } from '@/components/lesson-card/lesson-searchbar'
import { FilterBar } from '../filter-bar'
import { PageTitle } from '@/components/ui/page-title'
import { CreateLesson } from '../create-lesson'
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useQuery } from '@apollo/client'
import { Lesson, User, UserHasLessonsConnectionWhere } from '@/ogm-resolver/ogm-types'
import { GET_USER_LESSONS } from '@/lib/gqls/userGQLs'
import { useInfiniteScroll } from '../useInfinityScroll'
import { LessonsSkeleton } from '../lessons-skeleton'
import { useDebouncedCallback } from 'use-debounce'
import { HardModeSwitch } from '@/components/lesson-card/hard-mode-switch'

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
            first: 12
        },
    });

    const hasNextPage = data?.users[0]?.hasLessonsConnection.pageInfo.hasNextPage;
    const endCursor = data?.users[0]?.hasLessonsConnection.pageInfo.endCursor;

    const lessons: Lesson[] = data?.users[0]?.hasLessonsConnection.edges.map(
        (edge: { node: Lesson }) => edge.node
    ) || [];

    const handleLoadMore = useDebouncedCallback(async () => {
        if (!hasNextPage || loading || isFetchingMore) return;

        setIsFetchingMore(true);
        try {
            await fetchMore({
                variables: {
                    after: endCursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    const prevUserData = prev?.users[0];
                    const newUserData = fetchMoreResult.users[0];

                    const prevIds = prevUserData.hasLessonsConnection.edges.map(e => e.node.id);

                    const newLessons = prev
                        ? newUserData?.hasLessonsConnection?.edges.filter(e => !prevIds.includes(e.node.id))
                        : newUserData?.hasLessonsConnection?.edges;

                    return {
                        users: [
                            {
                                ...prevUserData,
                                hasLessonsConnection: {
                                    ...newUserData.hasLessonsConnection,
                                    edges: [
                                        ...prevUserData.hasLessonsConnection.edges,
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
    }, 200)

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
                <HardModeSwitch lessonId='' />
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
                        <div ref={setElement} className="h-4 w-full flex flex-wrap gap-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
