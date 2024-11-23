import { LessonPage } from '@/components/lesson-page/lesson-page'
import { Skeleton } from '@/components/ui/skeleton'
import React, { FC, Suspense, use } from 'react'


type CardsProps = {
    params: Promise<{
        lessonId: string,
    }>
}

const Cards: FC<CardsProps> = ({ params }) => {
    const { lessonId } = use(params)

    return (
        <Suspense fallback={<Skeleton className='w-96 h-64' />}>
            <LessonPage lessonId={lessonId} />
        </Suspense>
    )
}

export default Cards