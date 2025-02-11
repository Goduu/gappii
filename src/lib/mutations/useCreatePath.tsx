import { useMutation, useQuery } from "@apollo/client";
import { GET_USER, UPDATE_USER } from "../gqls/userGQLs";
import { User } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { MutationUpdateUsersArgs } from "@/ogm-types";


const EMPTY_PATH = {
    title: "New Path",
    icon: "",
    color: "amber",
}

export const useCreatePath = async () => {
    const clerkUserData = useUser()
    const { loading, data: userData } = useQuery<{ users: Array<User> }>(GET_USER, {
        variables: { where: { clerkId: clerkUserData.user?.id } }
    })

    const [updateUserMutation] = useMutation(UPDATE_USER)

    // Create the path
    

    if (!clerkUserData.user) {
        return
    }

    // Connect the path to the user
    await updateUserMutation({
        variables: {
            where: { clerkId: clerkUserData.user.id },
            update: {
                hasPaths: [{
                    create: [{ node: EMPTY_PATH }]
                }]
            }
        } satisfies MutationUpdateUsersArgs
    })
}
