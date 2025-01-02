import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Keyword } from '@/ogm-resolver/ogm-types';
import Marquee from 'react-fast-marquee';


interface KeywordsBadgeDisplayProps {
    keywords: Keyword[];
    level: number;
    maxWidth?: string; // Optional prop to set max width
    maxVisibleBadges?: number; // Optional prop to control number of visible badges
}

export const KeywordsBadgeDisplay: React.FC<KeywordsBadgeDisplayProps> = ({
    keywords,
    level,
    maxVisibleBadges = 3
}) => {
    // Determine which keywords to display and which to hide

    return (
        <div className='flex flex-col items-center relative'>
            <div className='w-10 absolute -left-5 h-10 -top-2 bg-white z-10 blur-sm '></div>
            <Marquee className='overflow-visible' speed={20} pauseOnHover={true}>
                <div className={`flex gap-2 overflow-hidden`}>
                    <Badge variant="default" className='text-xs'>
                        {level === 1 ? "Beginner" : level === 2 ? "Intermediate" : "Advanced"}
                    </Badge>
                    {keywords.map(keyword => (
                        <Badge key={keyword.id} variant="secondary" className='text-xs'>
                            {keyword.name}
                        </Badge>
                    ))}
                </div>
            </Marquee>
            <div className='w-10 absolute -right-5 h-10 -top-2 bg-white z-10 blur-sm '></div>
        </div>
    );
};
