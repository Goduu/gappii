import { Message, MessageHandlerProps } from "./types";
import { OptionButton } from "./option-button";
import { useOptionSelection } from "./hooks/useOptionSelection";

type OptionsDisplayProps = MessageHandlerProps & {
    message: Message;
    level: string;
    setLevel: (level: string) => void;
    numberOfQuestions: string;
    setNumberOfQuestions: (numberOfQuestions: string) => void;
    onCreate?: (lessonId: string) => void
}

export const OptionsDisplay = ({ message, messages, setMessages, setError, level, setLevel, numberOfQuestions, setNumberOfQuestions, onCreate }: OptionsDisplayProps) => {
    const { handleOptionSelect } = useOptionSelection({ messages, setMessages, setError, level, setLevel, numberOfQuestions, setNumberOfQuestions, onCreate });

    if (!message.options?.length) return null;

    return (
        <div className="grid gap-2 w-full max-w-[80%]">
            {message.options.map((option, index) => (
                <OptionButton 
                    key={`${option.topic}-${index}`}
                    option={option}
                    onClick={() => handleOptionSelect(message, option)}
                />
            ))}
        </div>
    )
} 