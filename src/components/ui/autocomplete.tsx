import {
    CommandGroup,
    CommandItem,
    CommandList,
    CommandInput,
} from "./command"
import { Command as CommandPrimitive } from "cmdk"
import { useState, useRef, useCallback, type KeyboardEvent } from "react"

import { Skeleton } from "./skeleton"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export type Option = Record<"value" | "label", string> & Record<string, string>

type AutoCompleteProps = {
    options: Option[]
    emptyMessage: string
    value?: Option
    onValueChange?: (value: Option) => void
    isLoading?: boolean
    disabled?: boolean
    placeholder?: string
    onAddItem?: (value: string) => void;
    className?: string;
}

export const AutoComplete = ({
    options,
    placeholder,
    emptyMessage,
    value,
    onValueChange,
    disabled,
    isLoading = false,
    onAddItem,
    className
}: AutoCompleteProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState<Option>(value as Option)
    const [inputValue, setInputValue] = useState<string>(value?.label || "")

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const input = inputRef.current
            if (!input) {
                return
            }

            // Keep the options displayed when the user is typing
            if (!isOpen) {
                setOpen(true)
            }

            // This is not a default behaviour of the <input /> field
            if (event.key === "Enter" && input.value !== "") {
                const optionToSelect = options.find(
                    (option) => option.label === input.value,
                )
                if (optionToSelect) {
                    setSelected(optionToSelect)
                    onValueChange?.(optionToSelect)
                }
            }

            if (event.key === "Escape") {
                input.blur()
            }
        },
        [isOpen, options, onValueChange],
    )

    const handleBlur = useCallback(() => {
        setOpen(false)
        setInputValue(selected?.label)
    }, [selected])

    const handleSelectOption = useCallback(
        (selectedOption: Option) => {
            if (selectedOption.value.startsWith("new:")) {
                const newValue = selectedOption.value.replace("new:", "");
                onAddItem?.(newValue);
                setInputValue(newValue)
            } else {
                setInputValue(selectedOption.label)

                setSelected(selectedOption)
                onValueChange?.(selectedOption)

                // This is a hack to prevent the input from being focused after the user selects an option
                // We can call this hack: "The next tick"
                setTimeout(() => {
                    inputRef?.current?.blur()
                }, 0)
            }
        },
        [onValueChange, onAddItem],
    )

    const hasExactMatch = options.some(
        item => inputValue && item.label.toLowerCase() === inputValue.toLowerCase()
    );

    const filteredOptions = [...options];
    if (inputValue && !hasExactMatch && onAddItem) {
        filteredOptions.unshift({
            value: `new:${inputValue}`,
            label: `New Topic: ${inputValue}`
        });
    }

    return (
        <CommandPrimitive onKeyDown={handleKeyDown} className={className}>
            <div>
                <CommandInput
                    ref={inputRef}
                    value={inputValue}
                    onValueChange={isLoading ? undefined : setInputValue}
                    onBlur={handleBlur}
                    onFocus={() => setOpen(true)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="text-xs md:text-base"
                />
            </div>
            <div className="relative mt-1">
                <div
                    className={cn(
                        "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-hidden",
                        isOpen ? "block" : "hidden",
                    )}
                >
                    <CommandList className="rounded-lg ring-1 ring-slate-200">
                        {isLoading ? (
                            <CommandPrimitive.Loading>
                                <div className="p-1">
                                    <Skeleton className="h-8 w-full" />
                                </div>
                            </CommandPrimitive.Loading>
                        ) : null}
                        {filteredOptions.length > 0 && !isLoading ? (
                            <CommandGroup>
                                {filteredOptions.map((option) => {
                                    const isSelected = selected?.value === option.value
                                    return (
                                        <CommandItem
                                            key={option.value}
                                            value={option.label}
                                            onMouseDown={(event) => {
                                                event.preventDefault()
                                                event.stopPropagation()
                                            }}
                                            onSelect={() => handleSelectOption(option)}
                                            className={cn(
                                                "flex w-full items-center gap-2",
                                                !isSelected ? "pl-8" : null,
                                            )}
                                        >
                                            {isSelected ? <Check className="w-4" /> : null}
                                            {option.label}
                                        </CommandItem>
                                    )
                                })}
                            </CommandGroup>
                        ) : null}
                        {!isLoading ? (
                            <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                                {emptyMessage}
                            </CommandPrimitive.Empty>
                        ) : null}
                    </CommandList>
                </div>
            </div>
        </CommandPrimitive>
    )
}