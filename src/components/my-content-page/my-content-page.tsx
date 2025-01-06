import React, { Suspense } from 'react'
import { PageTitle } from '../page-title/page-title'
import { MyLessons } from './my-lessons/my-lessons'
import { LessonSkeletons } from './my-lessons/lesson-skeletons'

type MyContentPageProps = {
    searchParams?: { 
        topic?: string, 
        subtopic?: string, 
        reaction?: string, 
        page?: string 
    }
}

export const MyContentPage = ({ searchParams }: MyContentPageProps) => {
    return (
        <div className='flex flex-col gap-10 w-full'>
            <PageTitle title='My Lessons' />
            <Suspense fallback={<LessonSkeletons />}>
                <MyLessons searchParams={searchParams} />
            </Suspense>
        </div>
    )
}
