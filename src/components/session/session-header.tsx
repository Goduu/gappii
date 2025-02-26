"use client";

import { CircleX } from "lucide-react";
import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";
import { useUser } from "@/lib/useUser";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SessionHeaderProps = {
    title: string;
    subtitle: string;
    currentIndex: number;
    total: number;
    progress: number;
};

export const SessionHeader: React.FC<SessionHeaderProps> = ({
    title,
    subtitle,
    currentIndex,
    total,
    progress
}) => {
    const user = useUser();

    return (
        <Card className="relative overflow-hidden p-4 bg-linear-to-br from-background to-muted/20 w-full">
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-1"
                    >
                        <div className="text-sm text-muted-foreground">
                            {title}
                        </div>
                        <div className="font-bold">
                            {subtitle}
                        </div>
                    </motion.div>
                </div>

                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center hidden sm:block"
                    >
                        <div className="text-2xl font-bold">
                            {currentIndex + 1}
                            <span className="text-muted-foreground text-sm">/{total}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Questions
                        </div>
                    </motion.div>

                    <CircleX
                        className="h-6 w-6 cursor-pointer text-muted-foreground hover:text-destructive transition-colors"
                        onClick={() => redirect(user?.email ? routes.mylessons : routes.home)}
                    />
                </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="relative h-1 w-full bg-muted/50">
                    <motion.div
                        className={cn(
                            "absolute left-0 top-0 h-full",
                            progress >= 100 ? "bg-green-500" : "bg-blue-500"
                        )}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </Card>
    );
}; 