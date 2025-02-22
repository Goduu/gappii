import { User } from "@/ogm-types"
import { useQuery } from "@apollo/client"
import { GET_USER_PATHS_AND_LESSONS } from "../gqls/userGQLs"
import { useEffect } from "react"
import { useUser } from "../useUser"


export const useUserPathsAndLessons = () => {
    const { user, isLoaded } = useUser()

    const { data: userPaths, loading, refetch } = useQuery<{ users: User[] }>(GET_USER_PATHS_AND_LESSONS, {
        variables: {
            clerkId: user?.id
        },
        skip: !isLoaded || !user?.id
    })

    useEffect(() => {
        refetch()
    }, [user?.id])

    return {
        userPaths: userPaths?.users[0]?.hasPaths,
        userLessons: userPaths?.users[0]?.hasLessons,
        loading: loading || !isLoaded
    }

}