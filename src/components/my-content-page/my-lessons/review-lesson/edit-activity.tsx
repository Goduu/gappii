import { Activity } from '@/ogm-resolver/ogm-types'
import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { GripHorizontal } from 'lucide-react'

export type EditActivityProps = {
    activity: Activity
    index: number
    form: UseFormReturn<LessonFormValues>
}

export const EditActivity: FC<EditActivityProps> = ({ activity, index, form }) => {

    return (
        <div className='border rounded-md p-2 px-4 flex items-center gap-3 w-full'>
            <GripHorizontal className='cursor-move' />
            <div className='flex flex-col gap-2 w-full items-start'>
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

                <div className='flex gap-4'>
                    {activity.options.map((option, optionIndex) => (
                        <FormField
                            key={`${option}-${optionIndex}`}
                            control={form.control}
                            name={`activities.${index}.options.${optionIndex}`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className="text-xs sm:text-lg" type="text" value={field.value || ''} onChange={field.onChange} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
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
    )
}
