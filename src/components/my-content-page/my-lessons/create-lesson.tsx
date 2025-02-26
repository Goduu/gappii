import { FC, useState } from "react"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { LearnInput } from "@/components/learn-input/learn-input"

export const CreateLesson: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
                <Plus size={24} />
            </Button>
            {isOpen && <LearnInput isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    )

}
