"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { routes } from "@/lib/routes"
import { useUser } from "@/lib/useUser"
import { LayoutDashboard, Home, Users, Route, Menu } from "lucide-react"

export const LoggedInDropdownMenu = () => {
    const user = useUser()

    if (!user) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full aspect-square outline outline-gray-200 p-1 hover:bg-gray-100 cursor-pointer">
                <Menu size={22} />
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
    )
}


const items = [
    {
        title: "Home",
        url: routes.home,
        icon: Home,
    },
    {
        title: "My Paths",
        url: routes.paths,
        icon: Route,
    },
    {
        title: "My Dashboard",
        url: routes.mylessons,
        icon: LayoutDashboard,
    },
    {
        title: "Community Lessons",
        url: routes.community,
        icon: Users,
    },

]