import { User } from "next-auth"
import { useSession } from "next-auth/react"

export const useUser = (): User | undefined => {
    const { data: session } = useSession()

    return session?.user
}