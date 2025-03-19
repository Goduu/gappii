import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "@/components/ui/breadcrumb"
import { Fragment, useMemo } from "react"
import { processStates } from "./CanvasContext"
import { StateValue } from "./types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const ProcessBreadcrumb = ({ activeState }: { activeState: StateValue }) => {
    const { visibleSteps, hiddenSteps } = useMemo(() => {
        const activeIndex = processStates.findIndex(state => state.value === activeState);
        const totalSteps = processStates.length;

        if (activeIndex <= 1) {
            return {
                visibleSteps: processStates.slice(0, 3),
                hiddenSteps: processStates.slice(3)
            };
        } else if (activeIndex >= totalSteps - 2) {
            return {
                visibleSteps: processStates.slice(-3),
                hiddenSteps: processStates.slice(0, -3)
            };
        } else {
            return {
                visibleSteps: processStates.slice(activeIndex - 1, activeIndex + 2),
                hiddenSteps: [
                    ...processStates.slice(0, activeIndex - 1),
                    ...processStates.slice(activeIndex + 2)
                ]
            };
        }
    }, [activeState]);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {visibleSteps.map((process, index) => (
                    <Fragment key={process.value}>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                            {activeState === process.value ? (
                                <BreadcrumbPage>{process.label}</BreadcrumbPage>
                            ) : (
                                process.label
                            )}
                        </BreadcrumbItem>
                    </Fragment>
                ))}
                {hiddenSteps.length > 0 && (
                    <>
                        <BreadcrumbSeparator />
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <BreadcrumbEllipsis />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="flex flex-col gap-1">
                                        {hiddenSteps.map(step => (
                                            <div key={step.value} className="text-sm">
                                                {step.label}
                                            </div>
                                        ))}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

