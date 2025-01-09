import React, { FC } from 'react'
import { Card } from '../../ui/card'
import { LessonReactions } from './lesson-reactions'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { KeywordsBadgeDisplay } from '../../ui/keywords-display'
import { Draggable } from '@/components/ui/dnd/draggable'
import { ClickableFilter } from './clickable-filter'
import { StartLessonButton } from './start-lesson-button'
import { LessonReaction } from '../types'

type LessonCardProps = {
    lesson: Lesson
}

export const LessonCard: FC<LessonCardProps> = ({ lesson }) => {

    const reaction = lesson.wasReactedConnection.edges[0]?.properties.type as LessonReaction

    return (
        <Draggable id={lesson.id || ""}>
            <Card className="w-96 relative">
                <div className='absolute right-1 top-1'>
                    {lesson.id && <LessonReactions lessonId={lesson.id} reaction={reaction} />}
                </div>
                <div className="flex gap-4 p-6 items-center">
                    <div className='flex flex-col gap-4 w-72'>
                        <div className="flex gap-2 items-center">
                            <ClickableFilter
                                text={lesson.hasSubtopic.title}
                                filterType="subtopic"
                            />
                        </div>
                        <div className='w-64'>
                            <KeywordsBadgeDisplay keywords={lesson.hasKeywords} level={lesson.level} />
                        </div>
                    </div>
                    <StartLessonButton lessonId={lesson.id || ""} />
                </div>
            </Card>
        </Draggable>

    )
}
