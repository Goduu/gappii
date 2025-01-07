import { Topic } from '@/ogm-resolver/ogm-types'
import { Option } from '../ui/autocomplete'

export interface LearnInputProps {
    initialTopic?: Topic
    hideLevel?: boolean
}

export interface TopicSelectorProps {
    topic: Option | null
    onRemove: () => void
    onClick: () => void
}

export interface SubTopicSelectorProps {
    subTopic: Option | null
    onRemove: () => void
    onClick: () => void
}

export interface LevelSelectorProps {
    level: string
    onLevelChange: (level: string) => void
} 