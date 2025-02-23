"use client"
import { SignIn } from "./sing-in-out"
import { useUser } from "@/lib/useUser"

export const SignInButton = () => {
    const user = useUser()

    if (user) return null

    return <SignIn />
}