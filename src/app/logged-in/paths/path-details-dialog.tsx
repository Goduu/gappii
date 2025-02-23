"use client"
import { Button } from "@/components/ui/button"
import { Eye, Plus } from "lucide-react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Lesson, Path } from "@/ogm-types"
import { PathDetailsContent } from "./path-details-content"
import { useState } from "react"

type PathDetailsDialogProps = {
    lessons: Lesson[]
    path?: Path
    mode: 'view' | 'edit'
}

export const PathDetailsDialog = ({ lessons, path, mode }: PathDetailsDialogProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" title={mode === 'view' ? "View Path" : "Create Path"}>
                    {mode === 'view' ? <Eye /> : <Plus />}
                </Button>
            </DialogTrigger>
            <PathDetailsContent path={path} lessons={lessons} mode={mode} onClose={() => setIsOpen(false)} />
        </Dialog>
    )
}
