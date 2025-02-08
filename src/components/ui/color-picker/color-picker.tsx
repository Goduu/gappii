import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { colorList, getTailwindColor } from "./colors-list"
import { cn } from "@/lib/utils"

export function ColorPicker() {
    return (
        <Card className="shadow-none">
            <CardHeader hidden className="border-b">
                <CardTitle>Icon Picker</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="h-20 overflow-auto" >
                    <div
                        className="flex flex-wrap gap-2"
                    >
                        {colorList.map((color, index) => {
                            return (
                                <div
                                    key={color}
                                    className={cn(
                                        "w-8 h-8 rounded-full border-2 hover:opacity-70 border-white cursor-pointer",
                                        getTailwindColor(color)
                                    )}
                                >

                                </div>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}