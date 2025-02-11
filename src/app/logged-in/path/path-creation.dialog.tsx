import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ColorPicker } from "@/components/ui/color-picker/color-picker";
import { IconPicker } from "@/components/ui/icon-picker/icon-picker";
import { IconMetadata, iconMetadata } from "@/components/ui/icon-picker/icon-list";
import { cn } from "@/lib/utils";
import { getTailwindBgColor500, getTailwindBorderColor600 } from "@/components/ui/color-picker/colors-list";
import { cloneElement } from "react";

const pathFormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    color: z.string().min(1, "Color is required"),
    icon: z.custom<IconMetadata>((val) => val !== null, "Icon is required"),
});

type PathFormValues = z.infer<typeof pathFormSchema>;

const defaultValues: PathFormValues = {
    title: "",
    color: "amber",
    icon: iconMetadata[0],
};

export function PathCreationDialog() {
    "use no memo"
    const form = useForm<PathFormValues>({
        resolver: zodResolver(pathFormSchema),
        defaultValues,
    });

    const color = form.watch("color");
    const icon = form.watch("icon");

    function onSubmit(data: PathFormValues) {
        console.log(data);
        // TODO: Call your mutation here
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">
                    <Plus size={16} className="mr-2" />
                    Add Path
                </Button>
            </DialogTrigger>
            <DialogContent>

                <DialogTitle>Create Path</DialogTitle>
                <DialogDescription>
                    Create a new path to organize your lessons.
                </DialogDescription>

                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex gap-4 w-full items-center justify-between">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="My Learning Path" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col md:flex-row gap-4 items-center px-4">
                                <div className={cn(
                                    "rounded-full flex items-center justify-center",
                                    "w-12 aspect-square border-b-8",
                                    getTailwindBgColor500(color),
                                    getTailwindBorderColor600(color)
                                )}>
                                    <div className="text-white w-6 aspect-square">
                                        {icon?.icon &&
                                            cloneElement(icon.icon, { className: "w-full h-full" })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">

                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Color</FormLabel>
                                        <FormControl>
                                            <ColorPicker
                                                selectedColor={field.value}
                                                onSelect={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex">

                            <FormField
                                control={form.control}
                                name="icon"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Icon</FormLabel>
                                        <FormControl>
                                            <IconPicker
                                                selectedIcon={field.value}
                                                onSelect={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit">Create Path</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    );
}