import { useTransitionContext } from "@/components/loading-store"
import { CREATE_COLLECTION, UPDATE_COLLECTION } from "@/lib/gqls/colectionGQLs"
import { GET_USER_COLLECTIONS, UPDATE_USER } from "@/lib/gqls/userGQLs"
import { useMutation } from "@apollo/client"
import { CollectionFormValues } from "./useCollectionForm"
import { MutationCreateCollectionsArgs, MutationUpdateCollectionsArgs, MutationUpdateUsersArgs } from "@/ogm-resolver/ogm-types"
import { useUser } from "@clerk/nextjs"


export const useCollectionFormFunctions = () => {
    const { startTransition } = useTransitionContext()
    const [createCollection] = useMutation(CREATE_COLLECTION, { refetchQueries: [GET_USER_COLLECTIONS] })
    const [updateCollection] = useMutation(UPDATE_COLLECTION, { refetchQueries: [GET_USER_COLLECTIONS] })
    const [updateUser] = useMutation(UPDATE_USER)
    const userData = useUser()


    const handleCreateCollection = async (formValues: CollectionFormValues, onClose: () => void) => {
        startTransition(async () => {
            const createdCollection = await createCollection({
                variables: {
                    input: [{
                        title: formValues.name,
                        icon: formValues.icon,
                        color: formValues.color
                    }]
                } satisfies MutationCreateCollectionsArgs
            })
            if (createdCollection.data.createCollections.collections[0].id) {
                await updateUser({
                    variables: {
                        where: {
                            clerkId: userData.user?.id
                        },
                        update: {
                            hasCollections: [{
                                connect: [{
                                    where: {
                                        node: {
                                            id: createdCollection.data.createCollections.collections[0].id
                                        }
                                    }
                                }]
                            }]
                        }
                    } satisfies MutationUpdateUsersArgs

                })
                onClose()

            }
        })
    }

    const handleEditCollection = async (formValues: CollectionFormValues, onClose: () => void) => {
        startTransition(async () => {
            await updateCollection({
                variables: {
                    where: {
                        id: formValues.id
                    },
                    update: {
                        color: formValues.color,
                        icon: formValues.icon,
                        title: formValues.name
                    }
                } satisfies MutationUpdateCollectionsArgs,
            })
            onClose()
        })
    }

    return { handleCreateCollection, handleEditCollection }
}
