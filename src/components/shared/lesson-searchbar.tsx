import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const LessonSearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const onTextSearchChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        // att to searchParams
        const params = new URLSearchParams(searchParams);

        // if the search term is empty, delete the search param
        if (e.target.value === '') {
            params.delete('search');
        } else {
            params.set('search', e.target.value);
        }

        replace(`${pathname}?${params.toString()}`);
    }, 200)

    return (
        <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
                placeholder="Search lessons..."
                className="pl-10"
                onChange={onTextSearchChange}
            />
        </div>
    )
}
