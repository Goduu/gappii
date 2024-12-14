
import { cn, getInitials } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { IconByName } from "./icons-by-name"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useTransitionContext } from "@/components/loading-store"
import { FC } from "react"
import { Form, FormField } from "@/components/ui/form"
import { useCollectionForm } from "./useCollectionForm"
import { useCollection } from "./collection-context"
import { useCollectionFormFunctions } from "./use-collection-form-functions"

type CollectionFormProps = {
    className?: React.ComponentProps<"form">["className"]
    onClose: () => void
}

export const CollectionForm: FC<CollectionFormProps> = ({ className, onClose }) => {
    const { isPending } = useTransitionContext()
    const { collection } = useCollection();
    const { form } = useCollectionForm(collection ? collection : undefined)
    const formValues = form.watch()
    const { handleCreateCollection, handleEditCollection } = useCollectionFormFunctions()

    return (
        <Form {...form}>
            <div className={cn("grid items-start gap-3 sm:gap-4", className)}>
                <Card
                    className={`w-80 p-2 h-36 sm:h-40 ${formValues.color} text-white shrink relative`} >
                    <CardHeader className="overflow-hidden">
                        <CardTitle className="flex justify-between items-start ">
                            <div className="text-2xl sm:text-4xl  font-black cursor-pointer text-ellipsis overflow-hidden w-72 h-24 sm:h-36" >{formValues.name}</div>
                        </CardTitle>
                    </CardHeader>
                    {formValues.icon === "text" ? (
                        <div className="text-6xl font-black absolute right-2 bottom-2" >{getInitials(formValues.name)}</div>
                    ) : (
                        <IconByName name={formValues.icon} size={40} className="w-20 h-20 absolute right-2 bottom-2" />
                    )}
                </Card>
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <Input type="name" id="name" value={field.value} onChange={field.onChange} />
                        )}
                    />

                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">Color</Label>
                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                            <ToggleGroup
                                type="single"
                                variant="outline"
                                value={field.value}
                                onValueChange={field.onChange}
                                className="flex-wrap flex gap-1 max-w-screen-sm">
                                {bgColors500.map(color => (
                                    <ToggleGroupItem key={color} value={color} className='text-xs h-8'>
                                        <div className={`${color} w-5 h-5 rounded-full`} />

                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        )}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">Icon</Label>
                    <FormField
                        control={form.control}
                        name="icon"
                        render={({ field }) => (
                            <ToggleGroup
                                type="single"
                                variant="outline"
                                value={field.value}
                                onValueChange={field.onChange}
                                className="flex flex-wrap gap-1 max-w-screen-sm max-h-24 overflow-y-auto sm:max-h-fit">
                                <ToggleGroupItem value={"text"} className='text-xs font-bold h-8'>
                                    {getInitials(formValues.name)}
                                </ToggleGroupItem>
                                {icons.map(icon => (
                                    <ToggleGroupItem value={icon} className='text-xs h-8' key={icon}>
                                        <IconByName name={icon} size={20} key={icon} />
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        )}
                    />

                </div>
                <Button
                    onClick={() => formValues.id ?
                        handleEditCollection(formValues, onClose) :
                        handleCreateCollection(formValues, onClose)}
                    disabled={isPending}>
                    Save changes
                </Button>
            </div>
        </Form>

    )
}

const bgColors500 = [
    "bg-slate-500",
    "bg-gray-500",
    "bg-zinc-500",
    "bg-neutral-500",
    "bg-stone-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500"
];

const icons = [
    "TreePine",
    "TreeDeciduous",
    "Laptop",
    "Projector",
    "AlarmClock",
    "Armchair",
    "BadgeDollarSign",
    "BadgeEuro",
    "BadgePoundSterling",
    "BaggageClaim",
    "Banana",
    "Bandage",
    "Battery",
    "BatteryCharging",
    "Bean",
    "BicepsFlexed",
    "Bike",
    "Biohazard",
    "Bird",
    "Bitcoin",
    "Bluetooth",
    "Bomb",
    "Bone",
    "Book",
    "BookAudio",
    "BookCheck",
    "BookCopy",
    "BookImage",
    "Bot",
    "Boxes",
    "Brain",
    "BrainCircuit",
    "BrickWall",
    "Briefcase",
    "Bug",
    "Rocket",
    "Skull",
    "Sun",
    "Moon",
    "Tent",
    "Tractor",
    "Wheat",
    "Wifi",
    "Wine",
    "Wrench",
    "Trash",
    "Speaker",
    "Soup",
    "Shirt",
    "School",
    "Sailboat",
    "Pizza",
    "PawPrint"
]
