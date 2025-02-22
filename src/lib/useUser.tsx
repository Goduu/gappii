import { User } from "next-auth"
import { useSession } from "next-auth/react"

export const useUser = (): User | undefined => {
    const { data: session } = useSession()
    const userData = { isLoaded: true, user: { id: "user_2p9hglnH1iJR9v5R9cG2kMXbnM8", reload: () => { } }, isSignedIn: true }

    return session?.user
}