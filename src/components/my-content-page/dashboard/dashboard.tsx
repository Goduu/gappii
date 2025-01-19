import React, { FC, Suspense } from 'react'
import { ActivityHistoryCard } from './my-activity/activity-history-card'
import { StreakCard } from './my-activity/streak-card'
import { LessonsCreatedCard } from './my-activity/lessons-created-card'
import { ReactionsInLessonsCard } from './my-activity/reactions-in-lessons'
import { currentUser } from '@clerk/nextjs/server'
import { Skeleton } from '@/components/ui/skeleton'
import { MyLessons } from './my-lessons/my-lessons'
import { getUserStatistics } from '@/lib/queries/getUserStreak'

type DashboardProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const Dashboard: FC<DashboardProps> = async ({ searchParams }) => {
    const user = await currentUser();
    if (!user) return null;

    const { streak, dailyActivityCount, lessonsCreatedCount, createdLessonsInteractionsCount } = await getUserStatistics(user?.id)

    return (
        <div className="w-full space-y-4 flex flex-col gap-4">
            <div className='flex flex-col md:flex-row gap-4 flex-wrap'>
                <ActivityHistoryCard />
                <Suspense fallback={<Skeleton className='w-full h-full' />}>
                    <StreakCard streak={streak || 0} completedToday={dailyActivityCount > 0} />
                </Suspense>
                <LessonsCreatedCard lessonsCreatedCount={lessonsCreatedCount || 0} />
                <ReactionsInLessonsCard createdLessonsInteractionsCount={createdLessonsInteractionsCount || 0} />
            </div>
            <MyLessons searchParams={searchParams} />
        </div>

    )
}