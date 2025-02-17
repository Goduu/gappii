import { Path, PathWhere } from "@/ogm-types";
import { getApolloClient } from "../getApolloClient";
import { GET_PATH_RANDOM_ACTIVITIES } from "../gqls/pathGQL";

export const getPathRandomActivities = async (pathId: string) => {
    const client = getApolloClient();

    try {
        const { data } = await client.query<{ paths: Path[] }>({
            query: GET_PATH_RANDOM_ACTIVITIES,
            variables: {
                where: {
                    id: pathId
                } satisfies PathWhere,
                count: 10
            }
        })

        return data?.paths[0]
    } catch (error) {
        console.dir(error, { depth: null })
        return null
    }


}