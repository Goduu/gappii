"use client"
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

interface StartLessonButtonProps {
    lessonId?: string
}

export const StartLessonButton = ({ lessonId }: StartLessonButtonProps) => {
    const handleStart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if(lessonId) redirect(routes.lesson(lessonId))
    }

    return (
        <Button size="icon" onClick={handleStart} className='absolute right-4 bottom-4'>
            <Play />
        </Button>
    )
} 