import { Button } from "@/components/ui/button"
import { GappiiBehindElement } from "@/components/ui/gappii-behind-element"
import { routes } from "@/lib/routes"
import { Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
            <div className="container flex flex-col items-center justify-center gap-6 px-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                        404 - Page Not Found
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Oops! The page you&apos;re looking for seems to have wandered off.
                        Let&apos;s get you back on track.
                    </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href={routes.home}>
                        <Button size="lg">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
                <GappiiBehindElement>
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-[0.80] blur-3xl opacity-25" />
                        <div className="relative h-full bg-background backdrop-blur-xl rounded-lg border p-8">
                            <div className="text-lg font-semibold">Did you know?</div>
                            <p className="text-sm text-muted-foreground mt-2">
                                The term &quot;404 error&quot; is believed to originate from room 404
                                at CERN, where the World Wide Web was developed. When the room
                                couldn&apos;t be found, they&apos;d say it was a &quot;404&quot;.
                            </p>
                        </div>
                    </div>
                </GappiiBehindElement>
            </div>
        </div>
    )
}