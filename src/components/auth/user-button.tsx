"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { SignIn, SignOut } from "./sing-in-out"
import { UserInfo } from "./user-info"
import { Button } from "../ui/button"
import Image from "next/image"
import { useUser } from "@/lib/useUser"

export default function UserButton() {
    const user = useUser()

    if (!user) return <SignIn />

    return (
        <div className="min-h-9">
            <div className="flex items-center gap-2 justify-between w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline"
                            className="relative h-8 w-8 rounded-full p-0 overflow-hidden hover:opacity-80 transition-opacity duration-300">
                            <Image
                                src={
                                    user.image ??
                                    `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`
                                }
                                alt={user.name ?? ""}
                                className="rounded-full"
                                fill
                                sizes="28px"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <UserInfo />
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                            <SignOut />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}