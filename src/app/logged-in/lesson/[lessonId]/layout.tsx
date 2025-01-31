import { ReactNode } from "react";


export default function LoggedInLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full items-center justify-center px-4 md:px-16">
            <div className="w-full flex flex-col gap-10 items-center md:items-start">
                {children}
            </div>
        </div>
    );
}