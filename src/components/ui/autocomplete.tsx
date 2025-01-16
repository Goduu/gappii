import { Command as CommandPrimitive } from "cmdk"
import { useState, useCallback, type KeyboardEvent, RefObject } from "react"

import { Check, LoaderPinwheel } from "lucide-react"
import { cn } from "@/lib/utils"
import { CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { Skeleton } from "./skeleton"

export type AutocompleteOption = Record<"value" | "label", string> & Record<string, string>

type AutoCompleteProps = {
    inputRef?: RefObject<HTMLInputElement>
    className?: string
    options: AutocompleteOption[]
    emptyMessage: string
    value?: AutocompleteOption
    onValueChange?: (value: AutocompleteOption | null) => void
    onAddOption?: (value: string) => void
    isLoading?: boolean
    disabled?: boolean
    placeholder?: string
}

export const AutoComplete = ({
    inputRef,
    className,
    options,
    placeholder,
    emptyMessage,
    value,
    onValueChange,
    onAddOption,
    disabled,
    isLoading = false,
}: AutoCompleteProps) => {

    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState<AutocompleteOption | null>(value as AutocompleteOption || null)
    const [inputValue, setInputValue] = useState<string>(value?.label || "")

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (!inputRef) return
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
        [isOpen, options, onValueChange, inputRef, onAddOption],
    )

    const handleBlur = useCallback(() => {
        if (!selected && inputValue !== "") {
            setInputValue("")
        } else if (selected) {
            setInputValue(selected.label)
        }
        setOpen(false)
    }, [selected, inputValue])

    const handleSelectOption = useCallback(
        (selectedOption: AutocompleteOption) => {
            if (selectedOption.value === selected?.value) {
                setSelected(null)
                setInputValue("")
                onValueChange?.(null)
            } else {
                setSelected(selectedOption)
                setInputValue(selectedOption.label)
                onValueChange?.(selectedOption)
                setOpen(false)
            }

            setTimeout(() => {
                inputRef?.current?.blur()
            }, 0)
        },
        [inputRef, onValueChange, selected],
    )

    const handleInputChange = (search: string) => {
        if (isLoading) return
        setInputValue(search)
        setOpen(true)
    }

    return (
        <CommandPrimitive onKeyDown={handleKeyDown} className="w-full">
            <CommandInput
                ref={inputRef}
                value={inputValue}
                onValueChange={handleInputChange}
                onBlur={handleBlur}
                onFocus={() => setOpen(true)}
                placeholder={placeholder}
                disabled={disabled}
                className="text-base w-full"
            />
            <div className={`relative mt-1 ${className}`}>
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
                                    <Skeleton className="h-8 w-full" >
                                        <LoaderPinwheel className="w-8 h-8 px-2 animate-spin text-slate-400" />
                                    </Skeleton>
                                </div>
                            </CommandPrimitive.Loading>
                        ) : null}
                        {inputValue !== "" &&
                            !options.find(option => option.label === inputValue)
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
                        {options.length > 0 && !isLoading ? (
                            <CommandGroup>
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
                        ) :
                            !isLoading && !inputRef?.current?.value ? (
                                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                                    {emptyMessage}
                                </CommandPrimitive.Empty>
                            ) : null
                        }
                    </CommandList>
                </div>
            </div>
        </CommandPrimitive >
    )
}