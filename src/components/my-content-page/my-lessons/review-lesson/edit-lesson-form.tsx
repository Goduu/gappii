import React, { FC } from 'react'
import { EditActivity } from './edit-activity'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { LessonFormValues, useLessonForm } from './useLessonForm'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AddActivityButton } from './add-activity-button'
import { useFieldArray } from 'react-hook-form'
import { EditLessonKeywords } from './edit-lesson-keywords'

type EditLessonFormProps = {
  lesson: Lesson
}

export const EditLessonForm: FC<EditLessonFormProps> = ({ lesson }) => {
  const { form } = useLessonForm(lesson)
  const { fields: activities, append: appendActivity } = useFieldArray({
    control: form.control,
    name: "activities"
  });

  const onSubmit = (data: LessonFormValues) => {
    console.log(data)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <EditLessonKeywords form={form} />
        {activities.map((activity, index) => (
          <EditActivity
            key={activity.id}
            activity={activity}
            index={index}
            form={form}
          />
        ))}
        <AddActivityButton form={form} appendActivity={appendActivity} />
        <Button type="submit" className='w-40'>Save</Button>
      </form>
    </Form >
  )
}
