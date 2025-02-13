'use client'

import React, { useState } from 'react'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Lesson } from '@/ogm-types'

interface AddLessonCardProps {
    lessons: Partial<Lesson>[]
    onConfirm: (lessonId: string) => void
    onCancel: () => void
    className?: string
}

export const AddLessonCard = ({ lessons, onConfirm, onCancel, className }: AddLessonCardProps) => {
    const [search, setSearch] = useState('')
    const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

    const filteredLessons = lessons.filter(lesson => 
        lesson.title?.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5) // Limit to 5 results

    return (
        <div className={cn(
            "flex flex-col gap-4 p-4 w-full bg-white rounded-lg shadow-lg border transition-all",
            "min-w-[300px]",
            className
        )}>
            <Input
                autoFocus
                placeholder="Search lessons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
            />

            {/* Search Results */}
            <div className="flex flex-col gap-2 h-20 overflow-y-auto">
                {filteredLessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        onClick={() => setSelectedLesson(lesson.id!)}
                        className={cn(
                            "p-2 rounded cursor-pointer hover:bg-slate-50 transition-colors",
                            selectedLesson === lesson.id && "bg-slate-100"
                        )}
                    >
                        {lesson.title}
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-auto">
                <Button
                    size="sm"
                    variant="ghost"
                    title='Cancel'
                    onClick={onCancel}
                >
                    <X className="h-4 w-4" />
                </Button>
                <Button
                    size="sm"
                    variant="ghost"
                    title='Add Lesson'
                    onClick={() => selectedLesson && onConfirm(selectedLesson)}
                    disabled={!selectedLesson}
                >
                    <Check className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
} 