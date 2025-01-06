import React from 'react'
import { Skeleton } from '../../ui/skeleton'

export const LessonSkeletons = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='group gap-4 items-center flex'>
                <Skeleton className='w-96 h-12' />
                <Skeleton className='w-12 h-12' />
            </div>
            {[0, 1, 2, 3].map(n => (
                <Skeleton key={n} className='w-96 h-40 rounded-lg' />
            ))}
        </div>

    )
}
