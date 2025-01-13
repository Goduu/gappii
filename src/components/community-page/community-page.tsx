import React, { FC, Suspense } from 'react'
import { PageTitle } from '../page-title/page-title'
import { Skeleton } from '../ui/skeleton'
import { CommunityFilters } from './community-filters'
import { GET_COMMUNITY_LESSONS } from '@/lib/gqls/lessonGQLs'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { getApolloClient } from '@/lib/getApolloClient'
import { LessonCard } from '../shared/lesson-card'

export const revalidate = 3600 // invalidate every hour

export type CommunitySearchParams = {
    search?: string;
    toggle?: string;
    level?: string;
    language?: string;
}

export const CommunityPage: FC<{ searchParams: CommunitySearchParams | undefined }> = async ({ searchParams }) => {

    const client = getApolloClient();
    const { data } = await client.query<{ lessons: Lesson[] }>({
        query: GET_COMMUNITY_LESSONS,
        variables: {
            searchTerm: searchParams?.search,
            level: searchParams?.level ? parseInt(searchParams.level) : undefined,
            newestSort: searchParams?.toggle === "newest" ? "DESC" : undefined,
            topRatedSort: searchParams?.toggle === "topRated" ? "DESC" : undefined,
            language: searchParams?.language ? searchParams?.language : undefined
        }
    })

    return (
        <div className="space-y-4 w-full">
            <PageTitle title='Community' />
            <CommunityFilters />
            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-56 w-full" />
                ))}
            </div>}>
                <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                    {data?.lessons.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} variant="community" />
                    ))}
                </div>
            </Suspense>
        </div>
    )
}
