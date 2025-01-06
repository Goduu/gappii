"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface ClickableFilterProps {
    text: string
    filterType: "topic" | "subtopic"
}

export const ClickableFilter = ({ text, filterType }: ClickableFilterProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const setFilterSearchParams = (filter: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (filter && value) {
            params.set(filter, value);
        } else {
            params.delete(filter);
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <span 
            className="text-md cursor-pointer" 
            onClick={() => setFilterSearchParams(filterType, text)}
        >
            {text}
        </span>
    )
} 