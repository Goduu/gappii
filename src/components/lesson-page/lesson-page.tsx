"use client"
import { Lesson, QueryLessonsArgs, QueryUsersArgs, User } from '@/ogm-resolver/ogm-types'
import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { LessonProgressManager } from './lesson-progress-manager'
import { GET_LESSON_ACTIVITIES } from '@/lib/gqls/lessonGQLs'
import { GET_USER_REPORTED_ACTIVITIES } from '@/lib/gqls/userGQLs'
import { useUser } from '@clerk/nextjs'
import { Skeleton } from '../ui/skeleton'
import { PageTitle } from '../page-title/page-title'

type LessonPageProps = {
    lessonId: string,
}

export const LessonPage: FC<LessonPageProps> = ({ lessonId }) => {
    const userData = useUser()
    const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_ACTIVITIES, {
        variables: {
            where: {
                id: lessonId
            }
        } satisfies QueryLessonsArgs,
        skip: !lessonId
    })
    const { data: userReportedActivities } = useQuery<{ users: User[] }>(GET_USER_REPORTED_ACTIVITIES, {
        variables: {
            where: {
                clerkId: userData.user?.id
            }
        } satisfies QueryUsersArgs,
        skip: !userData.user?.id
    })

    const lesson = data?.lessons[0]
    const topic = lesson?.hasTopic
    const subtopic = lesson?.hasSubtopic
    const activities = lesson?.hasActivities
    const reportedActivityIds = userReportedActivities?.users[0]?.reportedActivities

    if (!topic || !subtopic || !activities) return <Skeleton className='w-96 h-48' />

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full">
            <PageTitle title='Lesson' />
            <LessonProgressManager topic={topic.title} subtopic={subtopic.title} activities={activities} reportedActivityIds={reportedActivityIds} />
        </div>
    )
}
