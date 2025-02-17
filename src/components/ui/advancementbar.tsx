import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { FC, ReactNode } from "react"
import { Card } from "./card"

type AdvancementBarProps = {
    progress: number
    variant: "status" | "progress"
    children: ReactNode
    size?: "small" | "medium" | "large"
    className?: string
}

export const AdvancementBarCard: FC<AdvancementBarProps> = ({ progress, variant = "progress", children, className, size = "small" }) => {

    return (
        <Card className={cn("relative overflow-hidden rounded-b-xl", className)}>
            {children}
            <div className="absolute bottom-0 left-0 right-0">
                <div className={cn(
                    "relative h-1 w-full bg-muted/50",
                    size === "small" && "h-1",
                    size === "medium" && "h-2",
                    size === "large" && "h-3")}>
                    <motion.div
                        className={cn(
                            "absolute left-0 top-0 h-full",
                            variant === "progress" && "bg-blue-500",
                            variant === "status" && cn(
                                progress <= 100 && "bg-green-500",
                                progress <= 80 && "bg-yellow-500",
                                progress <= 50 && "bg-orange-500",
                                progress <= 30 && "bg-red-500",
                            )
                        )}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </Card>
    )
}