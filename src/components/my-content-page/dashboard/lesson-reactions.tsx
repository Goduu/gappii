"use client"
import { Crown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"
import { userReactToLesson } from "@/lib/mutations/userReactToLesson";
import { LessonReaction } from "../types";
import clsx from "clsx";


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
        <div className='flex'>
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
