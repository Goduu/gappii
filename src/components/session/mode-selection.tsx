import { Button } from "@/components/ui/button";
import { Keyboard, SplitSquareHorizontal } from "lucide-react";
import { SessionMode, SessionModes } from "./types";
import { cn } from "@/lib/utils";

const modes = [
    {
        id: SessionModes.EitherOr,
        title: 'Either-Or',
        description: 'Choose between two options',
        icon: SplitSquareHorizontal,
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-500/10'
    },
    {
        id: SessionModes.TypeIn,
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

type ModeSelectionProps = {
    onModeSelect: (mode: SessionMode) => void;
    isOnboarding?: boolean;
};

export const ModeSelection = ({ onModeSelect, isOnboarding = false }: ModeSelectionProps) => {
    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Choose Your Learning Mode</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                {modes.map((modeData) => {
                    const isDisabled = isOnboarding && modeData.id === SessionModes.TypeIn;
                    return (
                        <div
                            key={modeData.id}
                            className={cn(!isDisabled && "hover:scale-105 transition-all duration-300", "w-full")}
                        >
                            <Button
                                disabled={isDisabled}
                                variant="outline"
                                className="w-full h-full p-6 flex flex-col gap-4 items-center text-center hover:bg-accent"
                                onClick={() => onModeSelect(modeData.id)}
                            >
                                <div className={`p-3 rounded-lg ${modeData.bgColor}`}>
                                    <modeData.icon className={`w-20 h-20 ${modeData.iconColor}`} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold">{modeData.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {modeData.description}
                                    </p>
                                </div>
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}; 