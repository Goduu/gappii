import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ListTodo } from 'lucide-react'
import React, { FC, useEffect, useState } from 'react'
import { LessonFormValues } from './useLessonForm'
import { UseFormReturn, useWatch } from 'react-hook-form'

type OptionsSectionProps = {
    activity: LessonFormValues['activities'][number]
    index: number
    form: UseFormReturn<LessonFormValues>
}

export const OptionsSection: FC<OptionsSectionProps> = ({ activity, form, index }) => {
    // Track which option index is selected
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(() => {
        return activity.options.findIndex(opt => opt === activity.answer);
    });
    
    // Watch for changes to options and the current answer
    const options = useWatch({
        control: form.control,
        name: `activities.${index}.options`
    });
    
    const answer = useWatch({
        control: form.control,
        name: `activities.${index}.answer`
    });

    // When the answer changes externally, update our selected index
    useEffect(() => {
        const newSelectedIndex = options.findIndex(opt => opt === answer);
        if (newSelectedIndex !== -1) {
            setSelectedOptionIndex(newSelectedIndex);
        }
    }, [answer, options]);

    // Handle option text changes
    const handleOptionChange = (optionIndex: number, newValue: string) => {
        // Update the option value
        form.setValue(`activities.${index}.options.${optionIndex}`, newValue);
        
        // If this is the selected option, update the answer too
        if (optionIndex === selectedOptionIndex) {
            form.setValue(`activities.${index}.answer`, newValue);
        }
    };

    // Handle checkbox changes
    const handleCheckboxChange = (optionIndex: number, optionValue: string) => {
        setSelectedOptionIndex(optionIndex);
        form.setValue(`activities.${index}.answer`, optionValue);
    };

    return (
        <div className="space-y-3 w-full">
            <div className="flex items-center gap-2 text-gray-700">
                <ListTodo className="w-5 h-5" />
                <FormLabel className="text-sm font-medium">Answer Options</FormLabel>
            </div>
            <div className="space-y-3 pl-4">
                {options.map((option, optionIndex) => (
                    <div key={`option-${index}-${optionIndex}`}
                        className="flex items-center gap-3 group">
                        <FormField
                            control={form.control}
                            name={`activities.${index}.answer`}
                            render={() => (
                                <FormItem>
                                    <FormControl>
                                        <Checkbox
                                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            checked={optionIndex === selectedOptionIndex}
                                            onCheckedChange={() => handleCheckboxChange(optionIndex, option)}
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
                                            value={field.value}
                                            onChange={(e) => handleOptionChange(optionIndex, e.target.value)}
                                            onBlur={field.onBlur}
                                            name={field.name}
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
