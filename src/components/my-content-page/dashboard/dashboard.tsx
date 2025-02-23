"use client"
import React, { FC, Suspense } from 'react'
import { ActivityHistoryCard } from './my-activity/activity-history-card'
import { StreakCard } from './my-activity/streak-card'
import { LessonsCreatedCard } from './my-activity/lessons-created-card'
import { ReactionsInLessonsCard } from './my-activity/reactions-in-lessons'
import { Skeleton } from '@/components/ui/skeleton'
import { MyLessons } from './my-lessons/my-lessons'
import { Separator } from '@/components/ui/separator'
import { useUser } from '@/lib/useUser'
import { useUserStatistics } from '@/lib/queries/useUserStatistics'

type DashboardProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const Dashboard: FC<DashboardProps> = ({ searchParams }) => {
    const user = useUser()
    const {
        streak,
        lessonsCreatedCount,
        createdLessonsInteractionsCount,
        loading
    } = useUserStatistics();

    if (!user) return null;

    if (loading) return <div>Loading...</div>;

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