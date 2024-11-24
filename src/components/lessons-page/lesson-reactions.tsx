"use client"
import { Crown, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "@/lib/gqls/userGQLs";
import { useUser } from "@clerk/nextjs";
import { MutationUpdateUsersArgs } from "@/ogm-resolver/ogm-types";
import { GET_LESSON_FILTERED } from "@/lib/gqls/lessonGQLs";

export type LessonReaction = "LIKED" | "DISLIKED" | "CROWNED" | undefined | null

export type LessonReactionsProps = {
    lessonId: string
    reaction: LessonReaction
}

export const LessonReactions: FC<LessonReactionsProps> = ({ lessonId, reaction }) => {
    const [updateUserLikesMutation] = useMutation(UPDATE_USER, { refetchQueries: [GET_LESSON_FILTERED] })
    const userData = useUser()

    const handleReact = (type: NonNullable<LessonReaction>) => {
        updateUserLikesMutation({
            variables: {
                where: {
                    clerkId: userData.user?.id
                },
                update: {
                    reactedToLessons: [
                        reaction === type ? {
                            disconnect: [{
                                where: {
                                    node: {
                                        id: lessonId
                                    }
                                },
                            }]
                        } :
                            {
                                connect: [{
                                    where: {
                                        node: {
                                            id: lessonId
                                        }
                                    },
                                    edge: {
                                        type: type
                                    }
                                }]
                            }
                    ]
                }
            } satisfies MutationUpdateUsersArgs
        })
    }

    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost" onClick={() => handleReact("DISLIKED")}>
                <ThumbsDown className={`${reaction === "DISLIKED" ? "fill-red-500 text-red-900" : ""}`} />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleReact("LIKED")}>
                <ThumbsUp className={`${reaction === "LIKED" ? "fill-green-500 text-green-900" : ""}`} />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleReact("CROWNED")}>
                <Crown className={`${reaction === "CROWNED" ? "fill-orange-500 text-orange-900" : ""}`} />
            </Button>
        </div>
    )
}
