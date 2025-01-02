import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type EditLessonKeywordProps = {
    index: number
    form: UseFormReturn<LessonFormValues>
}

export const EditLessonKeyword: FC<EditLessonKeywordProps> = ({ index, form }) => {

    return (
        <FormField
            control={form.control}
            name={`keywords.${index}`}
            render={({ field }) => (
                <Input
                    className="text-xs sm:text-lg w-fit"
                    type="text"
                    value={field.value.name || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange({ name: event.target.value, id: field.value.id })}
                />
            )}
        />
    )
}
