import { ReactNode } from "react";
import SideMenu from "./sidemenu";

type LoggedInLayoutProps = {
    children: ReactNode
}
export default function LoggedInLayout({ children }: LoggedInLayoutProps) {
    return (
        <div className="flex">
            <SideMenu />
            <main className="flex-1 px-8 pt-10 ml-0 md:ml-64">
                {children}
            </main>
        </div>
    );
}