import React from 'react';
import Image from 'next/image';
import { Tooltip } from './tooltip';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { SupportedLanguage } from '@/app/types';
import clsx from 'clsx';

export const LanguageCorner: React.FC<LanguageCornerProps> = ({
    language,
    className
}) => {
    const countryCode = languageToCountry[language.toLowerCase() as SupportedLanguage];

    if (!countryCode) {
        console.warn(`Unsupported language code: ${language}`);
        return null;
    }

    return (
        <Tooltip >
            <TooltipTrigger className={clsx(
                'absolute bg-gray-100 h-4 w-6 rounded-br-md shadow-sm overflow-hidden place-content-stretch',
                className
            )}>
                <Image
                    src={`/flags/${countryCode}.svg`}
                    alt={`${language} flag`}
                    width={16}
                    height={12}
                    className="h-full w-full object-cover"
                />
            </TooltipTrigger>
            <TooltipContent>
                {languageToText[language]}
            </TooltipContent>
        </Tooltip>
    );
};

// types.ts

export interface LanguageCornerProps {
    language: SupportedLanguage;
    className?: string;
}

// languageUtils.ts
export const languageToCountry: Record<SupportedLanguage, string> = {
    'pt-br': 'br',
    'en-us': 'us',
    'es': 'es',
    'fr-fr': 'fr',
    'de': 'de',
};

export const languageToText: Record<SupportedLanguage, string> = {
    'pt-br': 'Português',
    'en-us': 'English',
    'es': 'Español',
    'fr-fr': 'Français',
    'de': 'Deutsch',
};
