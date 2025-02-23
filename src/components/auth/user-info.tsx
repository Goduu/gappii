"use client"
import { useUser } from "@/lib/useUser"

export const UserInfo = () => {
    const user = useUser()

    return (
        <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
                {user?.name}
            </p>
            <p className="text-muted-foreground text-xs leading-none">
                {user?.email}
            </p>
        </div>
    )
}
