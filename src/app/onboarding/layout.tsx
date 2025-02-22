import { LogoText } from '@/components/logo-text'

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex w-full items-center justify-center px-4 md:px-16">
            <div className="w-full flex flex-col gap-10 items-center md:items-start">
                <LogoText />
                {children}
            </div>
        </div>
    )
}