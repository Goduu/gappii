'use client'

import { CircleFadingArrowUp, Plus, SearchCheck, Swords } from "lucide-react"
import { useState } from 'react'

import { SubtopicsPie } from "./circular-chart"
import { PathLessonStatistics } from "./path-lesson-statistics"
import { Button } from "@/components/ui/button"
import { AddLessonCard } from './add-lesson-card'
import { Lesson, MutationUpdatePathsArgs, Path } from "@/ogm-types"
import { useMutation } from "@apollo/client"
import { UPDATE_PATH } from "@/lib/gqls/pathGQL"
import { PathEditFormDialog } from "./path-edit-form-dialog"
import { PathCircle } from "./path-circle"

type PathDetailsProps = {
    path: Path | null
    lessons: Lesson[]
}

export const PathDetails = ({ path, lessons }: PathDetailsProps) => {
    const [isAddingLesson, setIsAddingLesson] = useState(false)

    const [updatePath] = useMutation(UPDATE_PATH)

    const handleAddLesson = (lessonId: string) => {
        if (!path) return
        updatePath({
            variables: {
                where: {
                    id: path.id
                },
                update: {
                    withLessons: [{ connect: [{ where: { node: { id: lessonId } } }] }]
                }
            } satisfies MutationUpdatePathsArgs
        })
        setIsAddingLesson(false)
    }

    if (!path) return null

    return (
        <div className="flex flex-col items-center w-full gap-4">
            <div className="w-full">
                <PathEditFormDialog path={path}>
                    <div className="relative scale-75 md:scale-100 flex flex-col items-center justify-start">
                        <PathCircle path={path} isSelected={true} size="lg" />
                        <div className="absolute mt-[4.85rem] left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <SubtopicsPie
                                size="lg"
                                lessons={path.withLessons || []}
                            />
                        </div>
                    </div>
                </PathEditFormDialog>
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
                <h3 className="text-lg font-semibold">Lessons Statistics</h3>
                <div className="flex flex-wrap gap-3">
                    {path.withLessons.map((lesson) => (
                        <PathLessonStatistics key={lesson.id} lesson={lesson} />
                    ))}

                    {isAddingLesson ? (
                        <AddLessonCard
                            lessons={lessons}
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