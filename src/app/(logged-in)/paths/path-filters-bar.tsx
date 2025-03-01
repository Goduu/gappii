"use client"
import { SearchBar } from "@/components/ui/searchbar"
import { FilterButtons } from "./path-filter-buttons"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Disc } from "lucide-react"
import { PathDetailsDialog } from "./path-details-dialog"

export const PathFilterBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center ml-1">
                <Disc size={12} />
                <span className="text-xs text-muted-foreground">Actions</span>
            </div>
            <div className={cn(
                "flex gap-2 border p-1  bg-white rounded-lg transition-all duration-300 overflow-hidden",
                isOpen
                    ? "w-80"
                    : "w-36 justify-center items-center"
            )}>
                <div className={cn(
                    "flex gap-2 transition-opacity duration-300 h-10 items-center",
                    !isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                )}>
                    <PathDetailsDialog mode="edit" />
                    <Separator orientation="vertical" />
                    <FilterButtons />
                </div>
                <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}