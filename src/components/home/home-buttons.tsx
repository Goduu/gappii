"use client"
import { LogIn } from "lucide-react"

import { routes } from "@/lib/routes"
import Link from "next/link"
import { Button } from "../ui/button"
import { UsersRound } from "lucide-react"
import { usePathname } from "next/navigation"

export const HomeButtons = () => {
    const pathname = usePathname()

    return (
        <div className="flex gap-2 ml-auto">
            <Link href={routes.communityGallery}>
                <Button variant={ pathname === routes.communityGallery ? "default" : "outline" }>
                    <UsersRound className='size-4 mr-2' />
                    Community
                </Button>
            </Link>
            <Link href={routes.login}>
                <Button variant="outline">
                    <LogIn className='size-4 mr-2' />
                    Login
                </Button>
            </Link>
        </div>
    )
}