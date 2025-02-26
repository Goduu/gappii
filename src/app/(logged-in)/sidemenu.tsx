"use client"
import { LogoText } from "@/components/logo-text"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "./menu-items"
import { BottomMenu } from "./bottom-menu"


export default function SideMenu() {
    const pathname = usePathname()
    const isMobile = useIsMobile()

    if (isMobile) {
        return <BottomMenu />
    }

    return (
        <div className="w-64 fixed left-4 top-4 bottom-4">
            <nav className="flex flex-col gap-1 px-2 border-r h-screen">
                <LogoText />
                {menuItems.map((item) => {
                    const isActive = pathname === item.url
                    return (
                        <Link key={item.title} href={item.url} >
                            <Button
                                size="lg"
                                variant={isActive ? "outline" : "ghost"}
                                className="w-full justify-start gap-2 py-7 text-xl"
                            >
                                <item.icon />
                                {item.title}
                            </Button>
                        </Link>
                    )
                })}
            </nav>
        </div>

    )
} 