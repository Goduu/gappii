"use client"
import React, { ChangeEvent, useState, useTransition } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { LoaderCircle, X } from 'lucide-react'
import { transformInputIntoData } from './processTextInput'
import { useCreateActivities } from '@/lib/gqls/useCreateActivities'
import { AutoComplete, Option } from '../ui/autocomplete'
import { CREATE_TOPIC, GET_TOPIC_TITLES, INTROSPECT } from '@/lib/gqls/topicGQLs'
import { useMutation, useQuery } from '@apollo/client'

export const LearnInput = () => {
    const [value, setValue] = useState<string>("")
    const [topic, setTopic] = useState<Option | null>(null)
    const [subTopic, setSubTopic] = useState<Option | null>(null)
    const createActivities = useCreateActivities()
    const [isPending, startTransition] = useTransition()
    const { loading, data, error } = useQuery<{ topics: Array<{ id: string, title: string }> }>(GET_TOPIC_TITLES)
    const { data: intro } = useQuery(INTROSPECT)
    console.log("intro", intro)
    const [createTopic] = useMutation(CREATE_TOPIC)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleCreateNewTopic = (topic: string) => {
        createTopic({
            variables: {
                input: {
                    title: topic
                }
            },
            refetchQueries: [{ query: GET_TOPIC_TITLES }]
        })
    }
    const handleSelectTopic = (option: Option) => {
        if (topic) {
            setSubTopic(option)
        } else {
            setTopic(option)
        }
    }

    const handleClick = async () => {
        const apiData = topic && subTopic && await transformInputIntoData(topic.label, subTopic.label)
        if (apiData) {
            startTransition(() => createActivities(apiData, topic.value, subTopic.value))
        }

    }

    const removeTopic = () => {
        setTopic(null)
    }

    const removeSubTopic = () => {
        setSubTopic(null)
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <div className='flex-col flex gap-1'>
                    <p className='text-sm'>Topic:</p>
                    <Badge variant="outline" className='flex items-center gap-2 h-8'>
                        {topic ?
                            <>
                                {topic.label}
                                <Button size="icon" variant="ghost" onClick={removeTopic} className='w-6 h-6'>
                                    <X className='w-3 text-gray-500' />
                                </Button>
                            </>
                            : <p className='text-gray-300 select-none'>Chose a topic</p>
                        }
                    </Badge>
                </div>
                <div className='flex-col flex gap-1'>
                    <p className='text-sm'>Subtopic:</p>
                    <Badge variant="outline" className='flex items-center gap-2 h-8'>
                        {subTopic ?
                            <>
                                {subTopic.label}
                                <Button size="icon" variant="ghost" onClick={removeSubTopic} className='w-6 h-6'>
                                    <X className='w-3 text-gray-500' />
                                </Button>
                            </>
                            : <p className='text-gray-300 select-none'>Chose a subtopic</p>
                        }
                    </Badge>
                </div>
            </div>
            <div className='flex gap-2'>
                {value}
                <AutoComplete
                    emptyMessage='Empty'
                    options={(data?.topics || []).map<Option>(t => ({ label: t.title, value: t.id }))}
                    isLoading={loading}
                    disabled={topic && subTopic ? true : false}
                    onAddOption={handleCreateNewTopic}
                    onValueChange={handleSelectTopic} />
                {/* <Input value={value} onChange={handleChange} placeholder="What do you want to learn?" /> */}
                <Button onClick={handleClick} disabled={isPending}>{
                    topic && subTopic ? "Let's Learn!" :
                        topic ? "Add Subtopic" :
                            "Add Topic"
                }</Button>
                {isPending && <LoaderCircle className='animation-spin' />}
            </div>
        </div>
    )
}
