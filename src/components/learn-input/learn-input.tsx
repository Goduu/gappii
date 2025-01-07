"use client"
import { FC } from 'react'
import { Button } from '../ui/button'
import { AutoComplete } from '../ui/autocomplete'
import { TopicSelector } from './topic-selector'
import { SubTopicSelector } from './subtopic-selector'
import { LevelSelector } from './level-selector'
import { useLearnInput } from './use-learn-input'
import { LearnInputProps } from './types'

export const LearnInput: FC<LearnInputProps> = ({ initialTopic, hideLevel = false }) => {
    const {
        topic,
        subTopic,
        level,
        loading,
        isPending,
        topicOptions,
        autocompleteRef,
        setTopic,
        setSubTopic,
        setLevel,
        handleCreateNewTopic,
        handleSelectTopic,
        handleSubmit
    } = useLearnInput(initialTopic)

    const handleClickOnEmpty = () => {
        if (!topic || !subTopic) {
            autocompleteRef.current?.focus()
            autocompleteRef.current?.click()
        }
    }

    return (
        <div className='flex flex-col gap-2 w-full'>
            <div className='flex gap-2 w-full'>
                <TopicSelector 
                    topic={topic} 
                    onRemove={() => setTopic(null)} 
                    onClick={handleClickOnEmpty} 
                />
                <SubTopicSelector 
                    subTopic={subTopic} 
                    onRemove={() => setSubTopic(null)} 
                    onClick={handleClickOnEmpty} 
                />
                {!hideLevel && (
                    <LevelSelector 
                        level={level} 
                        onLevelChange={setLevel} 
                    />
                )}
            </div>
            <div className='flex gap-2 w-full'>
                <AutoComplete
                    inputRef={autocompleteRef}
                    emptyMessage='Empty'
                    className='w-full'
                    options={topicOptions}
                    isLoading={loading}
                    onAddOption={handleCreateNewTopic}
                    onValueChange={handleSelectTopic}
                />
            </div>
            <Button 
                onClick={handleSubmit} 
                disabled={isPending || !topic || !subTopic}
            >
                {topic && subTopic ? "Let's Learn!" :
                    topic ? "Add Subtopic" : "Add Topic"} {isPending && "isPending"}
            </Button>
        </div>
    )
}
