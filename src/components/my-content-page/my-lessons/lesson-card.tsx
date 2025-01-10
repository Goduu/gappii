import React, { FC } from 'react'
import { Card } from '../../ui/card'
import { LessonReactions } from './lesson-reactions'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { KeywordsBadgeDisplay } from '../../ui/keywords-display'
import { LessonActions } from './lesson-actions'
import { LessonReaction } from '../types'

type LessonCardProps = {
    lesson: Lesson
}

export const LessonCard: FC<LessonCardProps> = ({ lesson }) => {

    const reaction = lesson.wasReactedConnection.edges[0]?.properties.type as LessonReaction

    return (
        <Card className="w-[22rem] md:w-96 relative">
            <div className='absolute right-1 top-1'>
                {lesson.id && <LessonReactions lessonId={lesson.id} reaction={reaction} />}
            </div>
            <div className="flex gap-4 p-6 items-center">
                <div className='flex flex-col gap-4 w-72'>
                    <div className="flex gap-2 items-center font-bold">
                        {lesson.title}
                    </div>
                    <div className='w-60 md:w-64'>
                        <KeywordsBadgeDisplay keywords={lesson.hasKeywords} level={lesson.level} />
                    </div>
                </div>
                <LessonActions lessonId={lesson.id || ""} />
            </div>
        </Card>

    )
}
