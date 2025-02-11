import { Lesson } from "@/ogm-types"

export type PathStone = {
    id: string
    title: string
    lessons: Partial<Lesson>[]
}