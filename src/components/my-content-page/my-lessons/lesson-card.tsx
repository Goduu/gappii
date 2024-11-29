import React, { FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { LessonReaction, LessonReactions } from './lesson-reactions'
import { redirect } from 'next/navigation'
import { Keyword, Lesson, Topic } from '@/ogm-resolver/ogm-types'
import { KeywordsBadgeDisplay } from './keywords-display'

type LessonCardProps = {
    lesson: Lesson
    reaction: LessonReaction
    setTopicFilter: (topic: Topic) => void
    setSubtopicFilter: (subtopic: Topic) => void
    setKeywordFilter: (keywords: Keyword[]) => void

}
export const LessonCard: FC<LessonCardProps> = ({ lesson, reaction, setTopicFilter, setSubtopicFilter, setKeywordFilter }) => {
    const topic = lesson.hasTopic.title
    const subtopic = lesson.hasSubtopic.title

    return (
        <Card className="w-96 relative">
            <CardHeader>
                <div className='absolute right-1 top-1'>
                    <div className='justify-end items-end flex'>
                        {lesson.id && <LessonReactions lessonId={lesson.id} reaction={reaction} />}
                    </div>
                </div>
                <CardTitle className="flex justify-between items-start w-full">
                    <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full'>
                        <div className='flex justify-between items-start w-full gap-1'>
                            <div className="text-lg font-black cursor-pointer" onClick={() => setTopicFilter(lesson.hasTopic)}>{topic}</div>
                        </div>
                        <span className="text-md cursor-pointer" onClick={() => setSubtopicFilter(lesson.hasSubtopic)}>{subtopic}</span>
                    </div>
                </CardTitle>
                <CardContent>
                <KeywordsBadgeDisplay keywords={lesson.hasKeywords} level={lesson.level}/> 
                </CardContent>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4">
                <Button onClick={() => redirect(`lesson/${lesson.id}`)}> Start</Button>
            </CardFooter>
        </Card>
    )
}
