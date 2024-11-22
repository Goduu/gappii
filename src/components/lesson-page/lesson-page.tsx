"use client"
import { GET_TOPICS_ACTIVITIES } from '@/lib/gqls/topicGQLs'
import { Topic } from '@/ogm-resolver/ogm-types'
import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { ActivityProgressManager } from './activity-progress-manager'

type LessonPageProps = {
    topicId: string,
    subtopicId: string
}

export const LessonPage: FC<LessonPageProps> = ({ topicId, subtopicId }) => {
    const { loading, error, data } = useQuery<{ topics: Topic[] }>(GET_TOPICS_ACTIVITIES, {
        variables: {
            topicId, subtopicId
        }
    })
    const topic = data?.topics[0]
    const subtopic = topic?.hasSubtopics[0]
    const activities = subtopic?.hasActivities

    if (!topic || !subtopic || !activities) return <div>Not found</div>

    return (
        <ActivityProgressManager topic={topic.title} subtopic={subtopic.title} activities={activities} />
    )
}
