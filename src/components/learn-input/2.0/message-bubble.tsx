import { cn } from "@/lib/utils";

export const MessageBubble = ({ content, isUser }: { content: string, isUser: boolean }) => (
    <div className={cn(
        "rounded-lg p-3 max-w-[80%] break-words",
        isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
    )}>
        {content}
    </div>
)