"use client"
import { SearchBar } from "@/components/ui/searchbar"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Disc, SearchCheck } from "lucide-react"
import { CreateLesson } from "./create-lesson"
import { FilterBar } from "./filter-bar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Whisper } from "@/components/ui/tooltip"
export const LessonsActionBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center ml-1">
                <Disc size={12} />
                <span className="text-xs text-muted-foreground">Actions / Filters</span>
            </div>
            <div className={cn(
                "flex gap-2 border p-1  bg-white rounded-lg transition-all duration-300 overflow-hidden",
                isOpen
                    ? "w-80"
                    : "w-60 justify-center items-center"
            )}>
                <div className={cn(
                    "flex gap-2 transition-opacity duration-300 items-center",
                    !isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                )}>
                    <Whisper text="Correct my mistakes" asChild>
                        <Button
                            className=" relative md:ml-auto flex items-center gap-2"
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push('/logged-in/correct-mistakes')}>
                            <SearchCheck />
                        </Button>
                    </Whisper>
                    <CreateLesson />
                    <Separator orientation="vertical" className="h-4" />
                    <FilterBar />
                </div>
                <SearchBar id="lesson" isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}