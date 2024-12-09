import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from '@clerk/nextjs'
import { TooltipProvider } from "@/components/ui/tooltip";
import { TransitionProvider } from "@/components/loading-store";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gappii",
  description: "FIll the gap and learn everything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <ClerkProvider>
            <TransitionProvider>
              <TooltipProvider>
                <Toaster />
                <div className="items-center justify-items-center max-w-screen md:min-w-[580px] pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
                  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
                    <ApolloWrapper >
                      {children}
                    </ApolloWrapper>
                  </main>
                  <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                  </footer>
                </div>
              </TooltipProvider>
            </TransitionProvider>
          </ClerkProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
