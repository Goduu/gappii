'use client'

import { Button } from "@/components/ui/button"
import { GappiiBehindElement } from "@/components/ui/gappii-behind-element"
import { routes } from "@/lib/routes"
import { Home, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
            <div className="container flex flex-col items-center justify-center gap-6 px-4 text-center">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                        Oops! Something went wrong
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Don&apos;t worry, it&apos;s not you - it&apos;s us. 
                        We&apos;re working on fixing the issue.
                    </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button 
                        variant="outline" 
                        size="lg" 
                        onClick={reset}
                        className="min-[400px]:mr-2"
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Try Again
                    </Button>
                    <Link href={routes.home}>
                        <Button size="lg">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <GappiiBehindElement>
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-[0.80] blur-3xl opacity-25" />
                        <div className="relative h-full bg-background backdrop-blur-xl rounded-lg border p-8">
                            <div className="text-lg font-semibold">Technical Details</div>
                            <p className="text-sm text-muted-foreground mt-2">
                                Error: {error.message || "An unexpected error occurred"}
                                {error.digest && (
                                    <span className="block mt-1 text-xs">
                                        Error ID: {error.digest}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                </GappiiBehindElement>
            </div>
        </div>
    )
}