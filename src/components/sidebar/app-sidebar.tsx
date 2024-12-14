import { Book, Home, Users } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Logo } from "../logo"
import { routes } from "@/lib/routes"

// Menu items.
const items = [
    {
        title: "Home",
        url: routes.home,
        icon: Home,
    },
    {
        title: "My Lessons",
        url: routes.lessons,
        icon: Book,
    },
    {
        title: "Community Lessons",
        url: routes.community,
        icon: Users,
    },

]

export const AppSidebar = () => {
    return (
        <Sidebar className="fixed">
            <SidebarHeader className="flex items-center justify-center">
                <Logo className="w-32 h-fit cursor-pointer" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SignedOut>
                    <SignInButton mode="modal" />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </SidebarFooter>
        </Sidebar>
    )
}