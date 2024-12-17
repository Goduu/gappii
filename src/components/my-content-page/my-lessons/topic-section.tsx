import { PageTitle } from '@/components/page-title/page-title'
import React, { FC, useState } from 'react'
import { LessonCard } from './lesson-card'
import { CreateLesson } from './create-lesson'
import { Keyword, Lesson, Topic } from '@/ogm-resolver/ogm-types'
import { LessonReaction } from './lesson-reactions'
import { useUser } from '@clerk/nextjs'

type TopicSectionProps = {
    topic: Topic
    lessons: Lesson[]
    setSubtopicFilter: (subtopic: Topic) => void
    setTopicFilter: (topic: Topic) => void
    setKeywordFilter: (keywords: Keyword[]) => void
}
export const TopicSection: FC<TopicSectionProps> = ({ topic, lessons, setKeywordFilter, setSubtopicFilter, setTopicFilter }) => {
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const userData = useUser()

    const hasReaction = (lesson: Lesson): LessonReaction | null => {
        if (!userData.user?.id) return null
        const reactionEdge = lesson.wasReactedConnection.edges.find(edge => edge.node.clerkId === userData.user.id)
        return reactionEdge?.properties.type as LessonReaction
    }

    return (
        <div key={topic.id} className='flex flex-col gap-4'>
            <div className='group gap-4 items-center flex'>
                <PageTitle title={topic.title} />
                <CreateLesson open={isCreateOpen} setOpen={setIsCreateOpen} mode="create" topic={topic} />
            </div>
            {lessons.map(lesson => (
                <LessonCard key={lesson.id} lesson={lesson}
                    reaction={hasReaction(lesson)}
                    setSubtopicFilter={setSubtopicFilter}
                    setTopicFilter={setTopicFilter}
                    setKeywordFilter={setKeywordFilter}
                />
            ))}
        </div>
    )
}


