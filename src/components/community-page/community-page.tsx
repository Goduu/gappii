import React, { Suspense } from 'react'
import { CommunityCard } from './community-card'
import { PageTitle } from '../page-title/page-title'
import { Skeleton } from '../ui/skeleton'

export const CommunityPage = () => {
    return (
        <>
            <PageTitle title='Community' />
            <Suspense fallback={<Skeleton className='w-96 h-56'/>}>
                <CommunityCard />
            </Suspense>
        </>
    )
}
