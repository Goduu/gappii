import React, { FC, Suspense } from 'react'
import { PageTitle } from '../ui/page-title'
import { Skeleton } from '../ui/skeleton'
import { CommunityFilters } from './community-filters'
import { LessonCard } from '../lesson-card/lesson-card'
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
                fallback={
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        {[...Array(6)].map((_, i) => (
                            <Skeleton key={i} className="h-56 w-full" />
                        ))}
                    </div>
                }>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {lessons.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} variant="community" />
                    ))}
                </div>
            </Suspense>
        </div>
    )
}
