"use client"
import { Skeleton } from '@/components/ui/skeleton'
import { GET_LESSON_ACTIVITIES } from '@/lib/gqls/lessonGQLs'
import { Lesson, QueryLessonsArgs } from '@/ogm-resolver/ogm-types'
import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { EditLessonForm } from './edit-lesson-form'


type ReviewLessonProps = {
    lessonId: string,
}

export const ReviewLesson: FC<ReviewLessonProps> = ({ lessonId }) => {
    const { data, loading } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_ACTIVITIES, {
        variables: {
            where: {
                id: lessonId
            }
        } satisfies QueryLessonsArgs,
        skip: !lessonId
    })

    if (loading || !data) return <Skeleton className='w-[30rem] h-24' />


    const lesson = data?.lessons[0]

    return (
        <EditLessonForm lesson={lesson} />
    )
}
