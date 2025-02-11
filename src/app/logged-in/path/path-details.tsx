'use client'

import {  CircleFadingArrowUp, Plus, SearchCheck, Swords } from "lucide-react"
import { useState } from 'react'

import { SubtopicsPie } from "./circular-chart"
import { PathStone } from "./types"
import { PathLessonStatistics } from "./path-lesson-statistics"
import { Button } from "@/components/ui/button"
import { AddLessonCard } from './add-lesson-card'
import { PathCustomizerDialog } from "./path-customizer"
type PathDetailsProps = {
    path: PathStone
}

export const PathDetails = ({ path }: PathDetailsProps) => {
    if (!path) return null
    const [isAddingLesson, setIsAddingLesson] = useState(false)

    const handleAddLesson = (lessonId: string) => {
        // Handle adding lesson to path
        console.log('Adding lesson:', lessonId)
        setIsAddingLesson(false)
    }

    return (
        <div className="flex flex-col items-center w-full gap-4 ">
            <div className="w-full ">
                <div className="scale-75 md:scale-100 relative flex flex-col items-center justify-start">
                    <SubtopicsPie
                        outerRadius={90}
                        innerRadius={67}
                        lessons={path.lessons || []}
                    />
                    <div className="absolute mt-28 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <PathCustomizerDialog path={path} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-start w-full">
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