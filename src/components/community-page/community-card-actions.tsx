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
            if (userData.user?.id) await userHasLesson(userData.user?.id, lesson.id!, "ADDED")
            toast({
                title: "Lesson added",
                description: "The lesson has been added to your library (just reading)",
                action: <ToastAction altText="See" onClick={handleGoToLibrary}>See</ToastAction>
            })
        })

    }

    const isDisabled = !userData.isSignedIn

    return (
        <div className='flex gap-1 absolute right-4 bottom-4 z-10'>
            <Button disabled={isDisabled} variant="outline" size="icon" onClick={handleCopy}>
                <Copy size="icon" />
            </Button>
            <Button disabled={isDisabled} variant="outline" size="icon" onClick={handleAdd}>
                <Plus size="icon" />
            </Button>
            <Button variant="outline" size="icon" onClick={handlePlay}>
                <Play size="icon" />
            </Button>
        </div>
    )
}
