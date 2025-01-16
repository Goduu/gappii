"use client"
import React, { FC } from 'react'
import { AutoComplete, AutocompleteOption } from '../ui/autocomplete'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_TOPIC, GET_TOPIC_TITLES } from '@/lib/gqls/topicGQLs'
import { cleanTopic } from './cleanTopic'
import { Topic } from '@/ogm-resolver/ogm-types'

type TopicAutocompleteProps = {
    selectedTopic: Topic | null
    onSelectTopic: (topic: AutocompleteOption | null) => void
}

export const TopicAutoComplete: FC<TopicAutocompleteProps> = ({ selectedTopic, onSelectTopic }) => {
    const { loading, data } = useQuery<{ topics: Array<{ id: string, title: string }> }>(GET_TOPIC_TITLES)
    const topicOptions = data?.topics.map<AutocompleteOption>(topic => ({ value: topic.id, label: topic.title })) || []
    const [createTopic] = useMutation(CREATE_TOPIC)

    const handleCreateNewTopic = (topicTitle: string) => {
        const clearedTopic = cleanTopic(topicTitle)
        if (!clearedTopic) return

        createTopic({
            variables: { input: { title: topicTitle } },
            refetchQueries: [{ query: GET_TOPIC_TITLES }]
        })
    }

    return (
        <AutoComplete
            value={{ label: selectedTopic?.title || '', value: selectedTopic?.id || '' }}
            emptyMessage='Empty'
            className='w-full'
            options={topicOptions}
            isLoading={loading}
            onAddOption={handleCreateNewTopic}
            onValueChange={onSelectTopic}
        />
    )
}
