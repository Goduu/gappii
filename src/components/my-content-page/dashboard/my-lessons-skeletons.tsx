import React from 'react'
import { Skeleton } from '../../ui/skeleton'
import { LessonsSkeleton } from './lessons-skeleton'

export const MyLessonsSkeletons = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
                <Skeleton className='w-36 h-9' />
                <Skeleton className='w-36 h-9' />
            </div>
            <Skeleton className='w-full h-10' />
            <div className='flex gap-2'>
                <Skeleton className='w-36 h-9' />
                <Skeleton className='w-36 h-9' />
            </div>
            <div className='flex gap-4'>
                <LessonsSkeleton />
            </div>
        </div>

    )
}
