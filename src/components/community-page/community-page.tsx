import React, { Suspense } from 'react'
import { PageTitle } from '../page-title/page-title'
import { Skeleton } from '../ui/skeleton'
import { CommunityFilters } from './community-filters'
import { GET_COMMUNITY_LESSONS } from '@/lib/gqls/lessonGQLs'
import { CommunityCard } from './community-card'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { getApolloClient } from '@/lib/getApolloClient'

export const CommunityPage = async ({ searchParams }: { searchParams?: { search?: string; level?: string; toggle?: string } }) => {

    const client = getApolloClient();
    const { data } = await client.query<{ lessons: Lesson[] }>({
        query: GET_COMMUNITY_LESSONS,
        variables: {
            searchTerm: searchParams?.search,
            level: searchParams?.level ? parseInt(searchParams.level) : undefined,
            newestSort: searchParams?.toggle === "newest" ? "DESC" : undefined,
            topRatedSort: searchParams?.toggle === "topRated" ? "DESC" : undefined
        }
    })


    return (
        <div className="space-y-4 px-4 md:px-6">
            <PageTitle title='Community' />
            <CommunityFilters />
            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-56 w-full" />
                ))}
            </div>}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.lessons.map((lesson) => (
                        <CommunityCard
                            key={lesson.id}
                            lesson={lesson}
                        />
                    ))}
                </div>
            </Suspense>
        </div>
    )
}
