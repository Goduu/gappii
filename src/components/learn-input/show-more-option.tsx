import { Button } from "@/components/ui/button"
import { MessageHandlerProps } from "./types"
import { useMoreOptions } from "./hooks/useMoreOptions"

type ShowMoreOptionProps = MessageHandlerProps;

export const ShowMoreOption = (props: ShowMoreOptionProps) => {
    const { showMoreOptions, handleMoreOptions } = useMoreOptions(props)

    if (!showMoreOptions) return null
    const lastMessage = props.messages[props.messages.length - 1]

    return (
        <div className="relative mt-2 before:absolute before:left-0 before:right-0 before:top-1/2 before:h-px before:bg-muted">
            <Button
                variant="ghost"
                className="relative justify-center text-center hover:bg-muted/50 border border-dashed border-muted-foreground/50"
                onClick={() => handleMoreOptions(lastMessage)}
            >
                <span className="font-medium text-muted-foreground">
                    Show me more options...
                </span>
            </Button>
        </div>
    )
}