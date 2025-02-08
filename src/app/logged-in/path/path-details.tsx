'use client'

import { CalendarCheck, CircleFadingArrowUp, MessageCircleQuestion, Plus, SearchCheck, Swords, Target } from "lucide-react"
import { useState } from 'react'

import { cn } from "@/lib/utils"
import { SubtopicsPie } from "./circular-chart"
import { Flower2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PathStone } from "./types"
import { PathLessonStatistics } from "./path-lesson-statistics"
import { Button } from "@/components/ui/button"
import { AddLessonCard } from './add-lesson-card'
import { IconPicker } from "@/components/ui/icon-picker/icon-picker"
import { ColorPicker } from "@/components/ui/color-picker/color-picker"
type PathDetailsProps = {
    path: PathStone
}

export const PathDetails = ({ path }: PathDetailsProps) => {
    if (!path) return null
    const [isAddingLesson, setIsAddingLesson] = useState(false)
    const [selectedIcon, setSelectedIcon] = useState<string>()
    const [selectedColor, setSelectedColor] = useState<string>()

    const handleAddLesson = (lessonId: string) => {
        // Handle adding lesson to path
        console.log('Adding lesson:', lessonId)
        setIsAddingLesson(false)
    }

    return (
        <div className="flex flex-col items-center w-full gap-4 ">

            <IconPicker onSelect={setSelectedIcon} />
            <ColorPicker />
            <div className="w-full ">
                <div className="scale-75 md:scale-100 relative flex flex-col items-center justify-start">
                    <SubtopicsPie
                        outerRadius={90}
                        innerRadius={67}
                        lessons={path.lessons || []}
                    />
                    <div className="absolute mt-28 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={cn(
                            "bg-green-500 rounded-full flex items-center justify-center",
                            "w-32 aspect-square",
                            "border-b-8 border-green-600"
                        )}>
                            <Flower2 className="text-white w-10 h-10 md:w-16 md:h-16" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-start w-full">
                <Button variant="outline">
                    <CircleFadingArrowUp size={16} />
                    Improve Path
                </Button>
                <Button variant="outline">
                    <SearchCheck size={16} />
                    Correct Mistakes
                </Button>
                <Button variant="outline">
                    <Swords size={16} />
                    Test path knowledge
                </Button>
            </div>
            <div className="w-full space-y-4">
                <h3 className="text-lg font-semibold px-4">Lessons Statistics</h3>
                <div className="flex flex-wrap gap-3 px-4">
                    {path.lessons.map((lesson) => (
                        <PathLessonStatistics key={lesson.id} lesson={lesson} />
                    ))}

                    {isAddingLesson ? (
                        <AddLessonCard
                            lessons={path.lessons}
                            onConfirm={handleAddLesson}
                            onCancel={() => setIsAddingLesson(false)}
                            className="border-dashed"
                        />
                    ) : (
                        <div
                            onClick={() => setIsAddingLesson(true)}
                            title="Add Lesson"
                            className="flex flex-col border p-4 border-dashed justify-center items-center w-full rounded-lg hover:bg-slate-50 cursor-pointer"
                        >
                            <Plus size={16} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}