import { ReactNode } from "react";


export default function LoggedInLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full items-center justify-center px-16 py-10">
            {children}
        </div>
    );
}