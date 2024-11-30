import { icons } from 'lucide-react';
import { FC } from 'react';

type IconByNameProps = React.HTMLAttributes<HTMLDivElement> & {
    name: string
    size: number
}
export const IconByName: FC<IconByNameProps> = ({ name, size, className }) => {
    const LucideIcon = icons[name as keyof typeof icons];

    return <LucideIcon size={size} className={className} />;
};
