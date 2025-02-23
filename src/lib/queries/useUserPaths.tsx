"use client"
import { User } from "@/ogm-types"
import { useQuery } from "@apollo/client"
import { GET_USER_PATHS_AND_LESSONS } from "../gqls/userGQLs"
import { useEffect } from "react"
import { useUser } from "../useUser"

export const useUserPathsAndLessons = () => {
    const user = useUser()

    const { data: userPaths, loading, refetch } = useQuery<{ users: User[] }>(GET_USER_PATHS_AND_LESSONS, {
        variables: {
            email: user?.email
        },
        skip: !user
    })

    useEffect(() => {
        refetch()
    }, [user?.email])

    return {
        userPaths: userPaths?.users[0]?.hasPaths,
        userLessons: userPaths?.users[0]?.hasLessons,
        loading: loading
    }

}