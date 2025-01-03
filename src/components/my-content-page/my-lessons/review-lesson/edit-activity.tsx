import React, { FC } from 'react';
import { Activity } from '@/ogm-resolver/ogm-types';
import { UseFormReturn } from 'react-hook-form';
import { LessonFormValues } from './useLessonForm';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { GripHorizontal, ListTodo, MessageCircle, MessageCircleQuestion, Trash } from 'lucide-react';
import { TooltipIcon } from './tooltip-icon';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

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
                <Trash  />
            </Button>
            <CardContent className="p-2 md:p-4 lg:p-6">
                <div className="flex items-center gap-1 md:gap-4">
                    <div className="mt-2">
                        <TooltipIcon title="Drag to reorder">
                            <GripHorizontal className="cursor-move text-gray-400 hover:text-gray-600 transition-colors" />
                        </TooltipIcon>
                    </div>

                    <div className="flex-1 space-y-6">
                        {/* Question Section */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                                <MessageCircleQuestion className="w-5 h-5" />
                                <FormLabel className="text-sm font-medium">Question</FormLabel>
                            </div>
                            <FormField
                                control={form.control}
                                name={`activities.${index}.description`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className="text-xs md:text-sm sm:text-base border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                                                placeholder="Enter your question here..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Options Section */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-700">
                                <ListTodo className="w-5 h-5" />
                                <FormLabel className="text-sm font-medium">Answer Options</FormLabel>
                            </div>
                            <div className="space-y-3 pl-7">
                                {activity.options.map((option, optionIndex) => (
                                    <div key={`${option}-${optionIndex}`}
                                        className="flex items-center gap-3 group">
                                        <FormField
                                            control={form.control}
                                            name={`activities.${index}.answer`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Checkbox
                                                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            checked={option === field.value}
                                                            onCheckedChange={() => field.onChange(option)}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={`activities.${index}.options.${optionIndex}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormControl>
                                                        <Input
                                                            className={`text-xs md:text-sm sm:text-base border-gray-200 focus:border-blue-400 focus:ring-blue-400
                                                                ${field.value === activity.answer ? 'text-green-600 font-medium' : ''}
                                                            `}
                                                            placeholder={`Option ${optionIndex + 1}`}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comment Section */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-700">
                                <MessageCircle className="w-5 h-5" />
                                <FormLabel className="text-sm font-medium">Additional Comment</FormLabel>
                            </div>
                            <FormField
                                control={form.control}
                                name={`activities.${index}.comment`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className="text-xs md:text-sm sm:text-base border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                                                placeholder="Add any additional comments here..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EditActivity;