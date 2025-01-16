import { AutocompleteOption } from '../ui/autocomplete'
import { SupportedLanguage } from '@/app/types'

export interface TopicSelectorProps {
    topic: AutocompleteOption | null
    onRemove: () => void
    onClick: () => void
}

export interface SubTopicSelectorProps {
    subTopic: AutocompleteOption | null
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