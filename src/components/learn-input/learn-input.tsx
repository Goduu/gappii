"use client"
import React, { FC, useState } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { X } from 'lucide-react'
import { transformInputIntoData } from './processTextInput'
import { useCreateActivities } from '@/lib/gqls/useCreateActivities'
import { AutoComplete, Option } from '../ui/autocomplete'
import { CREATE_TOPIC, GET_TOPIC_TITLES, INTROSPECT } from '@/lib/gqls/topicGQLs'
import { useMutation, useQuery } from '@apollo/client'
import { useTransitionContext } from '../loading-store'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { cleanTopic } from './cleanTopic'
import { useToast } from '@/hooks/use-toast'

type LearnInputProps = {
    hideLevel: boolean
}

export const LearnInput: FC<LearnInputProps> = ({ hideLevel }) => {
    const [topic, setTopic] = useState<Option | null>(null)
    const [subTopic, setSubTopic] = useState<Option | null>(null)
    const [level, setLevel] = useState<string>("1")
    const createActivities = useCreateActivities()
    const { loading, data, error } = useQuery<{ topics: Array<{ id: string, title: string }> }>(GET_TOPIC_TITLES)
    const [createTopic] = useMutation(CREATE_TOPIC)
    const { startTransition, isPending } = useTransitionContext()
    const { toast } = useToast()

    const handleCreateNewTopic = (topic: string) => {
        const clearedTopic = cleanTopic(topic)
        if (!clearedTopic) {
            return
        }
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

    const handleError = (error: any) => {
        toast({
            title: "Error",
            description: error.message,
            variant: "destructive"
        })
    }

    const handleClick = async () => {
        startTransition(async () => {
            const apiData = topic && subTopic && await transformInputIntoData(topic.label, subTopic.label, level, handleError)
            if (apiData) {
                createActivities(apiData, topic.value, subTopic.value)
            }
        }
        )

    }

    const removeTopic = () => {
        setTopic(null)
    }

    const removeSubTopic = () => {
        setSubTopic(null)
    }

    return (
        <div className='flex flex-col gap-2 w-full'>
            <div className='flex gap-2 w-full'>
                <div className='flex-col flex gap-1 w-1/2'>
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
                <div className='flex-col flex gap-1 w-1/2'>
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
                {!hideLevel &&
                    <div className='flex-col flex gap-1'>
                        <p className='text-sm'>Level:</p>
                        <ToggleGroup type="single" variant="outline" value={level} onValueChange={setLevel}>
                            <ToggleGroupItem value="1" aria-label="Toggle bold" className='text-xs h-8'>
                                Beg
                            </ToggleGroupItem>
                            <ToggleGroupItem value="2" aria-label="Toggle italic" className='text-xs h-8'>
                                Mid
                            </ToggleGroupItem>
                            <ToggleGroupItem value="3" aria-label="Toggle strikethrough" className='text-xs h-8'>
                                Adv
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                }
            </div>
            <div className='flex gap-2 w-full'>
                <AutoComplete
                    emptyMessage='Empty'
                    className='w-full'
                    options={(data?.topics || []).map<Option>(t => ({ label: t.title, value: t.id }))}
                    isLoading={loading}
                    onAddOption={handleCreateNewTopic}
                    onValueChange={handleSelectTopic} />
            </div>
            <Button onClick={handleClick} disabled={isPending || !topic || !subTopic}>{
                topic && subTopic ? "Let's Learn!" :
                    topic ? "Add Subtopic" :
                        "Add Topic"
            }</Button>
        </div>
    )
}
