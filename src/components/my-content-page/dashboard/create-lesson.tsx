import { FC, useState } from "react"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { LearnInput2 } from "@/components/learn-input/2.0/learn-input2"

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
