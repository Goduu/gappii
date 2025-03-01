"use client"
import { Button } from "@/components/ui/button"
import { Eye, Plus } from "lucide-react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Path } from "@/ogm-types"
import { PathDetailsContent } from "./path-details-content"
import { useState } from "react"
import { useUserPathsAndLessons } from "@/lib/queries/useUserPaths"
import { Whisper } from "@/components/ui/tooltip"

type PathDetailsDialogProps = {
    path?: Path
    mode: 'view' | 'edit'
}

export const PathDetailsDialog = ({ path, mode }: PathDetailsDialogProps) => {
    const { userLessons } = useUserPathsAndLessons()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Whisper text={mode === 'view' ? "View Path" : "Create Path"} asChild>
                <DialogTrigger asChild>
                    <Button variant={mode === 'view' ? "outline" : "ghost"} size="icon" title={mode === 'view' ? "View Path" : "Create Path"}>
                        {mode === 'view' ? <Eye /> : <Plus />}
                    </Button>
                </DialogTrigger>
            </Whisper>
            <PathDetailsContent path={path} lessons={userLessons || []} mode={mode} onClose={() => setIsOpen(false)} />
        </Dialog>
    )
}
