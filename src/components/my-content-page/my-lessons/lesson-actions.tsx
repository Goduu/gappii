"use client"
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/button'
import { Edit, Play } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

interface LessonActionsProps {
    lessonId?: string
}

export const LessonActions = ({ lessonId }: LessonActionsProps) => {
    const handleStart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if (lessonId) redirect(routes.lesson(lessonId))
    }

    return (
        <div className='flex gap-2 absolute right-4 bottom-4 z-10'>
            <Button size="icon" variant="outline" onClick={handleStart} >
                <Edit />
            </Button>
            <Button size="icon" onClick={handleStart}>
                <Play />
            </Button>
        </div>
    )
} 