import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { SignIn, SignOut } from "./sing-in"
import Image from "next/image"
import { auth } from "@auth"

export default async function UserButton() {
    const session = await auth()

    if (!session?.user) return <SignIn />
    return (
        <div className="flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline"
                        className="relative h-8 w-8 rounded-full p-0 overflow-hidden hover:opacity-80 transition-opacity duration-300">
                        <Image
                            src={
                                session.user.image ??
                                `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`
                            }
                            alt={session.user.name ?? ""}
                            className="rounded-full"
                            fill
                            sizes="28px"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {session.user.name}
                            </p>
                            <p className="text-muted-foreground text-xs leading-none">
                                {session.user.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <SignOut />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}