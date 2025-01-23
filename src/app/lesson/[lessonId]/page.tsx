import { LessonPage } from '@/components/lesson-page/lesson-page'
import React, { FC, Suspense } from 'react'
import { LessonSkeleton } from './lesson-skeleton'
import { getLesson } from '@/lib/queries/getLesson'

type CardsProps = {
    params: Promise<{
        lessonId: string,
    }>
}

const Cards: FC<CardsProps> = async ({ params }) => {
    const { lessonId } = await params

    const lesson = await getLesson(lessonId)

    return (
        <Suspense fallback={<LessonSkeleton />}>
            <LessonPage lesson={lesson} />
        </Suspense>
    )
}

export default Cards