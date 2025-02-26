import { ReactNode } from "react"


type LayoutProps = {
    children: ReactNode
    analytics: ReactNode
    lessons: ReactNode
}

export default function Layout({ children, analytics, lessons }: LayoutProps) {
    return (
        <div className="flex flex-1 gap-4 relative">
            {/* Analytics - Fixed at top */}
            <div className="w-full md:w-80 fixed left-0 md:left-auto top-0 md:right-10 md:top-10 flex flex-col gap-4 items-center bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none z-50 p-4 md:p-0 border-b md:border-none">
                {analytics}
            </div>

            {/* Main content - With padding for fixed elements */}
            <div className="mr-0 md:mr-80 w-full pt-32 md:pt-10 pb-52 md:pb-10">
                {children}
            </div>

            {/* Lessons - Fixed at bottom on mobile */}
            <div className="w-full md:w-80 fixed left-0 md:left-auto bottom-0 md:right-10 md:top-24 md:bottom-10 flex flex-col gap-4 items-center bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none z-20 p-4 md:p-0 border-t md:border-none">
                {lessons}
            </div>
            {/* <div className="w-80 shrink-0 hidden md:block" /> */}
        </div>
    )
}
