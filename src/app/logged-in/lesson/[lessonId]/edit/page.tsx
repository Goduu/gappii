import { ReviewLesson } from '@/components/my-content-page/my-lessons/review-lesson/review-lesson'
import { PageTitle } from '@/components/page-title/page-title'
import { Skeleton } from '@/components/ui/skeleton'
import React, { FC, Suspense, use } from 'react'


type CardsProps = {
    params: Promise<{
        lessonId: string,
    }>
}

const EditLesson: FC<CardsProps> = ({ params }) => {
    const { lessonId } = use(params)

    return (
        <Suspense fallback={<Skeleton className='w-96 h-64' />}>
            <div className='flex flex-col gap-4'>
                <PageTitle title="Edit Lesson" />
                <ReviewLesson lessonId={lessonId} />
            </div>
        </Suspense>
    )
}

export default EditLesson