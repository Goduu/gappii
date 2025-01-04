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
import { Activity } from '@/ogm-resolver/ogm-types';

type DndSortingContextProps = {
    children: ReactNode
    activities: Activity[]
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
