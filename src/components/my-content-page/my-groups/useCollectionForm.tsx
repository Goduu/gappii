import { Collection } from "@/ogm-resolver/ogm-types"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const CollectionSchema = z.object({
    name: z.string(),
    icon: z.string(),
    color: z.string(),
})

// Infer the type from the Zod schema
export type FormValues = z.infer<typeof CollectionSchema>

const newCollection = {
    name: "Collection Name",
    icon: "TreePine",
    color: "bg-orange-500"
}

export const useCollectionForm = (collection?: Collection) => {

    const form = useForm<FormValues>({
        resolver: zodResolver(CollectionSchema),
        defaultValues: collection ? {
            name: collection.title,
            icon: collection.icon,
            color: collection.color
        } : {
            ...newCollection
        }
    })

    return { form }
}