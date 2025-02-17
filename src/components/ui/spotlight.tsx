'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon, MessageCircleQuestion } from 'lucide-react'
import { Toggle } from './toggle'
import { usePathname } from 'next/navigation'
import { PageSteps } from '@/app/onboarding/steps'


interface SpotlightProps {
    children: React.ReactNode
    steps: PageSteps
}

type Position = 'top' | 'right' | 'bottom' | 'left'

const MIN_SPACE_REQUIRED = 150

export const Spotlight: React.FC<SpotlightProps> = ({
    children,
    steps,
}) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [elementPosition, setElementPosition] = useState<DOMRect | null>(null)
    const [popoverPosition, setPopoverPosition] = useState<Position>('right')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [active, setActive] = useState<boolean | undefined>(undefined)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = React.useRef<HTMLDivElement>(null)
    const [isPositioned, setIsPositioned] = useState(false)
    const pathname = usePathname();

    const step = steps[pathname]?.[currentStep] ?? steps[pathname]?.[0]
    const isLastStep = currentStep >= steps[pathname]?.length - 1

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!isLastStep) {
            // step?.onNext?.()
            setCurrentStep(prev => prev + 1)
        }
    }

    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (currentStep > 0) {
            // step?.onPrevious?.()
            setCurrentStep(prev => prev - 1)
        }
    }

    useEffect(() => {
        if (active === undefined) {
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('spotlightActive')
                setActive(saved ? JSON.parse(saved) : false)
            }
        }

        if (!active || !step?.selector) {
            setIsPositioned(false)
            return
        }

        setIsTransitioning(true)
        setIsPositioned(false)

        const updatePosition = () => {
            const element = document.querySelector(step.selector) as HTMLElement
            if (element) {
                element.focus()
                const rect = element.getBoundingClientRect()
                setElementPosition(rect)

                const spaces = [
                    {
                        position: 'right' as Position,
                        space: window.innerWidth - rect.right - 20,
                        viable: window.innerWidth - rect.right > MIN_SPACE_REQUIRED
                    },
                    {
                        position: 'left' as Position,
                        space: rect.left - 20,
                        viable: rect.left > MIN_SPACE_REQUIRED
                    },
                    {
                        position: 'top' as Position,
                        space: rect.top - 20,
                        viable: rect.top > contentHeight + 40
                    },
                    {
                        position: 'bottom' as Position,
                        space: window.innerHeight - rect.bottom - 20,
                        viable: window.innerHeight - rect.bottom > contentHeight + 40
                    }
                ]

                const viablePosition = spaces.find(pos => pos.viable)
                const bestPosition = viablePosition
                    ? viablePosition.position
                    : spaces.reduce((prev, curr) => {
                        const prevSpace = prev.position === 'top' || prev.position === 'bottom'
                            ? prev.space - contentHeight
                            : prev.space
                        const currSpace = curr.position === 'top' || curr.position === 'bottom'
                            ? curr.space - contentHeight
                            : curr.space
                        return currSpace > prevSpace ? curr : prev
                    }).position

                setPopoverPosition(bestPosition)

                setIsPositioned(true)

                setTimeout(() => {
                    setIsTransitioning(false)
                }, 50)

                if (bestPosition === 'bottom' && rect.bottom + contentHeight > window.innerHeight) {
                    window.scrollBy({
                        top: rect.bottom + contentHeight - window.innerHeight + 40,
                        behavior: 'smooth'
                    })
                } else if (bestPosition === 'top' && rect.top - contentHeight < 0) {
                    window.scrollBy({
                        top: rect.top - contentHeight - 40,
                        behavior: 'smooth'
                    })
                }
            }
        }

        updatePosition()

        window.addEventListener('scroll', updatePosition, true)
        window.addEventListener('resize', updatePosition)

        const observer = new ResizeObserver(updatePosition)
        const element = document.querySelector(step.selector)
        if (element) observer.observe(element)
        localStorage.setItem('spotlightActive', JSON.stringify(active))

        return () => {
            window.removeEventListener('scroll', updatePosition, true)
            window.removeEventListener('resize', updatePosition)
            observer.disconnect()
        }
    }, [step?.selector, active, contentHeight, pathname, steps])

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight)
        }
    }, [step?.instructionContent])

    useEffect(() => {
        if (!active || !steps[pathname] || !step?.autoPassIfNextSelectorFound || !steps[pathname][currentStep + 1]) return

        const nextStep = steps[pathname][currentStep + 1]
        if (!nextStep?.selector) return

        const checkNextSelector = () => {
            const nextElement = document.querySelector(nextStep.selector)
            if (nextElement) {
                const rect = nextElement.getBoundingClientRect()
                const isVisible = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= window.innerHeight &&
                    rect.right <= window.innerWidth
                )

                if (isVisible) {
                    setCurrentStep(prev => prev + 1)
                }
            }
        }

        checkNextSelector()

        const observer = new MutationObserver(checkNextSelector)
        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        window.addEventListener('scroll', checkNextSelector, true)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', checkNextSelector, true)
        }
    }, [active, currentStep, pathname, steps, step?.autoPassIfNextSelectorFound])

    const showSpotlight = elementPosition && active && step && isPositioned

    return (
        <div>
            {showSpotlight && (
                <div className="fixed inset-0 z-50 pointer-events-none">
                    {/* Highlight border */}
                    <div
                        className={cn(
                            "fixed border-dotted border-2 rounded-lg border-amber-500 transition-all duration-300",
                            (!isPositioned || isTransitioning) ? "opacity-0" : "opacity-100"
                        )}
                        style={{
                            top: elementPosition.top - 10,
                            left: elementPosition.left - 10,
                            width: elementPosition.width + 20,
                            height: elementPosition.height + 20,
                        }}
                    />

                    {/* Content */}
                    <div
                        ref={contentRef}
                        className={cn(
                            "fixed bg-background rounded-lg shadow-lg pointer-events-auto",
                            "max-w-[min(calc(100vw-40px),300px)] transition-all duration-100",
                            (!isPositioned || isTransitioning) ? "opacity-0" : "opacity-100"
                        )}
                        style={{
                            ...getContentPosition(elementPosition, popoverPosition, contentHeight)
                        }}
                    >
                        <div className="flex flex-col p-4 text-sm">
                            {step.instructionContent}
                        </div>
                        <div className="flex justify-between">
                            {/* Previous Button */}
                            <Button
                                disabled={currentStep === 0}
                                size="sm"
                                variant="ghost"
                                onClick={handlePrevious}
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Button>

                            {/* Next Button */}
                            <Button
                                disabled={isLastStep || step?.autoPassIfNextSelectorFound}
                                size="sm"
                                variant="ghost"
                                onClick={handleNext}
                            >
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {children}
            <Toggle
                id='ob-spotlight-toggle'
                title="Toggle Spotlight"
                variant="outline"
                onClick={() => setActive(prev => prev ? !prev : true)}
                className='fixed bottom-4 right-4 z-50 pointer-events-auto'
            >
                <MessageCircleQuestion className='w-6 h-6' /> {active ? 'On' : 'Off'}
            </Toggle>
        </div>
    )
}

const getContentPosition = (
    elementPosition: DOMRect,
    position: Position,
    contentHeight: number
) => {
    const offset = 20

    switch (position) {
        case 'top':
            return {
                left: elementPosition.left + elementPosition.width / 2,
                top: elementPosition.top - offset - contentHeight,
                transform: 'translateX(-50%)'
            }
        case 'right':
            return {
                left: elementPosition.right + offset,
                top: elementPosition.top + elementPosition.height / 2,
                transform: 'translateY(-50%)'
            }
        case 'bottom':
            return {
                left: elementPosition.left + elementPosition.width / 2,
                top: elementPosition.bottom + offset,
                transform: 'translateX(-50%)'
            }
        case 'left':
            return {
                left: elementPosition.left - offset,
                top: elementPosition.top + elementPosition.height / 2,
                transform: 'translate(-100%, -50%)'
            }
    }
} 