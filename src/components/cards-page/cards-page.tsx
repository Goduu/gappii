"use client"
import { useQuery } from '@apollo/client'
import React from 'react'
import { LessonCard } from './lesson-card'
import { GET_USER_LESSONS } from '@/lib/gqls/userGQLs'
import { QueryUsersArgs, User } from '@/ogm-resolver/ogm-types'
import { useUser } from '@clerk/nextjs'
import { Maybe } from 'graphql/jsutils/Maybe'
import { LessonReaction } from '../card/lesson-reactions'

export const CardsPage = () => {
    const userData = useUser()
    const { loading, error, data } = useQuery<{ users: Array<User> }>(GET_USER_LESSONS, {
        variables: {
            where: {
                clerkId: userData.user?.id
            }
        } satisfies QueryUsersArgs,
        skip: !userData.user
    }
    )
    const reactionEdges = data?.users[0].reactedToLessonsConnection.edges
    const lessons = data?.users[0].hasLessons

    const hasReaction = (lessonId?: Maybe<string>): LessonReaction => {
        const reactionEdge = reactionEdges && reactionEdges.find(r => r.node.id === lessonId)
        return reactionEdge?.properties.type as LessonReaction
    }

    if (!lessons) return null

    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {data &&
                lessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson={lesson}
                        reaction={hasReaction(lesson.id)} />
                ))}
        </div>
    )
}
