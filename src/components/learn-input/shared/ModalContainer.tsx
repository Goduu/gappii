import { ReactNode, useEffect } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDetectEsc } from "@/lib/utilitary-hooks/useDetectEsc"

type ModalContainerProps = {
    isActive: boolean
    onClose?: () => void
    title: string
    hasSubmittedPrompt: boolean
    children: ReactNode
}

export const ModalContainer = ({ 
    isActive, 
    onClose, 
    title, 
    hasSubmittedPrompt, 
    children 
}: ModalContainerProps) => {
    useDetectEsc(onClose || (() => { }))

    // Prevent body scrolling when component is active
    useEffect(() => {
        if (isActive) {
            // Save the current overflow style
            const originalStyle = window.getComputedStyle(document.body).overflow;
            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';

            // Restore original overflow on cleanup
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isActive]);

    const handleClose = () => {
        onClose?.()
    }

    return (
        <div className={cn(
            "flex flex-col items-center justify-center text-foreground p-4 transition-all duration-1000",
            isActive ? "fixed inset-0 z-40" : "relative"
        )}>
            <div className={cn(
                "absolute inset-0 bg-background opacity-0 scale-0 origin-center transition-all duration-500",
                isActive && "opacity-95 scale-100 backdrop-blur"
            )} />

            {/* Close button */}
            {isActive && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    <X className="size-6" />
                </Button>
            )}

            <div className={cn(
                "w-full max-w-3xl mx-auto relative transition-all duration-500 flex flex-col",
                isActive && "z-20 "
            )}>
                {/* Title - shows at top before prompt, smaller after prompt */}
                <h1 className={cn(
                    "text-4xl font-bold text-center transition-all duration-500",
                    hasSubmittedPrompt ? "text-2xl mb-4" : "mb-12"
                )}>
                    {title}
                </h1>

                {children}
            </div>
        </div>
    )
} 