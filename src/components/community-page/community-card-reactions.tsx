"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Crown, ThumbsDown, ThumbsUp } from 'lucide-react'

export const CommunityCardReactions = () => {
    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost" onClick={() => { }} className='flex flex-col gap-0 justify-center'>
                <ThumbsDown />
                <div className='text-xs'>
                    32
                </div>
            </Button>
            <Button size="icon" variant="ghost" onClick={() => { }} className='flex flex-col gap-0 justify-center'>
                <ThumbsUp />
                <div className='text-xs'>
                    434
                </div>
            </Button>
            <Button size="icon" variant="ghost" onClick={() => { }} className='flex flex-col gap-0 justify-center'>
                <Crown />
                <div className='text-xs'>
                    200
                </div>
            </Button>
        </div>
    )
}
