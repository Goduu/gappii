"use client"
import React, { FC } from 'react'
import { EditActivity } from './edit-activity'
import { Lesson } from '@/ogm-types'
import { DragEndEvent } from '@dnd-kit/core'
import { LessonFormValues, useLessonForm } from './useLessonForm'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AddActivityButton } from './add-activity-button'
import { useFieldArray } from 'react-hook-form'
import { EditLessonKeywords } from './edit-lesson-keywords'
import { Save } from 'lucide-react'
import { useSaveLessonForm } from './useSaveLessonForm'
import { DndSortingContext } from './dnd-sorting-context'
import { arrayMove } from '@dnd-kit/sortable'
import { useTransitionContext } from '@/components/loading-store'
import { EditLessonFields } from './edit-lesson-fields'
import { DeleteLessonButton } from './delete-lesson-button'

type EditLessonFormProps = {
  lesson: Lesson
}

export const EditLessonForm: FC<EditLessonFormProps> = ({ lesson }) => {
  const { form } = useLessonForm(lesson)
  const { handleUpdateLesson } = useSaveLessonForm()
  const { startTransition } = useTransitionContext()

  const { fields: activities, append: appendActivity, remove, move, update } = useFieldArray({
    control: form.control,
    name: "activities"
  });

  const onSubmit = (data: LessonFormValues) => {
    startTransition(async () => handleUpdateLesson(lesson, data, () => { }))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = activities.findIndex(activity => activity.order === active.id);
    const newIndex = activities.findIndex(activity => activity.order === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      // Move the item in the array
      move(oldIndex, newIndex);

      // Update the order values
      const updatedActivities = arrayMove(activities, oldIndex, newIndex);
      updatedActivities.forEach((activity, index) => {
        update(index, { ...activity, order: index });
      });
    }
  };

  const handleMoveActivity = (currentIndex: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const activities = form.getValues('activities');

    if (newIndex >= 0 && newIndex < activities.length) {
      const newActivities = [...activities];
      [newActivities[currentIndex], newActivities[newIndex]] =
        [newActivities[newIndex], newActivities[currentIndex]];

      form.setValue('activities', newActivities);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 items-start'>
        <div className='flex items-center gap-4'>
          <p className='text-xl font-bold'>{lesson.title}</p>
          <DeleteLessonButton lessonId={lesson.id || undefined} />
        </div>
        <EditLessonFields form={form} />
        <EditLessonKeywords form={form} />
        <DndSortingContext activities={activities} onDragEnd={handleDragEnd}>
          {activities.map((activity, index) => (
            <EditActivity
              key={activity.id}
              activity={activity}
              index={index}
              form={form}
              removeActivity={() => remove(index)}
              onMoveUp={() => handleMoveActivity(index, 'up')}
              onMoveDown={() => handleMoveActivity(index, 'down')}
              isFirst={index === 0}
              isLast={index === activities.length - 1}
            />
          ))}
        </DndSortingContext>
        <AddActivityButton appendActivity={appendActivity} activitiesLen={activities.length} />
        <Button type="submit" className='w-40 flex gap-2 items-center'>
          <Save />
          Save
        </Button>
      </form>
    </Form >
  )
}
