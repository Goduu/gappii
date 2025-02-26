"use client"
import React, { FC } from 'react'
import { Card } from '../ui/card'
import { Lesson } from '@/ogm-types'
import { KeywordsBadgeDisplay } from '../ui/keywords-display'
import { CommunityCardReactions } from '../community-page/community-card-reactions'
import { LessonActions } from '../my-content-page/my-lessons/lesson-actions'
import { LessonReaction } from '../my-content-page/types'
import { LessonReactions } from '../my-content-page/my-lessons/lesson-reactions'
import { CommunityCardActions } from '../community-page/community-card-actions'
import { LessonLevel } from './lesson-level'
import { LanguageCorner } from '../ui/language-corner'
import { SupportedLanguage } from '@/app/types'

type LessonCardProps = {
    lesson: Lesson
    variant: 'community' | 'my-content'
}

export const LessonCard: FC<LessonCardProps> = ({ lesson, variant }) => {
    const reaction = lesson.wasReactedConnection?.edges?.[0]?.properties.type as LessonReaction

    return (
        <Card className="w-full md:w-auto min-w-[22rem] relative overflow-hidden">
            <LanguageCorner language={lesson.language as SupportedLanguage} />
            <div className='absolute right-1 top-1 flex gap-1'>
                {lesson.id && (
                    <>
                        {variant === 'community'
                            ? <CommunityCardReactions lesson={lesson} />
                            : <LessonReactions lessonId={lesson.id} reaction={reaction} />
                        }
                    </>
                )}
            </div>
            <div className="flex gap-2 p-6 items-center">
                <div className='flex flex-col gap-4 w-64 h-20 justify-around'>
                    <div className="flex gap-2 items-center font-bold">
                        {lesson.title}
                    </div>
                    <div className='w-60 md:w-64 justify-end'>
                        <KeywordsBadgeDisplay keywords={lesson.hasKeywords} level={lesson.level} />
                    </div>
                </div>
            </div>

            <div className='h-10'>
                <LessonLevel level={lesson.level} />
                {variant === 'my-content'
                    ? <LessonActions lesson={lesson} />
                    : <CommunityCardActions lesson={lesson} />}
            </div>
        </Card>
    )
} 