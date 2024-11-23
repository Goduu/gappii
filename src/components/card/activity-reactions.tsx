"use client"
import { ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button";
import React, { FC } from 'react'
import { MutationUpdateUsersArgs } from "@/ogm-resolver/ogm-types";
import { useMutation } from "@apollo/client";
import { GET_USER_REPORTED_ACTIVITIES, UPDATE_USER } from "@/lib/gqls/userGQLs";
import { useUser } from "@clerk/nextjs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export type ActivityReactionsProps = {
    activityId: string
    reported?: boolean
}

export const ActivityReactions: FC<ActivityReactionsProps> = ({ activityId, reported = false }) => {
    const [updateUserLikesMutation] = useMutation(UPDATE_USER, { refetchQueries: [GET_USER_REPORTED_ACTIVITIES] })
    const userData = useUser()

    const connectDisconnectVar = connectDisconnect(reported, activityId)

    const handleReport = () => {
        updateUserLikesMutation({
            variables: {
                where: {
                    clerkId: userData.user?.id
                },
                update: {
                    reportedActivities: [
                        {
                            ...connectDisconnectVar
                        }
                    ]
                }
            } satisfies MutationUpdateUsersArgs
        })
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button size="icon" variant="ghost" onClick={handleReport}>
                    <ShieldAlert className={`${reported ? "fill-yellow-500 text-yellow-900" : ""}`} />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Report</p>
            </TooltipContent>
        </Tooltip>
    )
}


const connectDisconnect = (reported: boolean, activityId: string) => {
    return reported ? {
        disconnect: [{
            where: {
                node: {
                    id: activityId
                }
            },
        }]
    } : {
        connect: [{
            where: {
                node: {
                    id: activityId
                }
            }
        }]
    }

}