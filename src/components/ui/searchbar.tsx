import { ArrowLeft, Search } from 'lucide-react'
import React from 'react'
import { Input } from './input'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn, sanitizeLuceneString } from '@/lib/utils'
import { Toggle } from './toggle'
import { Whisper } from './tooltip'
import { useDetectEsc } from '@/lib/utilitary-hooks/useDetectEsc'

type SearchBarProps = {
    id: string
    placeholder?: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const SearchBar = ({ id, placeholder = "Search...", isOpen, setIsOpen }: SearchBarProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const search = searchParams.get(`${id}Search`)

    useDetectEsc(() => setIsOpen(false))

    const onTextSearchChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        // att to searchParams
        const params = new URLSearchParams(searchParams);

        // if the search term is empty, delete the search param
        if (e.target.value === '') {
            params.delete(`${id}Search`);
        } else {
            const sanitizedSearchTerm = sanitizeLuceneString(e.target.value);
            params.set(`${id}Search`, sanitizedSearchTerm);
        }

        replace(`${pathname}?${params.toString()}`);
    }, 200)

    return (
        <div className={cn(
            "relative flex transition-all duration-300 ease-in-out items-center",
            isOpen && "w-full"
        )}>
            {isOpen ?
                <div className='flex gap-2 items-center w-full'>
                    <Toggle onClick={() => setIsOpen(false)} >
                        <ArrowLeft />
                    </Toggle>
                    <Input
                        className='w-full'
                        placeholder={placeholder}
                        autoFocus
                        onChange={onTextSearchChange}
                        defaultValue={search || ""}
                    />
                </div>
                :
                <Whisper text="Search" asChild>
                    <Toggle
                        onClick={() => setIsOpen(!isOpen)}
                        pressed={!!search}
                        aria-checked={!!search}
                        data-state={search ? "on" : "off"}>
                        <Search />
                    </Toggle>
                </Whisper>
            }
        </div>
    )
}
