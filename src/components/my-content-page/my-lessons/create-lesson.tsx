import { FC, useState } from "react"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { LearnInput } from "@/components/learn-input/learn-input"
import { Whisper } from "@/components/ui/tooltip"

export const CreateLesson: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Whisper text="Create Lesson" asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                    <Plus size={24} />
                </Button>
            </Whisper>
            {isOpen && <LearnInput isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    )

}
