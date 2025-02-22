import React, { FC, Suspense } from 'react'
import { ActivityHistoryCard } from './my-activity/activity-history-card'
import { StreakCard } from './my-activity/streak-card'
import { LessonsCreatedCard } from './my-activity/lessons-created-card'
import { ReactionsInLessonsCard } from './my-activity/reactions-in-lessons'
import { Skeleton } from '@/components/ui/skeleton'
import { MyLessons } from './my-lessons/my-lessons'
import { getUserStatistics } from '@/lib/queries/getUserStreak'
import { Separator } from '@/components/ui/separator'
import { auth } from '@auth'

type DashboardProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const Dashboard: FC<DashboardProps> = async ({ searchParams }) => {
    const session = await auth()
    const user = session?.user

    if (!user) return null;

    const { streak, lessonsCreatedCount, createdLessonsInteractionsCount } = await getUserStatistics(user.email)

    return (
        <div className="w-full space-y-4 flex flex-col gap-4">
            <div className='flex flex-col md:flex-row gap-4 flex-wrap'>
                <ActivityHistoryCard />
                <Suspense fallback={<Skeleton className='w-full h-full' />}>
                    <StreakCard streak={streak} />
                </Suspense>
                <LessonsCreatedCard lessonsCreatedCount={lessonsCreatedCount || 0} />
                <ReactionsInLessonsCard createdLessonsInteractionsCount={createdLessonsInteractionsCount || 0} />
            </div>
            <Separator />
            <MyLessons searchParams={searchParams} />
        </div>

    )
}