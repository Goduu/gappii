import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { TooltipProvider } from "@/components/ui/tooltip";
import { TransitionProvider } from "@/components/loading-store";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/components/home/footer";
import { LogIn } from "lucide-react";
import { LoggedInMenu } from "./loggedin-menu";

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
                    <div className="absolute left-4 top-4">
                      <SignedOut>
                        <SignInButton mode="modal">
                          <div className="rounded-full aspect-square outline p-1 hover:bg-gray-100 cursor-pointer">
                            <LogIn size={18} />
                          </div>
                        </SignInButton>
                      </SignedOut>
                      <SignedIn>
                        <LoggedInMenu />
                      </SignedIn>
                    </div>
                  </main>
                  <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-4">
                    <Footer />
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
