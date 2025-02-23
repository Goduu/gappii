import UserButton from "@/components/auth/user-button"

import React from 'react'
import { LoggedInDropdownMenu } from "./loggedin-dropdown-menu"

export const LoggedInMenu = () => {

    return (
        <div className="flex gap-2 flex-col items-center justify-center">
            <UserButton />
            <LoggedInDropdownMenu />
        </div>
    )
}
