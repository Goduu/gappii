import { ImagePlay } from 'lucide-react'
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription, DialogHeader } from '../ui/dialog'
import { MermaidRenderer } from './mermaid-renderer'

type ActivityImageProps = {
    diagram: string | undefined
    isEditingMode?: boolean
    onDiagramChange?: (newDiagram: string) => void
}

export const ActivityImage: FC<ActivityImageProps> = ({ diagram, isEditingMode = false, onDiagramChange }) => {
    if (!diagram && !isEditingMode) return null

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='absolute left-1 top-1'>
                    {!isEditingMode &&
                        <div className='absolute right-1 top-1'>
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500/75"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-sky-600"></span>
                            </span>
                        </div>
                    }
                    <Button variant='ghost' size='icon' type="button">
                        <ImagePlay className='w-3 h-3'/>
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className='flex items-center justify-center'>
                <DialogHeader>
                    <DialogTitle hidden>
                        Question Diagram
                    </DialogTitle>
                    <DialogDescription className='flex items-center justify-center'>
                    </DialogDescription>
                    <MermaidRenderer diagram={diagram || ""} isEditingMode={isEditingMode} onDiagramChange={onDiagramChange} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}