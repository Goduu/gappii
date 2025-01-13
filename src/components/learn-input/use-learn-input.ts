import { useState, useRef } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Option } from '../ui/autocomplete'
import { CREATE_TOPIC, GET_TOPIC_TITLES } from '@/lib/gqls/topicGQLs'
import { useCreateActivities } from '@/lib/mutations/useCreateActivities'
import { useTransitionContext } from '../loading-store'
import { useToast } from '@/hooks/use-toast'
import { transformInputIntoData } from './processTextInput'
import { cleanTopic } from './cleanTopic'
import { Topic } from '@/ogm-resolver/ogm-types'
import { SupportedLanguage } from '@/app/types'

export const useLearnInput = (initialTopic?: Topic) => {
    const [topic, setTopic] = useState<Option | null>(
        initialTopic ? { label: initialTopic.title || "", value: initialTopic.id || "" } : null
    )
    const [subTopic, setSubTopic] = useState<Option | null>(null)
    const [level, setLevel] = useState<string>("1")
    const [language, setLanguage] = useState<SupportedLanguage>("en-us")

    const createActivities = useCreateActivities()
    const { loading, data } = useQuery<{ topics: Array<{ id: string, title: string }> }>(GET_TOPIC_TITLES)
    const [createTopic] = useMutation(CREATE_TOPIC)
    const { startTransition, isPending } = useTransitionContext()
    const { toast } = useToast()
    const autocompleteRef = useRef<HTMLInputElement>(null)

    const handleError = (error: string) => {
        toast({
            title: "Error",
            description: error,
            variant: "destructive"
        })
    }

    const handleCreateNewTopic = (topic: string) => {
        const clearedTopic = cleanTopic(topic)
        if (!clearedTopic) return

        createTopic({
            variables: { input: { title: topic } },
            refetchQueries: [{ query: GET_TOPIC_TITLES }]
        })
    }

    const handleSelectTopic = (option: Option) => {
        if (topic) setSubTopic(option)
        else setTopic(option)
    }

    const handleSubmit = async () => {
        startTransition(async () => {
            const apiData = topic && subTopic &&
                await transformInputIntoData(topic.label, subTopic.label, level, language, handleError)

            if (apiData) {
                await createActivities(apiData, topic.value, subTopic.value)
            }
        })
    }

    return {
        topic,
        subTopic,
        level,
        loading,
        isPending,
        topicOptions: (data?.topics || []).map<Option>(t => ({
            label: t.title,
            value: t.id
        })),
        autocompleteRef,
        language,
        setLanguage,
        setTopic,
        setSubTopic,
        setLevel,
        handleCreateNewTopic,
        handleSelectTopic,
        handleSubmit
    }
} 