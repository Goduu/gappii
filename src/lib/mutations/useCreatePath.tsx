import { useMutation } from "@apollo/client";
import { GET_USER_PATHS_AND_LESSONS, UPDATE_USER } from "../gqls/userGQLs";
import { useUser } from "@/lib/useUser";
import { MutationUpdateUsersArgs, Path } from "@/ogm-types";

export const useCreatePath = () => {
    const user = useUser();

    const [updateUserMutation] = useMutation(UPDATE_USER, {
        refetchQueries: [GET_USER_PATHS_AND_LESSONS]
    });

    // Create the path
    const createPath = async (newPath: Pick<Path, "title" | "icon" | "color">) => {
        if (!user) return;

        // Connect the path to the user
        await updateUserMutation({
            variables: {
                where: { clerkId: user.id },
                update: {
                    hasPaths: [{
                        create: [{ node: newPath }]
                    }]
                }
            } satisfies MutationUpdateUsersArgs
        });
    }

    return createPath
}
