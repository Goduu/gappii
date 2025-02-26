import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { MyLessonsSkeletons } from './my-lessons-skeletons'

export const DashboardSkeleton = () => {
    return (
        <div className="w-full space-y-4 flex flex-col gap-4">
            <div className='flex flex-col md:flex-row gap-4 flex-wrap'>
                <Skeleton className="h-72 w-full md:w-96 px-0 md:px-5" />
                <Skeleton className='w-full md:w-64 h-60' />
                <Skeleton className='w-full md:w-64 h-60' />
                <Skeleton className='w-full md:w-64 h-60' />
            </div>
            <MyLessonsSkeletons />
        </div>
    )
}
