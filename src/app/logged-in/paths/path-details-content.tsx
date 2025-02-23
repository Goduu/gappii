import { DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog"
import { PathLessonStatistics } from "./path-lesson-statistics"
import { AddLessonCard } from "./add-lesson-card"
import { Check, Pencil, Plus } from "lucide-react"
import { Lesson, Path } from "@/ogm-types"
import { useState } from "react"
import { useUpdatePath } from "@/lib/mutations/useUpdatePath"
import { PathCircle } from "./path-circle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ColorPicker } from "@/components/ui/color-picker/color-picker"
import { IconPicker } from "@/components/ui/icon-picker/icon-picker"
import { getIconMetadataFromLabel, iconMetadata } from "@/components/ui/icon-picker/icon-list"
import { useTransitionContext } from "@/components/loading-store"
import { useCreatePath } from "@/lib/mutations/useCreatePath"

type PathDetailsContentProps = {
    path?: Path | null
    lessons: Lesson[]
    mode: 'view' | 'edit'
    onClose?: () => void
}

export const PathDetailsContent = ({ path, lessons, mode = 'edit', onClose }: PathDetailsContentProps) => {
    const [isAddingLesson, setIsAddingLesson] = useState(false)
    const [isEditing, setIsEditing] = useState(mode === 'edit')
    const [title, setTitle] = useState(path?.title ?? "")
    const [color, setColor] = useState(path?.color ?? "amber")
    const [icon, setIcon] = useState(path?.icon ? getIconMetadataFromLabel(path.icon) : iconMetadata[0])

    const updatePath = useUpdatePath()
    const createPath = useCreatePath()
    const { startTransition } = useTransitionContext()

    const handleSave = () => {
        if (!title || !color || !icon) return

        startTransition(async () => {
            if (!isEditing) {
                await createPath({
                    title,
                    color,
                    icon: icon.label,
                })
                onClose?.()
            } else if (path) {
                await updatePath({
                    id: path.id,
                    title,
                    color,
                    icon: icon.label
                })
                setIsEditing(false)
            }
        })
    }

    return (
        <DialogContent className="max-h-screen overflow-scroll py-16 gap-4">
            <DialogHeader>
                <DialogTitle>
                    <div className="h-10">
                        {path?.title || "Create Path"}
                    </div>
                    {isEditing && (
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Path Title"
                        />
                    )}
                </DialogTitle>
            </DialogHeader>
            <div className="relative">
                {path?.id && (
                    <Button variant="outline" size="icon"
                        className="absolute top-1 right-1"
                        onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? <Check /> : <Pencil />}
                    </Button>
                )}
                <div className="flex justify-center items-center">
                    <PathCircle
                        path={{ color, icon: icon?.label }}
                        isSelected={false}
                        size="lg"
                    />
                </div>
            </div>
            {isEditing && (
                <div className="flex flex-col gap-4">
                    <ColorPicker
                        selectedColor={color}
                        onSelect={setColor}
                    />
                    <IconPicker
                        selectedIcon={icon ?? null}
                        onSelect={setIcon}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-3">
                        {path && path?.withLessons?.map((lesson) => (
                            <PathLessonStatistics key={lesson.id} lesson={lesson} />
                        ))}
                        {isAddingLesson ? (
                            <AddLessonCard
                                lessons={lessons}
                                onConfirm={(lessonId) => {
                                    if (!path) return
                                    updatePath({ id: path.id }, lessonId)
                                    setIsAddingLesson(false)
                                }}
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
                <Button onClick={handleSave}>
                    {isEditing || path?.id ? 'Save Changes' : 'Create Path'}
                </Button>
            </div>
        </DialogContent>
    )
}