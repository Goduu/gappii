"use client"
import { Crown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"
import { userReactToLesson } from "@/lib/mutations/userReactToLesson";

export type LessonReaction = "LIKED" | "CROWNED" | undefined | null

export type LessonReactionsProps = {
    lessonId: string
    reaction?: LessonReaction
}

export const LessonReactions: FC<LessonReactionsProps> = ({ lessonId, reaction }) => {
    const router = useRouter()
    const userData = useUser()

    const handleReact = async (type: NonNullable<LessonReaction>) => {
        if (userData.user) await userReactToLesson(userData.user.id, lessonId, reaction, type)
        router.refresh()
    }

    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost" onClick={() => handleReact("LIKED")}>
                <ThumbsUp className={`${reaction === "LIKED" ? "fill-green-500 text-green-900" : ""}`} />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleReact("CROWNED")}>
                <Crown className={`${reaction === "CROWNED" ? "fill-orange-500 text-orange-900" : ""}`} />
            </Button>
        </div>
    )
}
