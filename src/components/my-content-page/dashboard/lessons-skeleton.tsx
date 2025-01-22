import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const LessonsSkeleton = () => {
    return (
        <>
            {
                Array.from({ length: 4 }).map((_, n) => (
                    <Skeleton key={`c${n}`} className='w-full md:w-96 h-[10.5rem] rounded-lg' />
                ))
            }
        </>
    )
}
