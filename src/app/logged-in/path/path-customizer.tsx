import { ColorPicker } from "@/components/ui/color-picker/color-picker"
import { iconMetadata, IconMetadata } from "@/components/ui/icon-picker/icon-list"
import { IconPicker } from "@/components/ui/icon-picker/icon-picker"
import { cloneElement, useState } from "react"
import { PathStone } from "./types"
import { DialogContent } from "@/components/ui/dialog"
import { DialogTrigger } from "@/components/ui/dialog"
import { Dialog, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { getTailwindBgColor500, getTailwindBorderColor600 } from "@/components/ui/color-picker/colors-list"

type PathCustomizerProps = {
    path: PathStone
}

export const PathCustomizerDialog = ({ path }: PathCustomizerProps) => {
    const [icon, setIcon] = useState<IconMetadata | null>(iconMetadata[0])
    const [color, setColor] = useState<string>("red")

    return (
        <Dialog>
            <DialogTrigger>
                <div className={cn(
                    "rounded-full flex items-center justify-center",
                    "w-32 aspect-square cursor-pointer",
                    "border-b-8",
                    getTailwindBorderColor600(color),
                    getTailwindBgColor500(color)
                )}>
                    <div className="text-white w-10 h-10 md:w-16 md:h-16" >
                        {icon?.icon && cloneElement(icon.icon, { className: "w-full h-full" })}
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle hidden>Icon & Color Customizer</DialogTitle>
                <Label className="text-lg md:text-xl font-bold">Path Customizer</Label>
                <div className="flex flex-col md:flex-row gap-4 items-center px-4">
                    <div className={cn(
                        "rounded-full flex items-center justify-center",
                        "w-24 md:w-20 aspect-square border-b-8",
                        getTailwindBgColor500(color),
                        getTailwindBorderColor600(color)
                    )}>
                        <div className="text-white w-12 h-12 md:w-10 md:h-10" >
                            {icon?.icon && cloneElement(icon.icon, { className: "w-full h-full" })}
                        </div>
                    </div>
                    <ColorPicker selectedColor={color} onSelect={setColor} />
                </div>
                <div className="max-h-[40vh] overflow-y-auto">
                    <IconPicker selectedIcon={icon} onSelect={setIcon} />
                </div>
            </DialogContent>
        </Dialog>
    )
}