import { FC, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { PathCocreation } from "@/components/learn-input/path-cocreation/path-cocreation"
import { Whisper } from "@/components/ui/tooltip"

export const PathCocreationButton: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Whisper text="Cocreate Path (Beta)" asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                    <Sparkles size={24} />
                </Button>
            </Whisper>
            {isOpen && <PathCocreation isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    )

}
