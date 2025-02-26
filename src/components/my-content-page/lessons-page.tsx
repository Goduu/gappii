import React, { FC, Suspense } from 'react'
import { DashboardSkeleton } from './my-lessons/dashboard-skeleton'
import { MyLessons } from './my-lessons/my-lessons/my-lessons'

type LessonsPageProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const LessonsPage: FC<LessonsPageProps> = ({ searchParams }) => {

    return (
        <div className='flex flex-col gap-10 w-full'>
            <Suspense fallback={<DashboardSkeleton />}>
                <MyLessons searchParams={searchParams} />
            </Suspense>
        </div>
    )
}
