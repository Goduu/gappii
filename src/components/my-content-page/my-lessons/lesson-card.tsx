import React, { FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { LessonReaction, LessonReactions } from './lesson-reactions'
import { redirect } from 'next/navigation'
import { Keyword, Lesson, Topic } from '@/ogm-resolver/ogm-types'
import { KeywordsBadgeDisplay } from './keywords-display'
import { Draggable } from '@/components/ui/dnd/draggable'
import { routes } from '@/lib/routes'
import { Play } from 'lucide-react'

type LessonCardProps = {
    lesson: Lesson
    reaction: LessonReaction
    setTopicFilter: (topic: Topic) => void
    setSubtopicFilter: (subtopic: Topic) => void
    setKeywordFilter: (keywords: Keyword[]) => void

}
export const LessonCard: FC<LessonCardProps> = ({ lesson, reaction, setTopicFilter, setSubtopicFilter, setKeywordFilter }) => {
    const subtopic = lesson.hasSubtopic.title

    const handleStart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        lesson.id && redirect(routes.lesson(lesson.id))
    }

    return (
        <Draggable id={lesson.id || ""}>
            <Card className="w-96 relative">
                <div className='absolute right-1 top-1'>
                    {lesson.id && <LessonReactions lessonId={lesson.id} reaction={reaction} />}
                </div>
                <div className="flex gap-4 p-6 items-center">
                    <div className='flex flex-col gap-4 w-72'>
                        <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
                            {/* <div className='flex justify-between items-start w-full gap-1'>
                                <div className="text-lg font-black cursor-pointer" onClick={() => setTopicFilter(lesson.hasTopic)}>{topic}</div>
                            </div> */}
                            <span className="text-md cursor-pointer" onClick={() => setSubtopicFilter(lesson.hasSubtopic)}>{subtopic}</span>
                        </div>
                        <div className='w-64'>
                            <KeywordsBadgeDisplay keywords={lesson.hasKeywords} level={lesson.level} />
                        </div>
                    </div>
                    <Button size="icon" onClick={handleStart} className='absolute right-4 bottom-4'><Play /></Button>
                </div>
            </Card>
        </Draggable>

    )
}
