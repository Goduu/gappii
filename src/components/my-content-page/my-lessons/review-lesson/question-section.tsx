import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { MessageCircleQuestion } from 'lucide-react'
import React, { FC } from 'react'
import { LessonFormValues } from './useLessonForm'
import { UseFormReturn } from 'react-hook-form'

type QuestionSectionProps = {
    form: UseFormReturn<LessonFormValues>
    index: number
}

export const QuestionSection: FC<QuestionSectionProps> = ({ form, index }) => {
    return (
        <div className="space-y-2 min-w-80">
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
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}
