import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lesson } from "@/ogm-resolver/ogm-types"

const CreateLessonSchema = z.object({
    topic: z.object({
        id: z.string(),
        title: z.string().min(1, "Topic is required")
    }),
    subtopic: z.object({
        id: z.string(),
        title: z.string().min(1, "Subtopic is required")
    }),
    language: z.string(),
    level: z.number().min(1).max(3)
})

// Infer the type from the Zod schema
export type CreateLessonFormValues = z.infer<typeof CreateLessonSchema>

export const useCreateLessonForm = (lesson?: Partial<Lesson>) => {
    const form = useForm<CreateLessonFormValues>({
        resolver: zodResolver(CreateLessonSchema),
        defaultValues: {
            topic: { id: lesson?.hasTopic?.id || '', title: lesson?.hasTopic?.title || '' },
            subtopic: { id: lesson?.hasSubtopic?.id || '', title: lesson?.hasSubtopic?.title || '' },
            language: lesson?.language || 'en-us',
            level: lesson?.level || 1
        },


    })

    return { form }
}