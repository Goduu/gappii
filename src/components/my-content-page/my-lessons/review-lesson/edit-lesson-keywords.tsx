import React, { FC } from 'react'
import { useFieldArray, UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { KeyRound, Plus } from 'lucide-react'
import { EditLessonKeyword } from './edit-lesson-keyword'
import { Button } from '@/components/ui/button'

type EditLessonKeyWordsProps = {
  form: UseFormReturn<LessonFormValues>
}

export const EditLessonKeywords: FC<EditLessonKeyWordsProps> = ({ form }) => {

  const { fields: keywords, append: appendKeyword, update } = useFieldArray({
    control: form.control,
    name: "keywords"
  })

  return (
    <div className='flex flex-col items-start gap-4 '>
      <div className='flex items-center gap-1  flex-wrap '>
        <KeyRound />
        {keywords.map((keyword, index) => (
          <EditLessonKeyword key={keyword.id} form={form} index={index} />
        )
        )}

        <Button
          type="button"
          variant="outline"
          size="icon"
          className='flex-col border rounded-md flex items-center cursor-pointer'
          onClick={() => appendKeyword({ id: crypto.randomUUID(), name: "" })}>
          <Plus />
        </Button>
      </div>
    </div>
  )
}
