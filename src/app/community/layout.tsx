import { LogoText } from "@/components/logo-text";
import { ReactNode } from "react";


export default function LoggedOutLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full items-center justify-center px-4 md:px-16">
            <div className="w-full flex flex-col gap-10 items-center md:items-start">
                <LogoText className="w-full h-full"/>
                {children}
            </div>
        </div>
    );
}