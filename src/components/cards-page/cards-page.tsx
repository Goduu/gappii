"use client"
import { GET_TOPIC_AND_SUBTOPICS } from '@/lib/gqls/topicGQLs'
import { useQuery } from '@apollo/client'
import React from 'react'
import { TopicSubtopicCard } from './topic-subtopic-card'

export const CardsPage = () => {
    const { loading, error, data } = useQuery<{ topics: Array<any> }>(GET_TOPIC_AND_SUBTOPICS)

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {data &&
                data.topics.map(topic => (
                    topic?.hasSubtopics.length > 0 && <TopicSubtopicCard key={topic.id} topic={topic} subtopic={topic.hasSubtopics[0]} voting={{ liked: false, disliked: false, crowned: false }} />
                ))}
        </div>
    )
}
