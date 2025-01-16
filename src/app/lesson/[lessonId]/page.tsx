import { LessonPage } from '@/components/lesson-page/lesson-page'
import { getApolloClient } from '@/lib/getApolloClient'
import { GET_LESSON_ACTIVITIES } from '@/lib/gqls/lessonGQLs'
import { Lesson, QueryLessonsArgs } from '@/ogm-resolver/ogm-types'
import React, { FC, Suspense } from 'react'
import { LessonSkeleton } from './lesson-skeleton'
import { PageTitle } from '@/components/ui/page-title'

type CardsProps = {
    params: Promise<{
        lessonId: string,
    }>
}

const Cards: FC<CardsProps> = async ({ params }) => {
    const { lessonId } = await params

    const client = getApolloClient();
    const { data } = await client.query<{ lessons: Lesson[] }>({
        query: GET_LESSON_ACTIVITIES,
        variables: {
            where: {
                id: lessonId
            }
        } satisfies QueryLessonsArgs
    })

    const lesson = data?.lessons[0]

    return (
        <Suspense fallback={<LessonSkeleton />}>
            <PageTitle title='Lesson' />
            <LessonPage lesson={lesson} />
        </Suspense>
    )
}

export default Cards