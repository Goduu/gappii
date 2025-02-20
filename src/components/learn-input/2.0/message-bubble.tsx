import { cn } from "@/lib/utils";

export const MessageBubble = ({ content, isUser }: { content: string, isUser: boolean }) => (
    <div className={cn(
        "rounded-lg p-3 w-fit break-words flex",
        isUser ?
            "bg-primary text-primary-foreground ml-auto justify-end" :
            "bg-muted justify-start"
    )}>
        {content}
    </div>
)