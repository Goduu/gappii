"use client"
import React, { FC } from 'react'
import { Card } from '../ui/card'
import { Lesson } from '@/ogm-types'
import { CommunityCardReactions } from '../community-page/community-card-reactions'
import { LessonActions } from '../my-content-page/my-lessons/lesson-actions'
import { LessonReaction } from '../my-content-page/types'
import { LessonReactions } from '../my-content-page/my-lessons/lesson-reactions'
import { LessonLevel } from './lesson-level'
import { LanguageCorner } from '../ui/language-corner'
import { SupportedLanguage } from '@/app/types'

type LessonCardProps = {
    lesson: Lesson
    variant: 'community' | 'my-content'
}

export const LessonCardSmall: FC<LessonCardProps> = ({ lesson, variant }) => {
    const reaction = lesson.wasReactedConnection?.edges?.[0]?.properties.type as LessonReaction
    const topic = lesson.title.split(' / ')[0]
    const subtopic = lesson.title.split(' / ')[1]

    return (
        <Card className="w-full md:w-auto min-w-72 relative overflow-hidden">
            <LanguageCorner language={lesson.language as SupportedLanguage} />
            <div className='absolute right-1 top-1 flex gap-0'>
                {lesson.id && (
                    <>
                        {variant === 'community'
                            ? <CommunityCardReactions lesson={lesson} />
                            : <LessonReactions lessonId={lesson.id} reaction={reaction} />
                        }
                    </>
                )}
            </div>
            <div className="flex gap-2 px-4 items-center text-sm">
                <div className='flex flex-col w-56 h-18 justify-center'>
                    <div className="flex flex-col items-start gap-0.5">
                        <span className="font-bold truncate">
                            {topic}
                        </span>
                        <span className="text-muted-foreground truncate">
                            {subtopic}
                        </span>
                    </div>
                </div>
            </div>

            <div className='h-10 relative flex items-center justify-between'>
                <LessonLevel level={lesson.level} />
                <LessonActions lesson={lesson} />
            </div>
        </Card>
    )
} 