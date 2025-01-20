import React, { FC } from 'react'
import { SupportedLanguage, supportedLanguages } from '@/app/types'
import Image from 'next/image'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

type LanguageSelectorProps = {
    language?: SupportedLanguage,
    onLanguageChange: (language: SupportedLanguage) => void
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
    return (
        <Select
            onValueChange={(value) => onLanguageChange(value as SupportedLanguage)}
            value={language || ''}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {supportedLanguages.map((lang) => (
                        <SelectItem key={lang} value={lang}>
                            <div className='flex gap-2 items-center px-1'>
                                <Image src={`/flags/${getFlag(lang)}.svg`} alt={lang} width={20} height={15} />
                                {lang}
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const getFlag = (language: SupportedLanguage) => {
    if (language === 'pt-br') return 'br'
    if (language === 'es') return 'es'
    if (language === 'fr-fr') return 'fr'
    if (language === 'de') return 'de'
    return "us"
}