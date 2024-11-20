import { Crown, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'

export type VotingIconsProps = {
    liked?: boolean
    disliked?: boolean
    crowned?: boolean
}

export const VotingIcons: FC<VotingIconsProps> = ({ liked = false, disliked = false, crowned = false }) => {
    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost">
                <ThumbsDown className={`${disliked ? "fill-red-500 text-red-900" : ""}`} />
            </Button>
            <Button size="icon" variant="ghost">
                <ThumbsUp className={`${liked ? "fill-green-500 text-green-900" : ""}`} />
            </Button>
            <Button size="icon" variant="ghost">
                <Crown className={`${crowned ? "fill-orange-500 text-orange-900" : ""}`} />
            </Button>
        </div>
    )
}
