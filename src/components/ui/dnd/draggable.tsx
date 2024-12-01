"use client"
import React, { FC } from 'react';
import { useDraggable } from '@dnd-kit/core';

type DraggableProps = {
    id: string
    children: React.ReactNode
}

export const Draggable: FC<DraggableProps> = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
}