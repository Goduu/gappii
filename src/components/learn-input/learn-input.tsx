"use client"
import { FC } from 'react'
import { Button } from '../ui/button'
import { AdvancedParams } from './advanced-params'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { useCreateLessonForm } from './useCreateLessonForm'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useTransitionContext } from '../loading-store'
import { sendErrorToast } from '@/lib/utils'
import { transformInputIntoData } from '@/lib/processTextInput'
import { redirect } from 'next/navigation'
import { useCreateLesson } from '@/lib/mutations/useCreateLesson'
import { routes } from '@/lib/routes'
import { ApiActivityResponse } from '@/lib/validateCreateLessonApiResponse'
import { BrainCircuit, FilePenLine } from 'lucide-react'
import { SupportedLanguage } from '@/app/types'
import { TopicAutoComplete } from './topic-autocomplete'
import { Option } from '../ui/autocomplete'

type LearnInputProps = {
    initialLesson?: Lesson
    hideAdvancedParams?: boolean
    hideActions?: boolean
}

export const LearnInput: FC<LearnInputProps> = ({
    initialLesson,
    hideAdvancedParams = false,
    hideActions = false,
}) => {
    const { form } = useCreateLessonForm(initialLesson)
    const { startTransition } = useTransitionContext()
    const createLesson = useCreateLesson()
    const topic = form.watch("topic")
    const subtopic = form.watch("subtopic")

    const onSubmit = (type: "AI" | "self") => {
        form.handleSubmit((formData) => {
            if (type === "AI") {
                startTransition(async () => {
                    const apiData = await transformInputIntoData(
                        formData.topic.title,
                        formData.subtopic.title,
                        formData.level,
                        formData.language as SupportedLanguage,
                        formData.activitiesNumber,
                        sendErrorToast)

                    if (apiData) {
                        const lessonData = await createLesson(apiData, formData.topic.id, formData.subtopic.id)
                        if (lessonData?.id) {
                            redirect(routes.lesson(lessonData.id))
                        }

                    }
                })
            } else {
                startTransition(async () => {

                    const createLessonData: ApiActivityResponse = {
                        activities: [],
                        keywords: [],
                        topic: formData.topic.title,
                        subtopic: formData.subtopic.title,
                        validTopicSubtopic: true,
                        level: Number(formData.level),
                        language: formData.language
                    }

                    await createLesson(createLessonData, formData.topic.id, formData.subtopic.id)
                })
            }
        })()
    }

    return (
        <Form {...form}>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='flex flex-col gap-4 items-center'
            >
                <div className='flex gap-2 w-full'>
                    <div className='flex-col flex gap-1 w-1/2'>
                        <p className='text-sm'>Topic:</p>
                        <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <TopicAutoComplete
                                            selectedTopic={field.value}
                                            onSelectTopic={(topic: Option | null) => field.onChange({ id: topic?.value || "", title: topic?.label || "" })}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='flex-col flex gap-1 w-1/2'>
                        <p className='text-sm'>Subtopic:</p>
                        <FormField
                            control={form.control}
                            name="subtopic"
                            render={({ field }) => (
                                <FormItem>
                                    <TopicAutoComplete
                                        selectedTopic={field.value}
                                        onSelectTopic={(subtopic: Option | null) => field.onChange({ id: subtopic?.value || "", title: subtopic?.label || "" })}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {!hideAdvancedParams && (
                    <AdvancedParams form={form} />
                )}

                {!hideActions && (
                    <div className='flex justify-center gap-2'>
                        <Button
                            variant="secondary"
                            disabled={!topic.id || !subtopic.id}
                            onClick={() => form.handleSubmit(() => onSubmit("self"))()}
                            className='flex items-center gap-2'
                        >
                            <FilePenLine className='w-4 h-4' />
                            Create yourself
                        </Button>
                        <Button
                            disabled={!topic.id || !subtopic.id}
                            onClick={() => form.handleSubmit(() => onSubmit("AI"))()}
                            className='flex items-center gap-2'
                        >
                            <BrainCircuit className='w-4 h-4' />
                            Create with AI
                        </Button>
                    </div>
                )}
            </form>
        </Form>
    )
}
