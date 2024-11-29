import React from 'react'
import { Skeleton } from '../../ui/skeleton'

export const LessonSkeletons = () => {
    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            <Skeleton className='w-96 h-40 rounded-lg' />
            <Skeleton className='w-96 h-40 rounded-lg' />
            <Skeleton className='w-96 h-40 rounded-lg' />
            <Skeleton className='w-96 h-40 rounded-lg' />
            <Skeleton className='w-96 h-40 rounded-lg' />
        </div>
    )
}
