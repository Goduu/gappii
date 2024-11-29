import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Keyword } from '@/ogm-resolver/ogm-types';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';


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
    const visibleKeywords = keywords.slice(0, maxVisibleBadges);
    const hiddenKeywords = keywords.slice(maxVisibleBadges);

    return (
        <div className={`flex gap-1 flex-wrap overflow-hidden`}>
            <Badge variant="default" className='text-xs'>
                {level === 1 ? "Beginner" : level === 2 ? "Intermediate" : "Advanced"}
            </Badge>
            {visibleKeywords.map(keyword => (
                <Badge key={keyword.id} variant="secondary" className='text-xs'>
                    {keyword.name}
                </Badge>
            ))}

            {hiddenKeywords.length > 0 && (
                <Tooltip>
                    <TooltipTrigger>
                        <Badge variant="secondary">
                            +{hiddenKeywords.length}
                        </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                        <div className="max-w-xs">
                            <p className="font-medium mb-2">Additional Keywords:</p>
                            {hiddenKeywords.map(keyword => (
                                <div key={keyword.id} className="text-sm">
                                    {keyword.name}
                                </div>
                            ))}
                        </div>
                    </TooltipContent>
                </Tooltip>
            )}
        </div>
    );
};
