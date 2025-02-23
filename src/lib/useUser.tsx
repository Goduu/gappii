"use client"
import { User } from "next-auth"
import { useSession } from "next-auth/react"

export const useUser = (): User | undefined => {
    const session = useSession()

    return session?.data?.user
}