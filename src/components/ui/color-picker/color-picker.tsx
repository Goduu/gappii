import { colorList, getTailwindBgColor500 } from "./colors-list"
import { cn } from "@/lib/utils"

type ColorPickerProps = {
    selectedColor: string | null
    onSelect: (color: string) => void
}

export function ColorPicker({ selectedColor, onSelect }: ColorPickerProps) {
    return (
        <div className="w-full p-4">
            <div className="flex flex-wrap gap-2 items-center justify-center">
                {colorList.map((color, index) => {
                    return (
                        <div
                            key={color}
                            className={cn(
                                "w-8 h-8 rounded-full border-2 hover:opacity-70 border-white cursor-pointer",
                                getTailwindBgColor500(color),
                                selectedColor === color && "shadow-md"
                            )}
                            onClick={() => onSelect(color)}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}