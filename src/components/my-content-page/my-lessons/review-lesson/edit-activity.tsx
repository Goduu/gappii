import React, { FC } from 'react';
import { Activity } from '@/ogm-resolver/ogm-types';
import { UseFormReturn } from 'react-hook-form';
import { LessonFormValues } from './useLessonForm';
import { Card, CardContent } from '@/components/ui/card';
import { GripHorizontal, Trash } from 'lucide-react';
import { TooltipIcon } from './tooltip-icon';
import { Button } from '@/components/ui/button';
import { OptionsSection } from './options-section';
import { QuestionSection } from './question-section';
import { CommentSection } from './comment-section';

export type EditActivityProps = {
    activity: Activity;
    index: number;
    form: UseFormReturn<LessonFormValues>;
    removeActivity: () => void;
};

export const EditActivity: FC<EditActivityProps> = ({ activity, index, form, removeActivity }) => {
    return (
        <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200 relative">
            <Button size="icon" variant="ghost" onClick={removeActivity} className="absolute top-0 right-0">
                <Trash />
            </Button>
            <CardContent className="p-2 md:p-4 lg:p-6">
                <div className="flex items-center gap-1 md:gap-4">
                    <div className="mt-2">
                        <TooltipIcon title="Drag to reorder">
                            <GripHorizontal className="cursor-move text-gray-400 hover:text-gray-600 transition-colors" />
                        </TooltipIcon>
                    </div>

                    <div className="flex-1 space-y-6">
                        <QuestionSection index={index} form={form} />

                        <OptionsSection activity={activity} index={index} form={form} />

                        <CommentSection index={index} form={form} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EditActivity;