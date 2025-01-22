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
import { Plus } from "lucide-react"
import { LearnInput } from "@/components/learn-input/learn-input"
import { routes } from "@/lib/routes"
import { redirect } from "next/navigation"

const texts = {
    create: "Create",
    description: "Create your custom lesson"
}

export const CreateLesson: FC = () => {

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
