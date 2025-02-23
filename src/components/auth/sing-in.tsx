import { LogIn, LogOut } from "lucide-react"
import { signIn, signOut } from "../../../auth"
import { Button } from "../ui/button"
import { routes } from "@/lib/routes"

export function SignIn({
    provider,
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider, { redirectTo: routes.dashboard })
            }}
        >
            <Button title="Sign In" variant="outline" size="icon" className="rounded-full">
                <LogIn size={18} />
            </Button>

        </form>
    )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={async () => {
                "use server"
                await signOut({ redirectTo: routes.home })
            }}
            className="w-full"
        >
            <Button variant="outline" className="w-full m-0 p-0" size="sm" {...props}>
                <LogOut size={18} /> Log Out
            </Button>
        </form>
    )
}