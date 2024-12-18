import React, { FC } from 'react'
import { EditActivity } from './edit-activity'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { useLessonForm } from './useLessonForm'
import { Form } from '@/components/ui/form'

type EditLessonFormProps = {
  lesson: Lesson
}

export const EditLessonForm: FC<EditLessonFormProps> = ({ lesson }) => {
  const { form } = useLessonForm(lesson)
  
  const formValues = form.watch()

  return (
    <Form {...form}>
      <div className='flex flex-col items-center gap-4 w-full'>
        {lesson.hasActivities.map((activity, index) => (
          <EditActivity
            key={activity.id}
            activity={activity}
            index={index}
            form={form}
          />
        ))}
      </div>
    </Form>
  )
}
