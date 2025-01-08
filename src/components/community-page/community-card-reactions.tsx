"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Crown, ThumbsUp } from 'lucide-react'
import { Lesson } from '@/ogm-resolver/ogm-types'

type CommunityCardReactionsProps = {
    lesson: Lesson
}

export const CommunityCardReactions: FC<CommunityCardReactionsProps> = ({ lesson }) => {
    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost" onClick={() => { }} className='flex flex-col gap-0 justify-center'>
                <ThumbsUp />
                <div className='text-xs'>
                    {lesson.wasReactedConnection.edges.filter(reaction => reaction.properties.type === "LIKE").length}
                </div>
            </Button>
            <Button size="icon" variant="ghost" onClick={() => { }} className='flex flex-col gap-0 justify-center'>
                <Crown />
                <div className='text-xs'>
                    {lesson.wasReactedConnection.edges.filter(reaction => reaction.properties.type === "CROWNED").length}
                </div>
            </Button>
        </div>
    )
}
