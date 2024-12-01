
import { Command as CommandPrimitive } from "cmdk"
import { useState, useRef, useCallback, type KeyboardEvent } from "react"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { Skeleton } from "./skeleton"

export type Option = Record<"value" | "label", string> & Record<string, string>

type AutoCompleteProps = {
    options: Option[]
    emptyMessage: string
    value?: Option
    onValueChange?: (value: Option) => void
    onAddOption?: (value: string) => void
    isLoading?: boolean
    disabled?: boolean
    placeholder?: string
}

export const AutoComplete = ({
    options,
    placeholder,
    emptyMessage,
    value,
    onValueChange,
    onAddOption,
    disabled,
    isLoading = false,
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
            if (event.key === "Enter") {
                if (input.value !== "") {
                    const optionToSelect = options.find(
                        (option) => option.label === input.value,
                    )
                    if (optionToSelect) {
                        setSelected(optionToSelect)
                        onValueChange?.(optionToSelect)
                    } else {
                        event.preventDefault()
                        onAddOption?.(input.value)
                    }
                }
            }
            if (event.key === "Escape") {
                input.blur()
            }
        },
        [isOpen, options, onValueChange],
    )

    // const isNewValue = options.find(option => option.label === inputValue) ? false : true

    const handleBlur = useCallback(() => {
        setOpen(false)
        // setInputValue(selected?.label)
    }, [selected])

    const handleSelectOption = useCallback(
        (selectedOption: Option) => {
            setInputValue('')

            setSelected(selectedOption)
            onValueChange?.(selectedOption)

            // This is a hack to prevent the input from being focused after the user selects an option
            // We can call this hack: "The next tick"
            setTimeout(() => {
                inputRef?.current?.blur()
            }, 0)
        },
        [onValueChange],
    )

    return (
        <CommandPrimitive onKeyDown={handleKeyDown}>
            <div>
                <CommandInput
                    ref={inputRef}
                    value={inputValue}
                    onValueChange={isLoading ? undefined : setInputValue}
                    onBlur={handleBlur}
                    onFocus={() => setOpen(true)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="text-base"
                />
            </div>
            <div className="relative mt-1">
                <div
                    className={cn(
                        "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none",
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
                        {options.length > 0 && !isLoading ? (
                            <CommandGroup>
                                {inputValue !== "" &&
                                    (options.find(option => option.label === inputRef.current?.value) ? false : true)
                                &&
                                <CommandItem
                                    onMouseDown={(event) => {
                                        event.preventDefault()
                                        event.stopPropagation()
                                    }}
                                    onSelect={() => {
                                        onAddOption?.(inputValue)
                                    }}
                                    className="flex w-full items-center gap-2"
                                >
                                    New Topic: {inputValue}
                                </CommandItem>

                                }
                                {options.map((option) => {
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
                        {!isLoading && !inputRef.current?.value ? (
                            <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                                {emptyMessage}
                            </CommandPrimitive.Empty>
                        ) : !isLoading ?
                            <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                                New topic: {inputRef.current?.value}
                            </CommandPrimitive.Empty>
                            :
                            null}
                    </CommandList>
                </div>
            </div>
        </CommandPrimitive >
    )
}