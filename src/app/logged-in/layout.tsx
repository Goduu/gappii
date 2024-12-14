import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";


export default function LoggedInLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative font-bold gap-4 flex flex-row">
            <AppSidebar />
            <SidebarTrigger />
            {children}
        </div>
    );
}