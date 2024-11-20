"use client"
import React, { ChangeEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { X } from 'lucide-react'
import { transformInputIntoData } from './processTextInput'
import { useCreateActivities } from '@/lib/gqls/useCreateActivities'

export const LearnInput = () => {
    const [value, setValue] = useState<string>("")
    const [topic, setTopic] = useState<string | null>(null)
    const [subTopic, setSubTopic] = useState<string | null>(null)
    const createActivities = useCreateActivities()


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClick = async () => {
        const apiData = topic && subTopic && await transformInputIntoData(topic, subTopic)
        if(apiData){
            createActivities(apiData)
        }

        if (topic) {
            setSubTopic(value)
            setValue("")
        } else {
            setTopic(value)
            setValue("")
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
                                {topic}
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
                                {subTopic}
                                <Button size="icon" variant="ghost" onClick={removeSubTopic} className='w-6 h-6'>
                                    <X className='w-3 text-gray-500' />
                                </Button>
                            </>
                            : <p className='text-gray-300 select-none'>Chose a subtopic</p>
                        }
                    </Badge>
                </div>
            </div>
            <div className='flex'>
                <Input value={value} onChange={handleChange} placeholder="What do you want to learn?" />
                <Button onClick={handleClick}>{
                    topic && subTopic ? "Let's Learn!" :
                        topic ? "Add Subtopic" :
                            "Add Topic"
                }</Button>
            </div>
        </div>
    )
}
