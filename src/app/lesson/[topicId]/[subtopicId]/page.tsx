import { CardsPage } from '@/components/cards-page/cards-page'
import { LessonPage } from '@/components/lesson-page/lesson-page'
import { Skeleton } from '@/components/ui/skeleton'
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
        <Suspense fallback={<Skeleton className='w-96 h-64' />}>
            <LessonPage topicId={topicId} subtopicId={subtopicId} />
        </Suspense>
    )
}

export default Cards