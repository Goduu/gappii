import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import { TooltipProvider } from "@/components/ui/tooltip";
import { TransitionProvider } from "@/components/loading-store";
import { Footer } from "@/components/home/footer";
import { LoggedInMenu } from "./loggedin-menu";
import { LoggedOutMenu } from "./loggedout-menu";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { routes } from "@/lib/routes";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 
        // Allows to check rerendering of components
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider
          signUpFallbackRedirectUrl={routes.dashboard}
        >
          <TransitionProvider>
            <TooltipProvider>
              <Toaster />
              <div className="items-center justify-items-center max-w-screen w-screen bg-gradient-to-b from-slate-50 to-white p-4 md:p-8  min-h-screen md:min-w-[580px] pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center w-full">
                  <ApolloWrapper >
                    {children}
                    <Analytics />
                    <SpeedInsights />
                  </ApolloWrapper>
                  <div className="absolute left-4 top-4">
                    <SignedOut>
                      <LoggedOutMenu />
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
      </body>
    </html>
  );
}
