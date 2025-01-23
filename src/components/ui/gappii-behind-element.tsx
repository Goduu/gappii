import React, { FC } from 'react'
import { GappiiBody } from '../gappii-body'
import { GappiiHands } from '../gappii-hands'
import { cn } from '@/lib/utils'
import { GappiiSpeechBubble } from './gappii-speech-bubble'
import clsx from 'clsx'

type GappiiBehindElementProps = {
    children: React.ReactNode;
    className?: string;
    message?: string;
    showMessage?: boolean;
    gappiiPosition?: {
        top?: string;
        right?: string;
        scale?: number;
    };
}

export const GappiiBehindElement: FC<GappiiBehindElementProps> = ({
    children,
    className,
    message,
    showMessage = false,
    gappiiPosition = {
        top: '-2.27rem',
        right: '0.5rem',
        scale: 1
    }
}) => {
    return (
        <div className={cn('relative h-full', className)}>
            {/* Gappii Container with Group */}
            <div className="absolute inset-0 group">
                {/* Body - Behind Card */}
                <div
                    className="absolute"
                    style={{
                        top: gappiiPosition.top,
                        right: gappiiPosition.right,
                        transform: `scale(${gappiiPosition.scale})`,
                        width: '2.5rem',
                        height: '2.5rem',
                        zIndex: 0
                    }}
                >
                    <div
                        className={clsx(
                            "absolute w-full h-full ease-in-out duration-700",
                            showMessage ? 'top-1' : 'top-5 group-hover:top-1'
                        )}
                    >
                        <GappiiBody />
                    </div>
                </div>

                {/* Hands and Speech Bubble - Front Layer */}
                <div
                    className="absolute"
                    style={{
                        top: gappiiPosition.top,
                        right: gappiiPosition.right,
                        transform: `scale(${gappiiPosition.scale})`,
                        width: '2.5rem',
                        height: '2.5rem',
                        zIndex: 50
                    }}
                >
                    <GappiiHands />
                    <div className="absolute w-full h-full" style={{ zIndex: 51 }}>
                        <GappiiSpeechBubble
                            message={message}
                            show={showMessage}
                        />
                    </div>
                </div>
            </div>

            {/* Card */}
            {children}
        </div>
    )
}
