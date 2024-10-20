import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MenuIcon } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pumpkin Spice Halloween",
  description: "Halloween Webpage for Pumpkinspice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.className} antialiased relative`}
      >
        <header className="bg-transparent absolute inset-0 w-full min-h-16 max-h-16 flex justify-between items-center px-6 gap-4 sm:gap-0">
            <h2 className="font-bold">Pumpkin Spice</h2>
            <button>
                <MenuIcon />
            </button>
        </header>
        {/* left aside */}
        <aside className="bg-transparent absolute left-0 top-16 min-w-16 max-w-16 h-[calc(100vh-4rem)] px-5 py-6 flex flex-col justify-between items-center">
            <button>
                <MenuIcon />
            </button>
            <div className="flex flex-col gap-4 justify-center items-center">
                <MenuIcon className="w-4 h-4" />
                <div className="w-[2px] h-24 bg-black rounded-full"></div>
                <MenuIcon className="w-4 h-4" />
            </div>
            <button>
                <MenuIcon />
            </button>
        </aside>
        <aside className="bg-transparent absolute right-0 top-16 min-w-16 max-w-16 h-[calc(100vh-4rem)] px-5 py-6 flex flex-col justify-center items-center gap-6">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
        </aside>

        {children}
      </body>
    </html>
  );
}
