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
import { CollectionForm } from "./collection-form"
import { SquarePlus } from "lucide-react"
import { CollectionPageMode } from "./types"

const texts = {
    create: "Create",
    edit: "Edit",
    description: "Create a new collection"
}

type CreateCollectionProps = {
    mode: CollectionPageMode
    open: boolean
    setOpen: (open: boolean) => void
}

export const CreateCollection: FC<CreateCollectionProps> = ({ mode, open, setOpen }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const close = () => setOpen(false)

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="z-30">
                        <SquarePlus size={24} />
                        {texts.create}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle>{mode === "edit" ? texts.edit : texts.create}</DialogTitle>
                        <DialogDescription>
                            {texts.description}
                        </DialogDescription>
                    </DialogHeader>
                    <CollectionForm onClose={close} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">
                    <SquarePlus size={24} />
                    {texts.create}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{mode === "edit" ? texts.edit : texts.create}</DrawerTitle>
                    <DrawerDescription>
                        {texts.description}
                    </DrawerDescription>
                </DrawerHeader>
                <CollectionForm className="px-4" onClose={close} />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
