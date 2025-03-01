import { colorList } from "@/components/ui/color-picker/colors-list"
import { z } from "zod"

export const pathSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(50, "Title must be less than 50 characters"),
  
  color: z.enum(colorList, {
    errorMap: () => ({ message: "Please select a valid color" })
  }),
  
  icon: z
    .string()
    .min(1, "Please select an icon")
})

export type PathFormValues = z.infer<typeof pathSchema> 