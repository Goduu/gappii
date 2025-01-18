"use client"
import React, { FC, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_TOPIC, GET_TOPIC_TITLES } from '@/lib/gqls/topicGQLs'
import { cleanTopic } from './cleanTopic'
import { useFetchTopicTitles } from '@/lib/queries/getTopicTitles'
import { useDebouncedCallback } from 'use-debounce'
import { AutoComplete, AutocompleteOption } from '../ui/autocomplete'

type TopicAutocompleteProps = {
    onSelectTopic: (topic: AutocompleteOption | null) => void
}

export const TopicAutoComplete: FC<TopicAutocompleteProps> = ({ onSelectTopic }) => {
    const [searchPhrase, setSearchPhrase] = useState<string>("")

    const onSearchChange = useDebouncedCallback((text: string) => {
        setSearchPhrase(text)
    }, 200)

    const { loading, topics } = useFetchTopicTitles(searchPhrase)
    const topicOptions = topics.map<AutocompleteOption>(topic => ({ value: topic.id || "", label: topic.title })) || []
    const [createTopic] = useMutation(CREATE_TOPIC)

    const handleCreateNewTopic = (topicTitle: string) => {
        const clearedTopic = cleanTopic(topicTitle)
        if (!clearedTopic) return

        createTopic({
            variables: { input: { title: topicTitle } },
            refetchQueries: [{ query: GET_TOPIC_TITLES, variables: { search: searchPhrase || "Next" } }]
        })
    }

    return (
        <AutoComplete
            value={{ label: '', value:  '' }}
            emptyMessage='Empty'
            className='w-full'
            options={topicOptions}
            isLoading={loading}
            onAddOption={handleCreateNewTopic}
            onValueChange={onSelectTopic}
            onSearchChange={onSearchChange}
        />
    )
}
