'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { menuItems } from "./menu-items"

export const BottomMenu = () => {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 md:hidden">
            <div className="flex w-full items-center h-16 p-0">
                {menuItems.map((item) => {
                    const isActive = pathname === item.url
                    return (
                        <Link 
                            key={item.title} 
                            href={item.url}
                            className="flex-1 p-0"
                        >
                            <Button
                                variant={isActive ? "outline" : "ghost"}
                                className="h-12 w-full flex items-center justify-center"
                                title={item.title}
                            >
                                <item.icon size={24} />
                            </Button>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
} 