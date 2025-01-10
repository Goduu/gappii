import React, { Suspense } from 'react'
import { PageTitle } from '../page-title/page-title'
import { MyLessons } from './my-lessons/my-lessons'
import { LessonsSkeletons } from './my-lessons/lessons-skeletons'
import { CreateLesson } from './my-lessons/create-lesson'

type MyContentPageProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const MyContentPage = ({ searchParams }: MyContentPageProps) => {
    return (
        <div className='flex flex-col gap-10 w-full'>
            <div className='flex items-center w-full gap-4'>
                <PageTitle title='My Lessons' />
                <CreateLesson />
            </div>
            <Suspense fallback={<LessonsSkeletons />}>
                <MyLessons searchParams={searchParams} />
            </Suspense>
        </div>
    )
}
