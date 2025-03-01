"use client"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'
import { useUser } from "@/lib/useUser";
import clsx from "clsx";
import { PathReaction } from "./types";
import { useReactToPath } from "./useReactToPath";

export type PathReactionsProps = {
    pathId: string
    reaction?: PathReaction
}

export const PathReactions: FC<PathReactionsProps> = ({ pathId, reaction }) => {
    const userData = useUser()
    const reactToPath = useReactToPath(userData?.email || "", pathId)

    const handleReact = async (type: NonNullable<PathReaction>) => {
        if (userData) await reactToPath(reaction, type)
    }

    return (
        <div className='flex gap-0'>
            <Button size="icon" variant="ghost" onClick={() => handleReact("FAVORITED")}>
                <Star className={clsx({
                    "fill-orange-500 text-orange-900": reaction === "FAVORITED"
                })} />
            </Button>
        </div>
    )
}
