'use client'

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { iconMetadata, IconMetadata } from "./icon-list"
import { useState } from "react"
import { cn } from "@/lib/utils"

type IconPickerProps = {
    selectedIcon: IconMetadata | null
    onSelect: (icon: IconMetadata) => void
}

export function IconPicker({ selectedIcon, onSelect }: IconPickerProps) {
    const [search, setSearch] = useState<string>("")
    const parentRef = useRef<HTMLDivElement>(null)

    const filteredIcons = search === "" ? iconMetadata : iconMetadata.filter(({ relatedTerms }) => {
        return relatedTerms.some((term) => term.toLowerCase().includes(search.toLowerCase()))
    })

    return (
        <div className="p-4 flex flex-col gap-4">
            <Input
                id="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search icons..."
            />
            <div ref={parentRef} className="h-20 overflow-auto">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {filteredIcons.map((iconMetadata) => {
                        return (
                            <Button
                                key={iconMetadata.label}
                                variant="outline"
                                size="icon"
                                type="button"
                                className={cn(
                                    "w-8 h-8",
                                    selectedIcon?.label === iconMetadata.label && "shadow-md bg-accent"
                                )}
                                onClick={() => onSelect(iconMetadata)}
                            >
                                {iconMetadata.icon}
                            </Button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}