"use client"
import React, { FC, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_TOPIC, GET_TOPIC_TITLES } from '@/lib/gqls/topicGQLs'
import { cleanTopic } from './cleanTopic'
import { TopicQueryResult } from '@/lib/queries/getTopicTitles'
import { Topic } from '@/ogm-types'
import { AutoComplete, Option } from '../ui/autocomplete'

type TopicAutocompleteProps = {
    selectedTopic: Topic | null
    onSelectTopic: (topic: Option | null) => void
}

export const TopicAutoComplete: FC<TopicAutocompleteProps> = ({ selectedTopic, onSelectTopic }) => {
    const [searchPhrase, ] = useState<string>("")

    // @TODO rethink if its the right approach
    // const onSearchChange = useDebouncedCallback((text: string) => {
    //     setSearchPhrase(text)
    // }, 200)

    // const { loading, topics } = useFetchTopicTitles(searchPhrase)
    const { loading, data } = useQuery<TopicQueryResult>(GET_TOPIC_TITLES, { variables: { searchPhrase } });

    const topicOptions = data?.topics.map<Option>(topic => ({ value: topic.id || "", label: topic.title })) || []
    const [createTopic] = useMutation(CREATE_TOPIC)

    const handleCreateNewTopic = (topicTitle: string) => {
        const clearedTopic = cleanTopic(topicTitle)
        if (!clearedTopic) return

        createTopic({
            variables: { input: { title: topicTitle } },
            refetchQueries: [GET_TOPIC_TITLES]
        })
    }

    return (
        <AutoComplete
            options={topicOptions}
            emptyMessage="No topics found"
            placeholder="Find a topic"
            isLoading={loading}
            onValueChange={onSelectTopic}
            onAddItem={handleCreateNewTopic}
            value={selectedTopic?.id ? { label: selectedTopic.id, value: selectedTopic.title } : undefined}
            className="touch-manipulation"
        />
    )
}
