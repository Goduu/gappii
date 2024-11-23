import React, { FC } from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { LessonReaction, LessonReactions } from '../card/lesson-reactions'
import { redirect } from 'next/navigation'
import { Lesson } from '@/ogm-resolver/ogm-types'

type LessonCardProps = {
    lesson: Lesson
    reaction: LessonReaction
}
export const LessonCard: FC<LessonCardProps> = ({ lesson, reaction }) => {
    const topic = lesson.hasTopic.title
    const subtopic = lesson.hasSubtopic.title
    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle className="flex justify-between items-start w-full">
                    <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full'>
                        <div className='flex justify-between items-start w-full gap-1'>
                            <div className="text-lg font-black">{topic}</div>
                            {lesson.id && <LessonReactions lessonId={lesson.id} reaction={reaction} />}
                        </div>
                        <span className="text-md">{subtopic}</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4">
                <Button onClick={() => redirect(`lesson/${lesson.id}`)}> Start</Button>
            </CardFooter>
        </Card>
    )
}
