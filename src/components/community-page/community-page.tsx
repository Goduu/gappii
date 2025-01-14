import React, { FC, Suspense } from 'react'
import { PageTitle } from '../page-title/page-title'
import { Skeleton } from '../ui/skeleton'
import { CommunityFilters } from './community-filters'
import { LessonCard } from '../shared/lesson-card'
import { fetchLessonsData } from '@/lib/queries/getCommunityLessons'
import { CommunitySearchParams } from '@/app/types'

export const revalidate = 3600 // invalidate every hour

export const CommunityPage: FC<{ searchParams: CommunitySearchParams }> = async ({ searchParams }) => {
    const lessons = await fetchLessonsData(searchParams);

    return (
        <div className="space-y-4 w-full">
            <PageTitle title='Community' />
            <CommunityFilters />
            <Suspense
                fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-56 w-full" />
                    ))}
                </div>
                }>
                <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                    {lessons.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} variant="community" />
                    ))}
                </div>
            </Suspense>
        </div>
    )
}
