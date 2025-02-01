import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ListTodo } from 'lucide-react'
import React, { FC } from 'react'
import { LessonFormValues } from './useLessonForm'
import { UseFormReturn } from 'react-hook-form'

type OptionsSectionProps = {
    activity: LessonFormValues['activities'][number]
    index: number
    form: UseFormReturn<LessonFormValues>
}

export const OptionsSection: FC<OptionsSectionProps> = ({ activity, form, index }) => {
    return (
        <div className="space-y-3 w-full">
            <div className="flex items-center gap-2 text-gray-700">
                <ListTodo className="w-5 h-5" />
                <FormLabel className="text-sm font-medium">Answer Options</FormLabel>
            </div>
            <div className="space-y-3 pl-4">
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
                                            checked={option === field.value && field.value !== ''}
                                            onCheckedChange={() => { console.log(option); field.onChange(option) }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`activities.${index}.options.${optionIndex}`}
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="text-xs md:text-sm sm:text-base border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                                            placeholder={`Option ${optionIndex + 1}`}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
