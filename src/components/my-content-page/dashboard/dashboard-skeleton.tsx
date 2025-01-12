import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { MyLessonsSkeletons } from './my-lessons-skeletons'

export const DashboardSkeleton = () => {
    return (
        <div className="w-full space-y-4 flex flex-col gap-4">
            <div className='flex flex-col md:flex-row gap-4 flex-wrap'>
                <Skeleton className='w-[28rem] h-60' />
                <Skeleton className='w-64 h-60' />
                <Skeleton className='w-80 h-60' />
                <Skeleton className='w-64 h-60' />
            </div>
            <MyLessonsSkeletons />
        </div>
    )
}
