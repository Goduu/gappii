import { useState } from 'react'
import { Keyword, Topic } from '@/ogm-resolver/ogm-types'
import { LessonReaction } from '../types'

export type LessonFilter = {
    reaction: LessonReaction
    keywords: Keyword[]
    topic: Topic | null
    subtopic: Topic | null
}

export const useFilter = () => {
    const [filter, setFilter] = useState<LessonFilter>({ reaction: null, topic: null, subtopic: null, keywords: [] })
    const setReactionFilter = (reaction: LessonReaction) => setFilter({ ...filter, reaction })
    const setTopicFilter = (topic: Topic) => setFilter({ ...filter, topic })
    const setSubtopicFilter = (subtopic: Topic) => setFilter({ ...filter, subtopic })
    const setKeywordFilter = (keywords: Keyword[]) => setFilter({ ...filter, keywords })

    return { filter, setReactionFilter, setTopicFilter, setSubtopicFilter, setFilter, setKeywordFilter }
}