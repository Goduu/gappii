import { CardsPage } from '@/components/cards-page/cards-page'
import { LessonPage } from '@/components/lesson-page/lesson-page'
import { PatientDataCardSkeleton } from '@/components/patient/details-page/patient-data-card-skeleton'
import React, { FC, Suspense, use } from 'react'


type CardsProps = {
    params: Promise<{
        topicId: string,
        subtopicId: string
    }>
}

const Cards: FC<CardsProps> = ({ params }) => {
    const { topicId, subtopicId } = use(params)

    return (
        <Suspense fallback={<PatientDataCardSkeleton />}>
            <LessonPage topicId={topicId} subtopicId={subtopicId} />
        </Suspense>
    )
}

export default Cards