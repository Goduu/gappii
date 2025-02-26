import React, { FC, ReactNode } from 'react'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { LessonFormValues } from './useLessonForm';

type DndSortingContextProps = {
    children: ReactNode
    activities: LessonFormValues['activities']
    onDragEnd: (event: DragEndEvent) => void
}

export const DndSortingContext: FC<DndSortingContextProps> = ({ children, activities, onDragEnd }) => {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
        >
            <SortableContext
                items={activities.map((activity) => ({ id: activity.order }))}
                strategy={verticalListSortingStrategy}
            >
                {children}
            </SortableContext>
        </DndContext>
    )
}
