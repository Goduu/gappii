export type SupportedLanguage = 'pt-br' | 'en-us' | 'es' | 'fr-fr' | 'de';

export const supportedLanguages: SupportedLanguage[] = ['en-us', 'pt-br', 'es', 'fr-fr', 'de']

export const languages: { [key: string]: SupportedLanguage } = {
    "en": "en-us",
    "pt": "pt-br",
    "es": "es",
    "fr": "fr-fr",
    "de": "de"
}

export type CommunitySearchParams = {
    lessonSearch?: string;
    toggle?: string;
    level?: string;
    language?: string;
}
