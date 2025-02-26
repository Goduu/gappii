import { Button } from "@/components/ui/button";
import { TopicsOption } from "./types";

type OptionButtonProps = {
    option: TopicsOption;
    disabled: boolean;
    onClick: (option: TopicsOption) => void;
}

export const OptionButton = ({ option, onClick, disabled }: OptionButtonProps) => (
    <Button
        variant="outline"
        className="w-full justify-start text-left hover:bg-muted"
        onClick={() => onClick(option)}
        disabled={disabled}
    >
        <span className="font-medium">{option.topic}</span>
        {option.subtopic && <span className="mx-2">→</span>}
        {option.subtopic && <span className="text-muted-foreground">{option.subtopic}</span>}
    </Button>
) 