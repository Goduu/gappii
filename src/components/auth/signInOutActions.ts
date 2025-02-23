'use server'

import { signIn, signOut } from "../../../auth"
import { routes } from "@/lib/routes"

export async function signInAction(provider?: string) {
    if (!provider) {
        return
    }
    await signIn(provider, { redirectTo: routes.dashboard })
}

export async function signOutAction() {
    await signOut({ redirectTo: routes.home })
}