import { DeleteLessonButton } from '@/components/my-content-page/dashboard/edit-lesson/delete-lesson-button'
import { EditLesson } from '@/components/my-content-page/dashboard/edit-lesson/edit-lesson'
import { PageTitle } from '@/components/page-title/page-title'
import { Skeleton } from '@/components/ui/skeleton'
import React, { FC, Suspense, use } from 'react'


type CardsProps = {
    params: Promise<{
        lessonId: string,
    }>
}

const EditLessonPage: FC<CardsProps> = ({ params }) => {
    const { lessonId } = use(params)

    return (
        <Suspense fallback={<Skeleton className='w-96 h-64' />}>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <PageTitle title="Edit Lesson" />
                    <DeleteLessonButton lessonId={lessonId} />
                </div>
                <EditLesson lessonId={lessonId} />
            </div>
        </Suspense>
    )
}

export default EditLessonPage