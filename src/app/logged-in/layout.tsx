import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";


export default function LoggedInLayout({ children }: { children: ReactNode }) {
    return (
        <div className="font-bold gap-4 flex flex-col">
            <AppSidebar />
            <SidebarTrigger />
            {children}
        </div>
    );
}