export const colorList = [
    "red", "orange", "yellow", "lime", "green", "teal", "cyan", "blue", "indigo", "violet", "pink", "slate", "stone"
]


export const getTailwindColor = (color: string) => {
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
        case "pink":
            return "bg-pink-500"
        case "slate":
            return "bg-slate-500"
        case "stone":
            return "bg-stone-500"
        default:
            return "bg-gray-500"
    }
}
