import { LogIn, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { signOutAction } from "./signInOutActions"
import Link from "next/link"
import { routes } from "@/lib/routes"

export function SignIn() {
    return (
        <nav>
            <Link href={routes.login}>
                <Button title="Sign In" variant="outline" size="icon" className="rounded-full">
                    <LogIn size={18} />
                </Button>
            </Link>
        </nav>
    )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={signOutAction}
            className="w-full"
        >
            <Button variant="outline" className="w-full m-0 p-0" size="sm" {...props}>
                <LogOut size={18} /> Log Out
            </Button>
        </form>
    )
}