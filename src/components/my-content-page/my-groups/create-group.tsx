import * as React from "react"

import { cn } from "@/lib/utils"
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { IconByName } from "./icons-by-name"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useMutation } from "@apollo/client"
import { CREATE_COLLECTION, GET_USER_COLLECTIONS } from "@/lib/gqls/colectionGQLs"
import { MutationCreateCollectionsArgs, MutationUpdateUsersArgs } from "@/ogm-resolver/ogm-types"
import { UPDATE_USER } from "@/lib/gqls/userGQLs"
import { useUser } from "@clerk/nextjs"

const texts = {
    createCollection: "Create collection",
    description: "Create a new collection"
}

export function CreateGroup() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">{texts.createCollection}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle>{texts.createCollection}</DialogTitle>
                        <DialogDescription>
                            {texts.description}
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">{texts.createCollection}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{texts.createCollection}</DrawerTitle>
                    <DrawerDescription>
                        {texts.description}
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    const [icon, setIcon] = React.useState<string>(icons[0])
    const [color, setColor] = React.useState<string>(bgColors500[0])
    const [name, setName] = React.useState<string>("Name")
    const [createCollection] = useMutation(CREATE_COLLECTION)
    const [updateUser] = useMutation(UPDATE_USER)
    const userData = useUser()

    const handleCreateNewCollection = async () => {
        const createdCollection = await createCollection({
            variables: {
                input: [{
                    title: name,
                    icon,
                    color
                }]
            } satisfies MutationCreateCollectionsArgs
        })
        if (createdCollection.data.createCollections.collections[0].id) {
            updateUser({
                variables: {
                    where: {
                        clerkId: userData.user?.id
                    },
                    update: {
                        hasCollections: [{
                            connect: [{
                                where: {
                                    node: {
                                        id: createdCollection.data.createCollections.collections[0].id
                                    }
                                }
                            }]
                        }]
                    }
                } satisfies MutationUpdateUsersArgs,
                refetchQueries: [{ query: GET_USER_COLLECTIONS }]
            })
        }
    }

    return (
        <div className={cn("grid items-start gap-3 sm:gap-4", className)}>
            <Card
                className={`w-80 p-2 h-36 sm:h-40 ${color} text-white shrink relative`} >
                <CardHeader className="overflow-hidden">
                    <CardTitle className="flex justify-between items-start ">
                        <div className="text-2xl sm:text-5xl  font-black cursor-pointer text-ellipsis overflow-hidden w-72 h-24 sm:h-36" >{name}</div>
                    </CardTitle>
                </CardHeader>
                {icon === "text" ? (
                    <div className="text-6xl font-black absolute right-2 bottom-2" >{getInitials(name)}</div>
                ) : (
                    <IconByName name={icon} size={50} className="w-20 h-20 absolute right-2 bottom-2" />
                )}
            </Card>
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Color</Label>
                <ToggleGroup
                    type="single"
                    variant="outline"
                    value={icon}
                    onValueChange={setColor}
                    className="flex-wrap flex gap-1 max-w-screen-sm">
                    {bgColors500.map(color => (
                        <ToggleGroupItem key={color} value={color} className='text-xs h-8'>
                            <div className={`${color} w-5 h-5 rounded-full`} />

                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Icon</Label>
                <ToggleGroup
                    type="single"
                    variant="outline"
                    value={icon}
                    onValueChange={setIcon}
                    className="flex flex-wrap gap-1 max-w-screen-sm max-h-24 overflow-y-auto sm:max-h-fit">
                    <ToggleGroupItem value={"text"} className='text-xs font-bold h-8'>
                        {getInitials(name)}
                    </ToggleGroupItem>
                    {icons.map(icon => (
                        <ToggleGroupItem value={icon} className='text-xs h-8' key={icon}>
                            <IconByName name={icon} size={20} key={icon} />
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </div>
            <Button onClick={handleCreateNewCollection}>Save changes</Button>
        </div>
    )
}

const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length >= 2 && words[1][0]) {
        return (words[0][0] + words[1][0]).toUpperCase();
    } else if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    } else {
        return "";
    }
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
