"use client"
import { Crown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'
import { useUser } from "@/lib/useUser";
import { LessonReaction } from "../types";
import clsx from "clsx";
import { useReactToLesson } from "@/lib/mutations/userReactToLesson";


export type LessonReactionsProps = {
    lessonId: string
    reaction?: LessonReaction
}

export const LessonReactions: FC<LessonReactionsProps> = ({ lessonId, reaction }) => {
    const userData = useUser()
    const reactToLesson = useReactToLesson(userData.user?.id || "", lessonId)

    const handleReact = async (type: NonNullable<LessonReaction>) => {
        if (userData.user) await reactToLesson(reaction, type)
    }

    return (
        <div className='flex gap-0'>
            <Button size="icon" variant="ghost" onClick={() => handleReact("LIKED")}>
                <ThumbsUp className={clsx({
                    "fill-violet-500 text-violet-900": reaction === "LIKED"
                })} />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleReact("CROWNED")}>
                <Crown className={clsx({
                    "fill-orange-500 text-orange-900": reaction === "CROWNED"
                })} />
            </Button>
        </div>
    )
}
