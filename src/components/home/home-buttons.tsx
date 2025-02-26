import { LogIn } from "lucide-react"

import { routes } from "@/lib/routes"
import Link from "next/link"
import { Button } from "../ui/button"
import { UsersRound } from "lucide-react"

export const HomeButtons = () => {
    return (
        <div className="flex gap-2 ml-auto">
            <Link href={routes.communityGallery}>
                <Button variant="outline" className='bg-transparent'>
                    <UsersRound className='size-4 mr-2' />
                    Community
                </Button>
            </Link>
            <Link href={routes.login}>
                <Button variant="outline" className='bg-transparent'>
                    <LogIn className='size-4 mr-2' />
                    Login
                </Button>
            </Link>
        </div>
    )
}