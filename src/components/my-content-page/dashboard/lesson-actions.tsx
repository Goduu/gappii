"use client"
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/button'
import { Construction, Edit, Play } from 'lucide-react'
import React, { FC } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import { Lesson } from '@/ogm-types'
import { useSearchParams } from 'next/navigation'
import { HardModeWrapper } from '@/components/lesson-card/hard-mode-wrapper'
import { LessonMode } from '@/components/lesson-page/type'

interface LessonActionsProps {
    lesson: Lesson
}

export const LessonActions: FC<LessonActionsProps> = ({ lesson }) => {
    const searchParams = useSearchParams();
    
    if (!lesson.id) return null

    const isPlayDisabled = lesson.hasActivitiesAggregate?.count === 0
    const mode = searchParams.get('mode');
    const isHardMode = mode === 'hard';

    return (
        <div className='flex gap-2 absolute right-4 bottom-4 z-10'>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={routes.editLesson(lesson.id)}>
                        <Button size="icon" variant="outline" >
                            <Edit />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>Edit Lesson</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    {isPlayDisabled ?
                        <span>
                            <Button size="icon" disabled>
                                <Construction />
                            </Button>
                        </span>
                        :
                        <Link href={routes.lesson(lesson.id, mode as LessonMode ?? "normal")}>
                            <Button size="icon">
                                <HardModeWrapper isHardMode={isHardMode}>
                                    <Play />
                                </HardModeWrapper>
                            </Button>
                        </Link>
                    }
                </TooltipTrigger>
                <TooltipContent>
                    {isPlayDisabled ? "Lesson is under construction" : isHardMode ? "Start Lesson (Hard Mode)" : "Start Lesson"}
                </TooltipContent>
            </Tooltip>
        </div >
    )
} 