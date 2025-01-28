import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserButton } from "@clerk/nextjs"
import { routes } from "@/lib/routes"
import { LayoutDashboard, Lightbulb, Home, Users } from "lucide-react"

import React from 'react'


export const LoggedInMenu = () => {
    return (
        <div className="flex gap-2 flex-col items-center justify-center">
            <div className="min-h-9 min-w-7">
                <UserButton />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full aspect-square outline outline-gray-200 p-1 hover:bg-gray-100 cursor-pointer">
                    <Lightbulb size={22} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {items.map(item => (
                        <DropdownMenuItem key={item.title} >
                            <a href={item.url} className="flex items-center gap-1 w-full">
                                <item.icon />
                                <span>{item.title}</span>
                            </a>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

const items = [
    {
        title: "Home",
        url: routes.home,
        icon: Home,
    },
    {
        title: "My Dashboard",
        url: routes.dashboard(),
        icon: LayoutDashboard,
    },
    {
        title: "Community Lessons",
        url: routes.community,
        icon: Users,
    },

]