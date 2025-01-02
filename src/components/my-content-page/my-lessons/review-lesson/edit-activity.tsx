import { Activity } from '@/ogm-resolver/ogm-types'
import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { GripHorizontal, ListTodo, MessageCircle, MessageCircleQuestion } from 'lucide-react'
import { TooltipIcon } from './tooltip-icon'
import clsx from 'clsx'
import { Checkbox } from '@/components/ui/checkbox'

export type EditActivityProps = {
    activity: Activity
    index: number
    form: UseFormReturn<LessonFormValues>
}

export const EditActivity: FC<EditActivityProps> = ({ activity, index, form }) => {

    return (
        <div className='border rounded-md p-2 px-4 flex items-center gap-3 w-full'>
            <TooltipIcon title='Drag to reorder'>
                <GripHorizontal className='cursor-move text-gray-500' />
            </TooltipIcon>
            <div className='flex flex-col gap-2 w-full items-start'>
                <div className='flex gap-2 items-center'>
                    <TooltipIcon title='Question'>
                        <MessageCircleQuestion />
                    </TooltipIcon>
                    <FormField
                        control={form.control}
                        name={`activities.${index}.description`}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="text-xs sm:text-lg" type="text" value={field.value || ''} onChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex gap-2 items-center'>
                    <TooltipIcon title='Options'>
                        <ListTodo />
                    </TooltipIcon>
                    {activity.options.map((option, optionIndex) => (
                        <div key={`${option}-${optionIndex}`} className='flex gap-2 items-center' >
                            <FormField
                                control={form.control}
                                name={`activities.${index}.answer`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Checkbox 
                                            className="text-xs sm:text-lg h-8 w-8"
                                             checked={option === field.value}
                                                onCheckedChange={() => field.onChange(option)} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`activities.${index}.options.${optionIndex}`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className={clsx(
                                                "text-xs sm:text-lg",
                                                { "text-green-500": field.value === activity.answer }
                                            )
                                            } type="text" value={field.value || ''} onChange={field.onChange} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex gap-2 items-center'>
                    <TooltipIcon title='Comment'>
                        <MessageCircle />
                    </TooltipIcon>
                    <FormField
                        control={form.control}
                        name={`activities.${index}.comment`}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} placeholder="Comment" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
