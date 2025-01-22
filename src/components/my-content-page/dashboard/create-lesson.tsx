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
import { routes } from "@/lib/routes"
import { redirect } from "next/navigation"

const texts = {
    create: "Create",
    description: "Create your custom lesson"
}

export const CreateLesson: FC = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog modal>
                <DialogTrigger asChild>
                    <Button variant="outline" className="z-30">
                        <Plus size={24} /> Create new lesson
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]" >
                    <DialogHeader>
                        <DialogTitle>{texts.create}</DialogTitle>
                        <DialogDescription>
                            {texts.description}
                        </DialogDescription>
                        <LearnInput onCreate={(lessonId) => redirect(routes.lesson(lessonId))} />
                    </DialogHeader>
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
                    <DrawerTitle>{texts.create}</DrawerTitle>
                    <DrawerDescription>
                        {texts.description}
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-2 px-4">
                    <LearnInput onCreate={(lessonId) => redirect(routes.lesson(lessonId))} />
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
