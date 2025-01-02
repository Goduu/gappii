import React, { FC } from 'react'
import { EditActivity } from './edit-activity'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { LessonFormValues, useLessonForm } from './useLessonForm'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { KeyRound, Plus } from 'lucide-react'
import { EditKeyword } from './edit-keyword'
import { AddActivityButton } from './add-activity-button'
import { useFieldArray } from 'react-hook-form'

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
    // Handle form submission
  }


  //watch activities
  console.log(form.watch('activities'))

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col items-start gap-4 w-full'>
          <div className='flex items-center gap-2'>
            <KeyRound />
            {lesson.hasKeywords.map((keyword, index) => (
              <EditKeyword key={keyword.id} form={form} index={index} />
            )
            )}
          </div>
          {activities.map((activity, index) => (
            <EditActivity
              key={activity.id}
              activity={activity}
              index={index}
              form={form}
            />
          ))}
          <AddActivityButton form={form} appendActivity={appendActivity} />
        </div>
        <Button type="submit" className='w-40'>Save</Button>
      </form>
    </Form>
  )
}
