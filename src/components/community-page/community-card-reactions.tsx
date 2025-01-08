"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Crown, ThumbsUp } from 'lucide-react'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { useUser } from '@clerk/nextjs'
import { LessonReaction } from '../my-content-page/my-lessons/lesson-reactions'
import { userReactToLesson } from '@/lib/mutations/userReactToLesson'
import { useRouter } from 'next/navigation'

type CommunityCardReactionsProps = {
    lesson: Lesson
}

export const CommunityCardReactions: FC<CommunityCardReactionsProps> = ({ lesson }) => {
    const router = useRouter()
    const userData = useUser()

    const handleReact = async (type: NonNullable<LessonReaction>) => {
        if (userData.user && lesson.id) await userReactToLesson(userData.user.id, lesson.id, null, type)
        router.refresh()
    }

    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost" disabled={!userData.user?.id} onClick={() => handleReact("LIKED")} className='flex flex-col gap-0 justify-center'>
                <ThumbsUp />
                <div className='text-xs'>
                    {lesson.wasReactedConnection.edges.filter(reaction => reaction.properties.type === "LIKED").length}
                </div>
            </Button>
            <Button size="icon" variant="ghost" disabled={!userData.user?.id} onClick={() => handleReact("CROWNED")} className='flex flex-col gap-0 justify-center'>
                <Crown />
                <div className='text-xs'>
                    {lesson.wasReactedConnection.edges.filter(reaction => reaction.properties.type === "CROWNED").length}
                </div>
            </Button>
        </div>
    )
}
