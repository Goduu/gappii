import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const CollectionSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    icon: z.string(),
    color: z.string(),
})

// Infer the type from the Zod schema
export type CollectionFormValues = z.infer<typeof CollectionSchema>

const newCollection = {
    name: "Collection Name",
    icon: "TreePine",
    color: "bg-orange-500"
}

export const useCollectionForm = (collection?: CollectionFormValues) => {

    const form = useForm<CollectionFormValues>({
        resolver: zodResolver(CollectionSchema),
        defaultValues: collection ? {
            id: collection.id,
            name: collection.name,
            icon: collection.icon,
            color: collection.color
        } : {
            ...newCollection
        }
    })

    return { form }
}