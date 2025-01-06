import { PageTitle } from '@/components/page-title/page-title'
import React, { FC } from 'react'
import { LessonCard } from './lesson-card'
import { CreateLesson } from './create-lesson'
import {  Lesson, Topic } from '@/ogm-resolver/ogm-types'

type TopicSectionProps = {
    topic: Topic
    lessons: Lesson[]
}
export const TopicSection: FC<TopicSectionProps> = ({ topic, lessons }) => {

    return (
        <div key={topic.id} className='flex flex-col gap-4'>
            <div className='group gap-4 items-center flex'>
                <PageTitle title={topic.title} />
                <CreateLesson mode="create" topic={topic} />
            </div>
            {lessons.map(lesson => (
                <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                />
            ))}
        </div>
    )
}


