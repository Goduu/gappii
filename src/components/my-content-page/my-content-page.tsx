import React, { Suspense } from 'react'
import { PageTitle } from '../page-title/page-title'
import { MyLessons } from './my-lessons/my-lessons'
import { LessonsSkeletons } from './my-lessons/lessons-skeletons'

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
            <Suspense fallback={<LessonsSkeletons />}>
                <MyLessons searchParams={searchParams} />
            </Suspense>
        </div>
    )
}
