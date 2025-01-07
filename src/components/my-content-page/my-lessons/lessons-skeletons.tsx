import React from 'react'
import { Skeleton } from '../../ui/skeleton'

export const LessonsSkeletons = () => {
    return (
        <div className='flex flex-col gap-8 w-full items-start'>
            <Skeleton className='w-96 h-7' />
            <div className='flex flex-wrap gap-4 justify-start'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className='flex flex-col gap-4'>
                        <div className='group gap-4 items-center flex'>
                            <Skeleton className='w-80 h-12' />
                            <Skeleton className='w-12 h-12' />
                        </div>
                        {Array.from({ length: 4 }).map((_, n) => (
                            <Skeleton key={`c${n}`} className='w-96 h-28 rounded-lg' />
                        ))}
                    </div>

                ))}
            </div>
        </div>

    )
}
