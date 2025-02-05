import { Button } from "@/components/ui/button";
import { Keyboard, SplitSquareHorizontal } from "lucide-react";
import { LessonMode, LessonModes } from "./type";

type ModeSelectionProps = {
    onModeSelect: (mode: LessonMode) => void;
};

const modes = [
    {
        id: LessonModes.EitherOr,
        title: 'Either-Or',
        description: 'Choose between two options',
        icon: SplitSquareHorizontal,
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-500/10'
    },
    {
        id: LessonModes.TypeIn,
        title: 'Type-in',
        description: 'Type the answer manually',
        icon: Keyboard,
        iconColor: 'text-orange-500',
        bgColor: 'bg-orange-500/10'
    },
    // {
    //     id: LessonModes.PickNMatch,
    //     title: 'Pick-and-Match',
    //     description: 'Match pairs of related items',
    //     icon: MousePointerClick,
    //     iconColor: 'text-red-500',
    //     bgColor: 'bg-red-500/10'
    // }
] as const;

export const ModeSelection = ({ onModeSelect }: ModeSelectionProps) => {
    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Choose Your Learning Mode</h2>
            <div id="ob-mode-selection" className="flex items-center justify-center gap-4 w-full">
                {modes.map((mode) => (
                    <div
                        key={mode.id}
                        className="hover:scale-105 transition-all duration-300"
                    >
                        <Button
                            variant="outline"
                            className="w-full h-full p-6 flex flex-col gap-4 items-center text-center hover:bg-accent"
                            onClick={() => onModeSelect(mode.id)}
                        >
                            <div className={`p-3 rounded-lg ${mode.bgColor}`}>
                                <mode.icon className={`w-20 h-20 ${mode.iconColor}`} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold">{mode.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {mode.description}
                                </p>
                            </div>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}; 