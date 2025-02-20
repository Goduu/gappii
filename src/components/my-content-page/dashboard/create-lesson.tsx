import { FC, useState } from "react"

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
import { LearnInput2 } from "@/components/learn-input/2.0/learn-input2"

const texts = {
    create: "Create",
    description: "Create your custom lesson"
}

export const CreateLesson: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button variant="outline" className="z-30" onClick={() => setIsOpen(true)}>
                <Plus size={24} /> Create new lesson
            </Button>
            {isOpen && <LearnInput2 isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    )

}
