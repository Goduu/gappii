"use client"

import React, { FC } from 'react'
import { Button } from '../ui/button'
import { toast } from '@/hooks/use-toast'
import { redirect } from 'next/navigation'
import { routes } from '@/lib/routes'
import { Copy, Play, Plus } from 'lucide-react'
import { useTransitionContext } from '../loading-store'
import { useUser } from '@clerk/nextjs'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { userHasLesson } from '@/lib/mutations/userHasLesson'
import { ToastAction } from '../ui/toast'

type CommunityCardActionsProps = {
    lesson: Lesson
}

export const CommunityCardActions: FC<CommunityCardActionsProps> = ({ lesson }) => {
    const { startTransition } = useTransitionContext()
    const userData = useUser()

    const handleCopy = () => {
        startTransition(async () => {
            if (userData.user?.id) await userHasLesson(userData.user?.id, lesson.id!, "COPIED")
            toast({
                title: "Lesson copied",
                description: "The lesson has been copied to your library"
            })
        })
    }
    const handlePlay = () => {
        startTransition(() => { if (lesson.id) redirect(routes.lesson(lesson.id)) })
    }

    const handleGoToLibrary = () => {
        startTransition(() => redirect(routes.lessons))
    }

    const handleAdd = () => {
        startTransition(async () => {
            if(userData.user?.id) await userHasLesson(userData.user?.id, lesson.id!, "ADDED")
            toast({
                title: "Lesson added",
                description: "The lesson has been added to your library (just reading)",
                action: <ToastAction altText="See" onClick={handleGoToLibrary}>See</ToastAction>
            })
        })

    }

    const isDisabled = !userData.isSignedIn

    return (
        <div>
            <Button variant="ghost" size="sm" onClick={handlePlay}>
                <Play className="w-4 h-4 mr-2" /> Play
            </Button>
            <Button disabled={isDisabled} variant="ghost" size="sm" onClick={handleCopy}>
                <Copy className="w-4 h-4 mr-2" /> Copy
            </Button>
            <Button disabled={isDisabled} variant="ghost" size="sm" onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" /> Add
            </Button>
        </div>
    )
}
