import { EditLessonForm } from '@/components/my-content-page/dashboard/edit-lesson/edit-lesson-form'
import { PageTitle } from '@/components/ui/page-title'
import { Skeleton } from '@/components/ui/skeleton'
import { getApolloClient } from '@/lib/getApolloClient'
import { GET_LESSON_ACTIVITIES } from '@/lib/gqls/lessonGQLs'
import { Lesson, QueryLessonsArgs } from '@/ogm-types'
import React, { FC, Suspense } from 'react'

type CardsProps = {
    params: Promise<{
        lessonId: string,
    }>
}

const EditLessonPage: FC<CardsProps> = async ({ params }) => {
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

    if (!lesson.id) return <div>Lesson not found</div>

    return (
        <Suspense fallback={<Skeleton className='w-80 h-64' />}>
            <div className='flex flex-col gap-4'>
                <PageTitle title="Edit Lesson" />
                <EditLessonForm lesson={lesson} />
            </div>
        </Suspense>
    )
}
export default EditLessonPage
