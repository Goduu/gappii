import { SupportedLanguage } from '@/app/types'
import { Option } from '../ui/autocomplete'

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
    level?: string
    onLevelChange: (level: string) => void
}

export interface LanguageSelectorProps {
    language?: SupportedLanguage
    onLanguageChange: (language: SupportedLanguage) => void
}