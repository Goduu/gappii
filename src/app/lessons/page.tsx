import { ContentGroupCard } from '@/components/content-group/content-group-card'
import { LessonsPage } from '@/components/lessons-page/lessons-page'
import { PageTitle } from '@/components/page-title/page-title'
import React from 'react'

const Cards = () => {
    return (
        <>
            <PageTitle title='My Groups' />
            <ContentGroupCard />
            <PageTitle title='My Lessons' />
            <LessonsPage />
        </>
    )
}

export default Cards