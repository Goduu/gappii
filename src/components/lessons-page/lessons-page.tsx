"use client"
import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { LessonCard } from './lesson-card'
import { Lesson, QueryLessonsArgs } from '@/ogm-resolver/ogm-types'
import { useUser } from '@clerk/nextjs'
import { LessonReaction } from './lesson-reactions'
import { FilterBar } from './filter-bar'
import { LessonSkeletons } from './lesson-skeletons'
import { useFilter } from './filter-hooks'
import { GET_LESSON_FILTERED } from '@/lib/gqls/lessonGQLs'

export const LessonsPage = () => {
    const userData = useUser()
    const { filter, setFilter, setSubtopicFilter, setTopicFilter, setKeywordFilter } = useFilter()
    console.log(filter)

    const { data, refetch } = useQuery<{ lessons: Array<Lesson> }>(GET_LESSON_FILTERED, {
        variables: {
            where: {
                hasTopic: filter.topic?.id ? {
                    id: filter.topic.id
                } : {},
                hasSubtopic: filter.subtopic?.id ? {
                    id: filter.subtopic.id
                } : {},
                wasReactedConnection_SOME: filter.reaction ? {
                    node: {
                        clerkId: userData.user?.id
                    },
                    edge: filter.reaction ? {
                        type: filter.reaction
                    } : {}
                } : {}
            }
        } satisfies QueryLessonsArgs,
        skip: !userData.user
    }
    )

    useEffect(() => {
        console.log('refetching')
        refetch()
    }, [filter])

    const lessons = data?.lessons

    const hasReaction = (lesson: Lesson): LessonReaction | null => {
        if (!userData.user?.id) return null
        const reactionEdge = lesson.wasReactedConnection.edges.find(edge => edge.node.clerkId === userData.user.id)
        return reactionEdge?.properties.type as LessonReaction
    }

    return (
        <div className='flex flex-col gap-10 px-4 w-full'>
            <FilterBar setFilter={setFilter} filter={filter} />
            <div className='flex flex-wrap gap-4 justify-center'>
                {data && lessons ?
                    lessons.filter(lesson =>
                        lesson
                    ).map(lesson => (
                        <LessonCard key={lesson.id} lesson={lesson}
                            reaction={hasReaction(lesson)}
                            setSubtopicFilter={setSubtopicFilter} 
                            setTopicFilter={setTopicFilter}
                            setKeywordFilter={setKeywordFilter}
                        />
                    ))
                    : <LessonSkeletons />
                }
            </div>
        </div>
    )
}
