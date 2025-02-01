import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { Check, Plus } from "lucide-react";
import { useRef, useState } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "./command";
import { Input } from "./input";
import { Popover, PopoverAnchor, PopoverContent } from "./popover";
import { Skeleton } from "./skeleton";

export type AutocompleteOption = Record<"value" | "label", string> & Record<string, string>

type Props<T extends string> = {
    defaultValue?: T;
    onChange?: (value: T) => void;
    items: { value: T; label: string }[];
    isLoading?: boolean;
    emptyMessage?: string;
    placeholder?: string;
    onSearchChange?: (text: string) => void;
    onAddItem?: (value: string) => void;
};

export function AutoComplete<T extends string>({
    defaultValue = "" as T,
    onChange,
    items = [],
    isLoading,
    emptyMessage = "No items.",
    placeholder = "Search...",
    onSearchChange,
    onAddItem
}: Props<T>) {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const labels = items.reduce((acc, item) => {
        acc[item.value] = item.label;
        return acc;
    }, {} as Record<string, string>);

    const handleSearchChange = (text: string) => {
        setSearchText(text)
        onSearchChange?.(text)
    }

    const reset = () => {
        setInternalValue("" as T);
        setSearchText("");
        onChange?.("" as T);
    };

    const onInputBlur = () => {
        if (labels[internalValue] !== searchText) {
            reset();
        }
    };

    const onSelectItem = (inputValue: string) => {
        if (inputValue.startsWith("new:")) {
            const newValue = inputValue.replace("new:", "");
            onAddItem?.(newValue);
            reset();
        } else if (inputValue === internalValue) {
            reset();
        } else {
            setInternalValue(inputValue as T);
            setSearchText(labels[inputValue] ?? "");
            onChange?.(inputValue as T);
        }
        setOpen(false);
    };

    const hasExactMatch = items.some(
        item => item.label.toLowerCase() === searchText.toLowerCase()
    );

    const filteredItems = [...items];
    if (searchText && !hasExactMatch && onAddItem) {
        filteredItems.unshift({
            value: `new:${searchText}` as T,
            label: `New Topic: ${searchText}`
        });
    }

    return (
        <div className="flex items-center">
            <Popover open={open} onOpenChange={setOpen}>
                <Command shouldFilter={false}>
                    <PopoverAnchor asChild>
                        <CommandPrimitive.Input
                            ref={inputRef}
                            asChild
                            value={searchText}
                            onValueChange={handleSearchChange}
                            onKeyDown={(e) => setOpen(e.key !== "Escape")}
                            onMouseDown={() => setOpen((open) => !!searchText || !open)}
                            onFocus={() => setOpen(true)}
                            onBlur={onInputBlur}
                        >
                            <Input placeholder={placeholder} />
                        </CommandPrimitive.Input>
                    </PopoverAnchor>
                    {!open && <CommandList aria-hidden="true" className="hidden" />}
                    <PopoverContent
                        asChild
                        onOpenAutoFocus={(e) => e.preventDefault()}
                        onInteractOutside={(e) => {
                            if (
                                e.target instanceof Element &&
                                e.target.hasAttribute("cmdk-input")
                            ) {
                                e.preventDefault();
                            }
                        }}
                        className="w-(--radix-popover-trigger-width) p-0"
                    >
                        <CommandList>
                            {isLoading && (
                                <CommandPrimitive.Loading>
                                    <div className="p-1">
                                        <Skeleton className="h-6 w-full" />
                                    </div>
                                </CommandPrimitive.Loading>
                            )}
                            {filteredItems.length > 0 && !isLoading ? (
                                <CommandGroup>
                                    {filteredItems?.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                            onSelect={onSelectItem}
                                        >
                                            {option.value.startsWith("new:") ? (
                                                <Plus className="mr-2 h-4 w-4" />
                                            ) : (
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        internalValue === option.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                            )}
                                            {option.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            ) : null}
                            {!isLoading ? (
                                <CommandEmpty>{emptyMessage ?? "No items."}</CommandEmpty>
                            ) : null}
                        </CommandList>
                    </PopoverContent>
                </Command>
            </Popover>
        </div>
    );
}