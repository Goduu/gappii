import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { MessageCircle } from 'lucide-react'
import React, { FC } from 'react'

type CommentSectionProps = {
    form: any
    index: number
}

export const CommentSection: FC<CommentSectionProps> = ({ form, index }) => {
    return (
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
    )
}
