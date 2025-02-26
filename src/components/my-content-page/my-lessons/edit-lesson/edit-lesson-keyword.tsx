import React, { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type EditLessonKeywordProps = {
    index: number
    form: UseFormReturn<LessonFormValues>
    removeKeyword: () => void
}

export const EditLessonKeyword: FC<EditLessonKeywordProps> = ({ index, form, removeKeyword }) => {

    return (
        <FormField
            control={form.control}
            name={`keywords.${index}`}
            render={({ field }) => (
                <Input
                    className="text-xs sm:text-md w-32"
                    type="text"
                    value={field.value.name || ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange({ name: event.target.value, id: field.value.id })}
                    onBlur={() => field.value.name === "" && removeKeyword()}
                />
            )}
        />
    )
}
