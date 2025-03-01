import { LessonsPage } from '@/components/my-content-page/lessons-page'
import React from 'react'

const MyDashboardPage = async (props: {
    searchParams?: Promise<{
        lessonReaction?: string;
        endCursor?: string;
    }>;
}) => {

    return (
        <LessonsPage searchParams={await props.searchParams} />
    )
}

export default MyDashboardPage