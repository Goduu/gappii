"use client"
import { Button } from "@/components/ui/button"
import { TermsOfUseDialog } from "../onboarding/terms-of-use"
import { Github } from "lucide-react"
import { Logo } from "@/components/logo"
import { signInAction } from "@/components/auth/signInOutActions"

export const LoginCard = () => {
    return (
        <div className="w-full max-w-sm space-b-8 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <Logo className="w-52" />
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter">
                    Welcome back
                </h1>
                <p className="text-sm text-muted-foreground">
                    Sign in to your account to continue
                </p>
            </div>

            <div className="py-4 flex flex-col gap-4">
                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => signInAction("github")}
                >
                    <Github className="mr-2 h-4 w-4" />
                    Continue with GitHub
                </Button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-xs text-center text-muted-foreground">
                        By continuing, you agree to our{" "}
                        <TermsOfUseDialog />.
                    </p>
                </div>
            </div>
        </div>
    )
}