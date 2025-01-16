"use client"
import { FC } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/lib/use-media-query"
import { Plus } from "lucide-react"
import { AddLessonToLibraryContent } from "./add-lesson-to-library-content"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Lesson } from "@/ogm-resolver/ogm-types"

const texts = {
    addToLibrary: "Add to library",
    description: "Add this lesson to your library"
}

type AddLessonToLibraryProps = {
    lesson: Lesson
    disabled?: boolean
}

export const AddLessonToLibrary: FC<AddLessonToLibraryProps> = ({ lesson, disabled }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog modal>
                <DialogTrigger asChild>
                    <Button variant="outline" className="z-30" size="icon" disabled={disabled}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Plus size={24} />
                            </TooltipTrigger>
                            <TooltipContent>
                                {texts.addToLibrary}
                            </TooltipContent>
                        </Tooltip>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle>{texts.addToLibrary}</DialogTitle>
                        <DialogDescription>
                            {texts.description}
                        </DialogDescription>
                    </DialogHeader>
                    <AddLessonToLibraryContent lesson={lesson} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" size="icon" className="z-30" disabled={disabled}>
                    <Plus size={24} />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{texts.addToLibrary}</DrawerTitle>
                    <DrawerDescription>
                        {texts.description}
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-2 px-4">
                    <AddLessonToLibraryContent lesson={lesson} />
                </div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
