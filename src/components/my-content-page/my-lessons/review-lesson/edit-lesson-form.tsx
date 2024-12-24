import React, { FC } from 'react'
import { EditActivity } from './edit-activity'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { useLessonForm } from './useLessonForm'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

type EditLessonFormProps = {
  lesson: Lesson
}

export const EditLessonForm: FC<EditLessonFormProps> = ({ lesson }) => {
  const { form } = useLessonForm(lesson)

  return (
    <Form {...form}>
      <div className='flex flex-col items-start gap-4 w-full'>
        {lesson.hasActivities.map((activity, index) => (
          <EditActivity
            key={activity.id}
            activity={activity}
            index={index}
            form={form}
          />
        ))}
        <div className='flex-col border rounded-md p-2 px-4 flex items-center gap-3 w-full cursor-pointer'>
           <Plus />
        </div>
      </div>
      <Button type="submit" className='w-40'>Save</Button>
    </Form>
  )
}
