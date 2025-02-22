"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Crown, ThumbsUp } from 'lucide-react'
import { Lesson } from '@/ogm-types'
import { userReactToLessonSRC } from '@/lib/mutations/userReactToLessonSRC'
import { useRouter } from 'next/navigation'
import { LessonReaction } from '../my-content-page/types'
import clsx from 'clsx'

type CommunityCardReactionsProps = {
    lesson: Lesson
}

export const CommunityCardReactions: FC<CommunityCardReactionsProps> = ({ lesson }) => {
    const router = useRouter()
    // const userData = useUser()
    const userData = { user: { id: "xongas" } }
    const reactionEdges = lesson.wasReactedConnection?.edges || []

    const reaction = reactionEdges.find(edge => edge.node.clerkId === userData.user?.id)?.properties.type as LessonReaction

    const handleReact = async (type: NonNullable<LessonReaction>) => {
        if (userData.user && lesson.id) await userReactToLessonSRC(userData.user.id, lesson.id, reaction, type)
        router.refresh()
    }

    return (
        <div className='flex gap-0'>
            <Button size="icon" variant="ghost" disabled={!userData.user?.id} onClick={() => handleReact("LIKED")} className='flex flex-col gap-0 justify-center'>
                <ThumbsUp className={clsx({
                    "fill-violet-500 text-violet-900": reaction === "LIKED"
                })} />
                <div className='text-xs'>
                    {reactionEdges.filter(reaction => reaction.properties.type === "LIKED").length}
                </div>
            </Button>
            <Button size="icon" variant="ghost" disabled={!userData.user?.id} onClick={() => handleReact("CROWNED")} className='flex flex-col gap-0 justify-center'>
                <Crown className={clsx({
                    "fill-orange-500 text-orange-900": reaction === "CROWNED"
                })} />
                <div className='text-xs'>
                    {reactionEdges.filter(reaction => reaction.properties.type === "CROWNED").length}
                </div>
            </Button>
        </div>
    )
}
