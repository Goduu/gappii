import { LayoutDashboard, Users } from "lucide-react";
import { Route } from "lucide-react";
import { routes } from "@/lib/routes";

export const menuItems = [
    {
        title: "My Paths",
        url: routes.paths,
        icon: Route,
    },
    {
        title: "My Lessons",
        url: routes.mylessons,
        icon: LayoutDashboard,
    },
    {
        title: "Community",
        url: routes.community,
        icon: Users,
    },
] as const