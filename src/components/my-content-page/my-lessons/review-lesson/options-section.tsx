import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Activity } from '@/ogm-resolver/ogm-types'
import { ListTodo } from 'lucide-react'
import React, { FC } from 'react'

type OptionsSectionProps = {
    activity: Activity
    index: number
    form: any
}

export const OptionsSection: FC<OptionsSectionProps> = ({ activity, form, index }) => {
    return (
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
    )
}
