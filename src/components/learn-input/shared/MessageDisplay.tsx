import { ReactNode, RefObject } from "react"
import { cn } from "@/lib/utils"
import { Message } from "../types"
import { MessageBubble } from "../message-bubble"
import { LoadingBubble } from "../loading-bubble"

type MessageDisplayProps = {
    messages: Message[]
    messagesEndRef: RefObject<HTMLDivElement>
    hasSubmittedPrompt: boolean
    renderMessageContent?: (message: Message, index: number) => ReactNode
    renderBottomContent?: () => ReactNode
    children?: ReactNode
    containerClassName?: string
    messageListClassName?: string
    inputContainerClassName?: string
}

export const MessageDisplay = ({
    messages,
    messagesEndRef,
    hasSubmittedPrompt,
    renderMessageContent,
    renderBottomContent,
    children,
    containerClassName = "",
    messageListClassName = "flex-grow overflow-y-auto pb-24",
    inputContainerClassName = "absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm"
}: MessageDisplayProps) => {
    return (
        <div className={cn(
            "flex flex-col w-full relative",
            hasSubmittedPrompt ? "h-full" : "flex-grow flex items-center justify-center",
            containerClassName
        )}>
            {hasSubmittedPrompt ? (
                <>
                    {/* Message list - scrollable area */}
                    <div className={messageListClassName}>
                        <div className="space-y-4 w-full py-4">
                            {messages.map((msg, index) => (
                                <div key={index} className="space-y-2">
                                    {renderMessageContent ? (
                                        renderMessageContent(msg, index)
                                    ) : (
                                        <>
                                            {msg.type === 'user' ? (
                                                <MessageBubble content={msg.content ?? ""} isUser={true} />
                                            ) : msg.type === 'loading' ? (
                                                <LoadingBubble />
                                            ) : msg.type === 'assistant' ? (
                                                <MessageBubble content={msg.content ?? ""} isUser={false} />
                                            ) : null}
                                        </>
                                    )}
                                </div>
                            ))}
                            {renderBottomContent && renderBottomContent()}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    
                    {/* Children will be rendered at the bottom (typically the input box) */}
                    {children && (
                        <div className={inputContainerClassName}>
                            {children}
                        </div>
                    )}
                </>
            ) : (
                /* Content centered before first prompt */
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-xl">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
} 