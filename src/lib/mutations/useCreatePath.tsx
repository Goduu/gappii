"use client"
import { useMutation } from "@apollo/client";
import { GET_USER_PATHS_AND_LESSONS, UPDATE_USER_PATH } from "../gqls/userGQLs";
import { useUser } from "@/lib/useUser";
import { MutationUpdateUsersArgs, Path } from "@/ogm-types";

export const useCreatePath = () => {
    const user = useUser();

    const [updateUserMutation] = useMutation(UPDATE_USER_PATH, {
        refetchQueries: [GET_USER_PATHS_AND_LESSONS]
    });

    // Create the path
    const createPath = async (newPath: Pick<Path, "title" | "icon" | "color">): Promise<Path | undefined> => {
        if (!user) return;

        try {
            // Connect the path to the user
            const updatedUser = await updateUserMutation({
                variables: {
                    where: { email: user.email },
                    update: {
                        hasPaths: [{
                            create: [{ node: newPath }]
                        }]
                    }
                } satisfies MutationUpdateUsersArgs
            });

            return updatedUser.data?.updateUsers.users[0].hasPaths.find((path: Path) => path.title === newPath.title)
        } catch (error) {
            console.error("Error creating path")
            console.error(error)
        }
    }

    return createPath
}
