import { useState } from 'react'
import { LessonReaction } from './lesson-reactions'
import { Topic } from '@/ogm-resolver/ogm-types'

export type LessonFilter = {
    reaction: LessonReaction
    topic: Topic | null
    subtopic: Topic | null
}

export const useFilter = () => {
    const [filter, setFilter] = useState<LessonFilter>({ reaction: null, topic: null, subtopic: null })
    const setReactionFilter = (reaction: LessonReaction) => setFilter({ ...filter, reaction })
    const setTopicFilter = (topic: Topic) => setFilter({ ...filter, topic })
    const setSubtopicFilter = (subtopic: Topic) => setFilter({ ...filter, subtopic })

    return { filter, setReactionFilter, setTopicFilter, setSubtopicFilter, setFilter }
}