import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PageMenu } from "@/components/page-menu/page-menu";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { Logo } from "@/components/logo";
import { redirect } from "next/navigation";

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
  title: "Health Note",
  description: "Health Note is a note taking app for health care professionals.",
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
        <div className="flex flex-col gap-8 items-center justify-center max-w-screen md:min-w-[580px] p-8">
          <Logo className="w-32 h-fit cursor-pointer" />
          <PageMenu />
        </div>
        <div className="items-center justify-items-center max-w-screen md:min-w-[580px] pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <ApolloWrapper >
              {children}
            </ApolloWrapper>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

          </footer>
        </div>
      </body>
    </html>
  );
}
