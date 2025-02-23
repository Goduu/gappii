import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TransitionProvider } from "@/components/loading-store";
import { Footer } from "@/components/home/footer";
import { LoggedInMenu } from "./loggedin-menu";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { SessionProvider } from "next-auth/react";

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
  description: "Fill the gap and learn everything!",
  openGraph: {
    type: 'website',
    title: 'Gappii - Learn Everything',
    description: 'Fill the gap and learn everything! Interactive learning platform for everyone.',
    url: 'https://www.gappii.com/',
    siteName: 'Gappii',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gappii - Interactive Learning Platform',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gappii - Learn Everything',
    description: 'Fill the gap and learn everything! Interactive learning platform for everyone.',
    images: ['/og-image.png'],
    creator: '@Goduu_',
  },
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode
  auth: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        {/* 
        // Allows to check rerendering of components
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col flex-1`}
      >
        <SessionProvider>
          <TransitionProvider>
            <TooltipProvider>
              <Toaster />
              <div className="items-center justify-items-center max-w-screen w-screen bg-linear-to-b from-slate-50 to-white p-4 md:p-8 md:min-w-[580px] pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center w-full">
                  <ApolloWrapper >
                    {children}
                    {auth}
                    <Analytics />
                    <SpeedInsights />
                  </ApolloWrapper>
                  <div className="absolute left-4 top-4">
                    {/* <LoggedOutMenu /> */}
                    <LoggedInMenu />
                  </div>
                </main>
              </div>
            </TooltipProvider>
          </TransitionProvider>
        </SessionProvider>
        <footer className="flex items-center justify-center mt-auto pb-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
