"use client"
import React, { FC } from 'react';
import { useDroppable } from '@dnd-kit/core';

type DroppableProps = {
    children: React.ReactNode
    id: string
}

export const Droppable: FC<DroppableProps> = ({ children, id }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };


    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}