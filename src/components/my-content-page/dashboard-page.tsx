import React, { FC, Suspense } from 'react'
import { PageTitle } from '../ui/page-title'
import { Dashboard } from './dashboard/dashboard'
import { DashboardSkeleton } from './dashboard/dashboard-skeleton'

type DashboardPageProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const DashboardPage: FC<DashboardPageProps> = ({ searchParams }) => {
    return (
        <div className='flex flex-col gap-10 w-full'>
            <div className='flex items-center w-full gap-4'>
                <PageTitle title='My Dashboard' />
            </div>
            <Suspense fallback={<DashboardSkeleton />}>
                <Dashboard searchParams={searchParams} />
            </Suspense>
        </div>
    )
}
