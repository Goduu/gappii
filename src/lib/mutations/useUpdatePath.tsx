import { useMutation } from "@apollo/client"
import { UPDATE_PATH } from "../gqls/pathGQL"
import { Path } from "@/ogm-types"

export const useUpdatePath = () => {
    const [updatePathMutation] = useMutation(UPDATE_PATH)

    const updatePath = async (path: Pick<Path, "id" | "title" | "color" | "icon">, lessonId?: string) => {
        await updatePathMutation({
            variables: {
                where: { id: path.id },
                update: {
                    title: path.title,
                    color: path.color,
                    icon: path.icon,
                    withLessons: lessonId && [{ connect: [{ where: { node: { id: lessonId } } }] }]
                }
            }
        })
    }

    return updatePath

}

