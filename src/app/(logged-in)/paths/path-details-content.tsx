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
import { useCreatePath } from "@/lib/mutations/useCreatePath"
import { pathSchema } from "@/app/(logged-in)/paths/path-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"
import { getSafeColor } from "@/lib/type-guards"

type PathDetailsContentProps = {
    path?: Path | null
    lessons: Lesson[]
    mode: 'view' | 'edit'
    onClose?: () => void
}

export const PathDetailsContent = ({ path, lessons, mode = 'edit', onClose }: PathDetailsContentProps) => {
    // State variables
    const [isAddingLesson, setIsAddingLesson] = useState(false)
    const [isEditing, setIsEditing] = useState(mode === 'edit')
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Hooks
    const { toast } = useToast()
    const updatePath = useUpdatePath()
    const createPath = useCreatePath()

    // Apply type check shield for color
    const safeColor = getSafeColor(path?.color, "orange")

    // Form setup
    const form = useForm<PathForm>({
        resolver: zodResolver(pathSchema),
        defaultValues: {
            title: path?.title ?? "",
            color: safeColor,
            icon: path?.icon ?? iconMetadata[0].label
        }
    })
    type PathForm = z.infer<typeof pathSchema>

    // Check if we're in creation mode
    const isCreatingMode = !path?.id

    // Handlers
    const handleSave = async (values: PathForm) => {
        if (!form.formState.isValid) return;

        // Apply type check shield for color before saving
        const safeColor = getSafeColor(values.color, "orange")

        setIsSubmitting(true);
        try {
            if (isCreatingMode) {
                await createPath({
                    title: values.title,
                    color: safeColor,
                    icon: values.icon,
                });
                toast({
                    title: "Path created",
                    description: "Your path has been created successfully"
                });
                onClose?.();
            } else if (path) {
                await updatePath({
                    id: path.id,
                    title: values.title,
                    color: safeColor,
                    icon: values.icon
                });
                toast({
                    title: "Path updated",
                    description: "Your path has been updated successfully"
                });
                setIsEditing(false);
            }
        } catch {
            toast({
                title: "Error",
                description: "There was an error saving your path",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleEditMode = () => setIsEditing(prev => !prev);

    const handleAddLesson = (lessonId: string) => {
        if (!path) return;
        updatePath({ id: path.id }, lessonId);
        setIsAddingLesson(false);
    };

    return (
        <DialogContent className="max-h-screen overflow-y-auto py-16 gap-4">
            <DialogHeader>
                <DialogTitle>
                    <div className="h-10 text-xl font-semibold">
                        {isCreatingMode ? "Create Path" : path?.title}
                    </div>
                </DialogTitle>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
                    {/* Path title input (only shown in edit mode) */}
                    {isEditing && (
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Path Title"
                                            aria-label="Path Title"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Path icon display and edit button */}
                    <div className="relative">
                        {path?.id && (
                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute top-1 right-1"
                                onClick={toggleEditMode}
                                type="button"
                                aria-label={isEditing ? "Save settings" : "Edit settings"}
                            >
                                {isEditing ? <Check /> : <Pencil />}
                            </Button>
                        )}
                        <div className="flex justify-center items-center">
                            <PathCircle
                                path={{
                                    color: form.watch("color"),
                                    icon: form.watch("icon")
                                }}
                                size="lg"
                            />
                        </div>
                    </div>

                    {/* Color and icon pickers (only shown in edit mode) */}
                    {isEditing && (
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <ColorPicker
                                                selectedColor={field.value}
                                                onSelect={field.onChange}
                                                aria-label="Select path color"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="icon"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <IconPicker
                                                selectedIcon={getIconMetadataFromLabel(field.value) || null}
                                                onSelect={(icon) => field.onChange(icon.label)}
                                                aria-label="Select path icon"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    )}

                    {/* Lessons section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            {path && (
                                <h3 className="text-lg font-medium">Lessons</h3>
                            )}
                            <div className="flex flex-wrap gap-3">
                                {/* Display existing lessons */}
                                {path?.withLessons?.map((lesson) => (
                                    <PathLessonStatistics key={lesson.id} lesson={lesson} />
                                ))}

                                {/* Add lesson functionality */}
                                {isAddingLesson ? (
                                    <AddLessonCard
                                        lessons={lessons}
                                        onConfirm={handleAddLesson}
                                        onCancel={() => setIsAddingLesson(false)}
                                        className="border-dashed"
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsAddingLesson(true)}
                                        title="Add Lesson"
                                        aria-label="Add Lesson"
                                        className="flex flex-col border p-4 border-dashed justify-center items-center w-full rounded-lg hover:bg-slate-50 cursor-pointer"
                                    >
                                        <Plus size={16} />
                                        <span className="sr-only">Add Lesson</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Save button (only shown in edit mode) */}
                        {isEditing && (
                            <Button
                                type="submit"
                                disabled={!form.formState.isValid || isSubmitting}
                                className="mt-4"
                            >
                                {isSubmitting ? 'Saving...' : isCreatingMode ? 'Create Path' : 'Save Changes'}
                            </Button>
                        )}
                    </div>
                </form>
            </Form>
        </DialogContent>
    );
};