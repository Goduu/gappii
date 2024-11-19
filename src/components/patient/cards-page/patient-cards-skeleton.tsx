import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const PatientCardsSkeleton = () => {
    return (
        <div className='flex flex-wrap gap-2 w-full items-center justify-center'>
            <Skeleton className="w-32 md:w-56 h-20 rounded-xl" />
            <Skeleton className="w-32 md:w-56 h-20 rounded-xl" />
            <Skeleton className="w-32 md:w-56 h-20 rounded-xl" />
        </div>
    )
}
