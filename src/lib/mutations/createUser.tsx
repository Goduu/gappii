"use server"

import { MutationCreateUsersArgs, User } from "@/ogm-resolver/ogm-types";
import { getApolloClient } from "../getApolloClient";
import { CREATE_USER, GET_USER } from "../gqls/userGQLs";

export const checkAndCreateUser = async (userId: string, email: string, imageUrl: string) => {

    const client = getApolloClient();

    const { data } = await client.query<{ users: User[] }>({
        query: GET_USER,
        variables: { clerkId: userId },
    });

    if (data.users.length > 0) {
        return
    }

    await client.mutate({
        mutation: CREATE_USER,
        variables: {
            input: [
                {
                    clerkId: userId,
                    email,
                    imageUrl,
                },
            ]
        } satisfies MutationCreateUsersArgs
    })
}
