import React, { FC, Suspense } from 'react'
import { PageTitle } from '../ui/page-title'
import { Skeleton } from '../ui/skeleton'
import { LessonCard } from '../lesson-card/lesson-card'
import { fetchLessonsData } from '@/lib/queries/getCommunityLessons'
import { CommunitySearchParams } from '@/app/types'
import { CommunityActionBar } from './community-actions-bar'

export const revalidate = 3600 // invalidate every hour

export const CommunityPage: FC<{ searchParams: CommunitySearchParams }> = async ({ searchParams }) => {
    const lessons = await fetchLessonsData(searchParams);

    return (
        <div className="flex flex-col gap-4 w-full">
            <PageTitle title='Community' />
            <CommunityActionBar />
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
