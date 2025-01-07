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
import { LearnInput } from "@/components/learn-input/learn-input"
import { CollectionPageMode } from "../my-groups/types"
import { Topic } from "@/ogm-resolver/ogm-types"

const texts = {
    create: "Create",
    edit: "Edit",
    description: "Create your custom lesson"
}

type CreateLessonProps = {
    topic: Topic
    mode: CollectionPageMode
}

export const CreateLesson: FC<CreateLessonProps> = ({ topic, mode = "create" }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog modal>
                <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="z-30">
                        <Plus size={24} />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle>{mode === "edit" ? texts.edit : texts.create}</DialogTitle>
                        <DialogDescription>
                            {texts.description}
                        </DialogDescription>
                    </DialogHeader>
                    <LearnInput initialTopic={topic} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="z-30">
                    <Plus size={24} />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{mode === "edit" ? texts.edit : texts.create}</DrawerTitle>
                    <DrawerDescription>
                        {texts.description}
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-2 px-4">
                    <LearnInput initialTopic={topic} />
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
