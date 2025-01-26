import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const HardModeSwitch = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);
    const isHardMode = params.get('mode') === 'hard';

    const handleHardMode = () => {
        if (!isHardMode) {
            params.set('mode', 'hard');
        } else {
            params.delete('mode');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2 px-2">
            <Switch
                checked={isHardMode}
                onCheckedChange={handleHardMode}
                className="data-[state=checked]:bg-red-500"
            />
            <Label className="text-sm cursor-pointer select-none">
                Hard Mode
            </Label>
        </div>
    );
}; 