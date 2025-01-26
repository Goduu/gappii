"use client"

import React, { FC } from 'react'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'
import { routes } from '@/lib/routes'
import { Play } from 'lucide-react'
import { useTransitionContext } from '../loading-store'
import { useUser } from '@clerk/nextjs'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { AddLessonToLibrary } from './add-lesson-to-library-dialog'

type CommunityCardActionsProps = {
    lesson: Lesson
}

export const CommunityCardActions: FC<CommunityCardActionsProps> = ({ lesson }) => {
    const { startTransition } = useTransitionContext()
    const userData = useUser()

    const handlePlay = () => {
        startTransition(() => { if (lesson.id) redirect(routes.testLesson(lesson.id)) })
    }

    const isDisabled = !userData.isSignedIn

    return (
        <div className='flex gap-1 absolute right-4 bottom-4 z-10'>
            <AddLessonToLibrary lesson={lesson} disabled={isDisabled} />
            <Button variant="outline" size="icon" onClick={handlePlay}>
                <Play size={16} />
            </Button>
        </div>
    )
}
