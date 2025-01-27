import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export const HardModeSwitch = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);
    const isHardModeParam = params.get('mode') === 'hard';
    const [mode, setMode] = useState<string | null>(params.get('mode'));

    const handleHardMode = () => {
        if (!isHardModeParam) {
            params.set('mode', 'hard');
            setMode("hard")
        } else {
            params.delete('mode');
            setMode("normal")
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex items-center gap-2 px-2">
            <Switch
                checked={mode === "hard"}
                onCheckedChange={handleHardMode}
                className="data-[state=checked]:bg-red-500"
            />
            <Label className="text-sm cursor-pointer select-none">
                Hard Mode
            </Label>
        </div>
    );
}; 