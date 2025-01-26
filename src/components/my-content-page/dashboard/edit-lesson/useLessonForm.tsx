import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lesson } from "../../../../ogm-types"

const LessonSchema = z.object({
    topic: z.object({
        id: z.string(),
        title: z.string()
    }),
    subtopic: z.object({
        id: z.string(),
        title: z.string()
    }),
    language: z.string(),
    isPublic: z.boolean(),
    keywords: z.array(
        z.object({
            id: z.string(),
            name: z.string()
        }),
    ),
    activities: z.array(
        z.object({
            id: z.string(),
            description: z.string().min(1, "Question is required").refine(
                (val) => {
                    const gapCount = (val.match(/{gap}/g) || []).length;
                    return gapCount === 1;
                },
                "Question must contain exactly one gap placeholder '{gap}'"
            ),
            options: z.array(z.string().min(1, "Option is required")),
            answer: z.string().min(1, "Answer is required"),
            comment: z.string().min(1, "Comment is required"),
            order: z.number()
        })
    )
})

// Infer the type from the Zod schema
export type LessonFormValues = z.infer<typeof LessonSchema>

export const useLessonForm = (lesson?: Lesson) => {
    const form = useForm<LessonFormValues>({
        resolver: zodResolver(LessonSchema),
        defaultValues: {
            topic: { id: lesson?.hasTopic?.id || '', title: lesson?.hasTopic?.title || '' },
            subtopic: { id: lesson?.hasSubtopic?.id || '', title: lesson?.hasSubtopic?.title || '' },
            language: lesson?.language || 'en-us',
            isPublic: lesson?.isPublic || false,
            keywords: lesson?.hasKeywords.map(keyword => ({ name: keyword.name, id: keyword.id || "" })) || [],
            activities: lesson?.hasActivities.map(activity => ({
                id: activity.id || "",
                description: activity.description,
                options: activity.options,
                answer: activity.answer,
                comment: activity.comment,
                order: activity.order
            })).sort((a, b) => a.order - b.order) || []
        },

    })


    return { form }
}