import { Lesson, Path } from "@/ogm-types"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Swords } from "lucide-react"
import { PathDetailsDialog } from "./path-details-dialog"
import { PathCircle } from "./path-circle"
import { routes } from "@/lib/routes"
import Link from "next/link"
type PathCircleProps = {
    path?: Path
    isSelected: boolean
    size: 'sm' | 'md' | 'lg'
    lessons: Lesson[]
}
export const PathCard = ({ path, isSelected, size = 'md', lessons }: PathCircleProps) => {
    if (!path) return

    const isPathEmpty = path.withLessons.length === 0

    return (
        <CardContent className="relative flex items-center gap-4 justify-center">
            <div key={path.id} className='flex items-center justify-start w-80 gap-4 group'>
                <PathCircle path={path} isSelected={isSelected} size={size} />
                <div className="font-bold">{path.title}</div>

            </div>
            <div className='flex gap-2 absolute right-4 bottom-4 z-10' title={isPathEmpty ? "Path is empty" : ""}>
                <PathDetailsDialog lessons={lessons} path={path} mode="view" />
                <Link href={isPathEmpty ? "" : routes.path(path.id)} aria-disabled={isPathEmpty}>
                    <Button variant="outline" size="icon" title="Test Path" disabled={isPathEmpty}>
                        <Swords />
                    </Button>
                </Link>
            </div>

        </CardContent>
    )
}
