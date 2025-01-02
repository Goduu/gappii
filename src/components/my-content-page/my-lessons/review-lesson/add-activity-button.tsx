// add-activity-button.tsx
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { UseFieldArrayAppend, UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { FC } from 'react'

type AddActivityButtonProps = {
    form: UseFormReturn<LessonFormValues>
    appendActivity: UseFieldArrayAppend<LessonFormValues, "activities">
}

export const AddActivityButton: FC<AddActivityButtonProps> = ({ form, appendActivity }) => {

    return (
        <Button
            type="button"
            variant="outline"
            className='flex-col border rounded-md p-2 px-4 flex items-center gap-3 w-full cursor-pointer'
            onClick={() => appendActivity({
                id: crypto.randomUUID(),
                description: '',
                options: ['', ''],
                answer: '',
                comment: ''
            })}
        >
            <Plus />
        </Button>
    )
}