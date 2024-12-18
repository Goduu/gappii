import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lesson } from "@/ogm-resolver/ogm-types"

const LessonSchema = z.array(
    z.object({
        id: z.string(),
        description: z.string(),
        options: z.array(z.string()),
        answer: z.string(),
        comment: z.string(),
    })
)

// Infer the type from the Zod schema
export type LessonFormValues = z.infer<typeof LessonSchema>

const newCollection = {
    id: "",
    description: "",
    options: ["", ""],
    answer: "",
    comment: ""
}

export const useLessonForm = (lesson?: Lesson) => {

    const form = useForm<LessonFormValues>({
        resolver: zodResolver(LessonSchema),
        values: lesson?.hasActivities.map(activity => {
            return {
                id: activity.id || "",
                description: activity.description,
                options: activity.options,
                answer: activity.answer,
                comment: activity.comment
            }
        })
    })

    return { form }
}