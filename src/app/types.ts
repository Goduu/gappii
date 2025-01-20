export type SupportedLanguage = 'pt-br' | 'en-us' | 'es' | 'fr-fr' | 'de';

export const supportedLanguages: SupportedLanguage[] = ['en-us', 'pt-br', 'es', 'fr-fr', 'de']

export const languages = {
    "en": "en-us",
    "pt": "pt-br",
    "es": "es",
    "fr": "fr-fr",
    "de": "de"
}

export type CommunitySearchParams = {
    search?: string;
    toggle?: string;
    level?: string;
    language?: string;
}
