import React, { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { LessonFormValues } from './useLessonForm';
import { Card, CardContent } from '@/components/ui/card';
import { GripHorizontal, Trash, ChevronUp, ChevronDown } from 'lucide-react';
import { TooltipIcon } from './tooltip-icon';
import { Button } from '@/components/ui/button';
import { OptionsSection } from './options-section';
import { QuestionSection } from './question-section';
import { CommentSection } from './comment-section';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ActivityImage } from '@/components/activity-card/activity-image';
import { FormControl, FormField, FormItem } from '@/components/ui/form';

export type EditActivityProps = {
    activity: LessonFormValues['activities'][number];
    index: number;
    form: UseFormReturn<LessonFormValues>;
    removeActivity: () => void;
    onMoveUp?: () => void;
    onMoveDown?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
};

export const EditActivity: FC<EditActivityProps> = ({
    activity,
    index,
    form,
    removeActivity,
    onMoveUp,
    onMoveDown,
    isFirst,
    isLast
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        setActivatorNodeRef,
        transition,
    } = useSortable({ id: activity.order });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Card
            className="w-full mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-200 relative"
            ref={setNodeRef}
            style={style}
        >
            <Button
                size="icon"
                variant="ghost"
                onClick={removeActivity}
                className="absolute top-2 right-2 z-10"
            >
                <Trash className="h-4 w-4" />
            </Button>

            <CardContent className="p-4">
                <div className="flex gap-4">
                    {/* Mobile Order Controls */}
                    <div className="flex md:hidden items-center">
                        <div className='flex flex-col gap-0.5'>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={onMoveUp}
                                disabled={isFirst}
                                className="h-6 w-6"
                            >
                                <ChevronUp className="h-4 w-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={onMoveDown}
                                disabled={isLast}
                                className="h-6 w-6"
                            >
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    {/* Desktop Drag Handle */}
                    <div
                        className="hidden md:flex items-center"
                        ref={setActivatorNodeRef}
                        {...listeners}
                        {...attributes}
                    >
                        <TooltipIcon title="Drag to reorder">
                            <GripHorizontal className="cursor-move text-gray-400 hover:text-gray-600 transition-colors" />
                        </TooltipIcon>
                    </div>

                    <div className="flex-1 space-y-4 max-w-full overflow-hidden">
                        <QuestionSection index={index} form={form} />

                        <FormField
                            control={form.control}
                            name={`activities.${index}.mermaid`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <ActivityImage
                                            diagram={activity.mermaid}
                                            isEditingMode
                                            onDiagramChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <OptionsSection activity={activity} index={index} form={form} />
                            <CommentSection index={index} form={form} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EditActivity;