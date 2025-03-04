import React, { FC } from 'react'
import { SupportedLanguage, supportedLanguages } from '@/app/types'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { FlagOff, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Whisper } from '../ui/tooltip'

type LanguageSelectorProps = {
    language?: SupportedLanguage,
    allowAll?: boolean,
    onLanguageChange: (language: SupportedLanguage | undefined) => void
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ language, onLanguageChange, allowAll = true }) => {
    // Get language code for display (e.g., "EN" for "en-us")
    const getLanguageCode = (lang: string | undefined): string => {
        if (!lang) return '';
        return lang.split('-')[0].toUpperCase();
    };

    return (
        <Popover>
            <Whisper text="Filter: Language" asChild>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "flex items-center justify-center size-10 aspect-square relative",
                            !!language && allowAll && "bg-accent"
                        )}
                    >
                        <Globe className="size-4" />
                        {language && (
                            <span className="absolute bottom-1 right-1 text-[8px] font-semibold">
                                {getLanguageCode(language)}
                            </span>
                        )}
                    </Button>
                </PopoverTrigger>
            </Whisper>
            <PopoverContent className="w-auto p-2">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium mb-1">Select Language</p>
                    <div className="grid grid-cols-2 gap-2">
                        {supportedLanguages.map((lang) => (
                            <Button
                                key={lang}
                                variant={language === lang ? "default" : "outline"}
                                size="sm"
                                className={cn("flex items-center gap-2 justify-start",
                                    language === lang && "bg-primary text-primary-foreground"
                                )}
                                onClick={() => onLanguageChange(lang)}
                            >
                                <Image src={`/flags/${getFlag(lang)}.svg`} alt={lang} width={20} height={15} />
                                <span>{lang}</span>
                            </Button>
                        ))}
                        {allowAll && (
                            <Button
                                variant={!language ? "default" : "outline"}
                                size="sm"
                            className={cn("flex items-center gap-2 justify-start",
                                !language && "bg-primary text-primary-foreground"
                            )}
                            onClick={() => onLanguageChange(undefined)}
                        >
                            <FlagOff className="size-4" />
                            <span>All</span>
                        </Button>
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

const getFlag = (language: SupportedLanguage) => {
    if (language === 'pt-br') return 'br'
    if (language === 'es') return 'es'
    if (language === 'fr-fr') return 'fr'
    if (language === 'de') return 'de'
    return "us"
}