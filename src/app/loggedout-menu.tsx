import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Lightbulb, LogIn } from "lucide-react"
import { routes } from "@/lib/routes"
import { Home, Users } from "lucide-react"

import React from 'react'


export const LoggedOutMenu = () => {
    return (
        <div className="flex gap-2 flex-col items-center">
            <div className="rounded-full aspect-square outline p-1 hover:bg-gray-100 cursor-pointer">
                <LogIn size={18} />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full aspect-square outline outline-gray-200 p-1 hover:bg-gray-100 cursor-pointer">
                    <Lightbulb size={18} />
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
        title: "Community Lessons",
        url: routes.community,
        icon: Users,
    },

]