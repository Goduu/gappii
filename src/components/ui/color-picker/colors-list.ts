export const colorList = [
    "red", "orange", "yellow", "lime", "green", "emerald", "teal", "cyan", "blue", "indigo", "violet", "fuchsia", "pink", "slate","zinc", "stone", 
] as const


export const getTailwindBgColor500 = (color: string) => {
    switch (color) {
        case "red":
            return "bg-red-500"
        case "orange":
            return "bg-orange-500"
        case "yellow":
            return "bg-yellow-500"
        case "lime":
            return "bg-lime-500"
        case "green":
            return "bg-green-500"
        case "emerald":
            return "bg-emerald-500"
        case "teal":
            return "bg-teal-500"
        case "cyan":
            return "bg-cyan-500"
        case "blue":
            return "bg-blue-500"
        case "indigo":
            return "bg-indigo-500"
        case "violet":
            return "bg-purple-500"
        case "fuchsia":
            return "bg-fuchsia-500"
        case "pink":
            return "bg-pink-500"
        case "slate":
            return "bg-slate-500"
        case "zinc":
            return "bg-zinc-500"
        case "stone":
            return "bg-stone-500"
        default:
            return "bg-gray-500"
    }
}
export const getTailwindBorderColor600 = (color: string) => {
    switch (color) {
        case "red":
            return "border-red-600"
        case "orange":
            return "border-orange-600"
        case "yellow":
            return "border-yellow-600"
        case "lime":
            return "border-lime-600"
        case "green":
            return "border-green-600"
        case "emerald":
            return "border-emerald-600"
        case "teal":
            return "border-teal-600"
        case "cyan":
            return "border-cyan-600"
        case "blue":
            return "border-blue-600"
        case "indigo":
            return "border-indigo-600"
        case "violet":
            return "border-purple-600"
        case "fuchsia":
            return "border-fuchsia-600"
        case "pink":
            return "border-pink-600"
        case "slate":
            return "border-slate-600"
        case "zinc":
            return "border-zinc-600"
        case "stone":
            return "border-stone-600"
        default:
            return "border-gray-600"
    }

}
