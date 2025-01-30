import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import { GappiiSpeechBubble } from './gappii-speech-bubble'
import clsx from 'clsx'
import { PulppiiHands } from '../pulppii-hands'
import { PulppiiBody } from '../pulppii-body'

type PulppiiBehindElementProps = {
    children: React.ReactNode;
    className?: string;
    message?: string;
    showMessage?: boolean;
    pulppiiPosition?: {
        top?: string;
        right?: string;
        scale?: number;
    };
}

export const PulppiiBehindElement: FC<PulppiiBehindElementProps> = ({
    children,
    className,
    message,
    showMessage = false,
    pulppiiPosition = {
        top: '-1.4rem',
        right: '-0.8rem',
        scale: 1
    }
}) => {
    return (
        <div className={cn('relative h-full overflow-x-hidden', className)}>
            {/* Gappii Container with Group */}
            <div className="absolute inset-0 group">
                {/* Body - Behind Card */}
                <div
                    className="absolute"
                    style={{
                        top: pulppiiPosition.top,
                        right: pulppiiPosition.right,
                        transform: `scale(${pulppiiPosition.scale})`,
                        width: '3rem',
                        height: '3rem',
                        zIndex: 0
                    }}
                >
                    <div className="absolute w-full h-full ease-in-out duration-700">
                        <PulppiiBody />
                    </div>
                </div>

                {/* Hands and Speech Bubble - Front Layer */}
                <div
                    className="absolute"
                    style={{
                        top: pulppiiPosition.top,
                        right: pulppiiPosition.right,
                        transform: `scale(${pulppiiPosition.scale})`,
                        width: '3rem',
                        height: '3rem',
                        zIndex: 2
                    }}
                >
                    <PulppiiHands />
                    <div className="absolute w-full h-full top-[1.70rem]" >
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
