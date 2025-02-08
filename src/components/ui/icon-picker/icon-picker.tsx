'use client'

import { useRef } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BoxSelectIcon, LucideIcon } from "lucide-react"
import { iconMetadata } from "./icon-list"
import { useState } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"

type IconPickerProps = {
    onSelect: (icon: LucideIcon) => void
}

export function IconPicker({ onSelect }: IconPickerProps) {
    const [search, setSearch] = useState<string>("")
    const parentRef = useRef<HTMLDivElement>(null)

    const filteredIcons = search === "" ? iconMetadata : iconMetadata.filter(({ relatedTerms }) => {
        return relatedTerms.some((term) => term.toLowerCase().includes(search.toLowerCase()))
    })

    return (
        <Card className="shadow-none">
            <CardHeader hidden className="border-b">
                <CardTitle>Icon Picker</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <Input
                    id="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search icons..."
                    className="mb-4 h-8"
                />
                <div
                    ref={parentRef}
                    className="h-20 overflow-auto"
                >
                    <div
                        className="flex flex-wrap gap-2"
                    >
                        {filteredIcons.map(({ icon, label }, index) => {
                            return (
                                <Button
                                    key={label}
                                    variant="outline"
                                    size="icon"
                                    className="w-8 h-8"
                                >
                                    {icon}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}