import { Button } from "@/components/ui/button"
import { ArrowRight, FolderOpen } from "lucide-react"
import Link from "next/link"

type NavigationOptionsProps = {
    pathId?: string
    pathTitle?: string
    lessonId?: string
    lessonTitle?: string
    className?: string
}

export const NavigationOptions = ({ 
    pathId, 
    pathTitle, 
    lessonId, 
    lessonTitle,
    className = "" 
}: NavigationOptionsProps) => {
    return (
        <div className={`flex flex-col gap-4 mt-4 ${className}`}>
            <h3 className="text-lg font-medium">What would you like to do next?</h3>
            <div className="flex flex-wrap gap-3">
                {pathId && (
                    <Link href={`/paths/${pathId}`} passHref>
                        <Button className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            Go to {pathTitle || "Created Path"}
                        </Button>
                    </Link>
                )}
                
                {lessonId && (
                    <Link href={`/lessons/${lessonId}`} passHref>
                        <Button variant="outline" className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            Go to {lessonTitle || "Created Lesson"}
                        </Button>
                    </Link>
                )}
                
                <Link href="/paths" passHref>
                    <Button variant="outline" className="flex items-center gap-2">
                        <FolderOpen className="h-4 w-4" />
                        My Paths
                    </Button>
                </Link>
            </div>
        </div>
    )
} 