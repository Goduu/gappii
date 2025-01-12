import { DashboardPage } from '@/components/my-content-page/dashboard-page'
import React from 'react'

const MyDashboardPage = async (props: {
    searchParams?: Promise<{
        topic?: string;
        subtopic?: string;
        reaction?: string;
        endCursor?: string;
    }>;
}) => {

    return (
        <DashboardPage searchParams={await props.searchParams} />
    )
}

export default MyDashboardPage