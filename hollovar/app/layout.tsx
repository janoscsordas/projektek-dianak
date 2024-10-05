import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Hollóvár",
  description: "Felfedezett Hollóvárat, most te is felfedezheted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${GeistSans.className} antialiased`}
      >
        {/* navigation wrapper */}
        <header className="w-full absolute top-0 left-0 p-4 bg-white text-black z-50">
            <nav className="w-full lg:w-1/2 mx-auto flex items-center lg:items-start justify-between">
                <Link href="/" className="">
                    <h2 className="tracking-widest lg:text-center text-xl font-bold select-none">Hollóvár</h2>
                    <p className="text-md text-center select-none">A felfedezett vár</p>
                </Link>
                <div className="hidden sm:flex gap-5 mt-1 items-center">
                    <Link href="/programok" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Programok</Link>
                    <Link href="/nyitvatartas" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Nyitvatartás</Link>
                    <Link href="/kapcsolat" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Kapcsolat</Link>
                    <Link href="/arak" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Árak</Link>
                </div>
                <div className="block sm:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost">
                                <HamburgerMenuIcon className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-left pl-2">Menü</SheetTitle>
                            </SheetHeader>
                                <div className="mt-10 grid gap-2">
                                    <SheetClose asChild>
                                        <Link href="/" className="hover:bg-gray-800 hover:text-white p-2 rounded-lg transition-colors duration-150 select-none">Kezdőlap</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/programok" className="hover:bg-gray-800 hover:text-white p-2 rounded-lg transition-colors duration-150 select-none">Programok</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/nyitvatartas" className="hover:bg-gray-800 hover:text-white p-2 rounded-lg transition-colors duration-150 font-light select-none">Nyitvatartás</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/kapcsolat" className="hover:bg-gray-800 hover:text-white p-2 rounded-lg transition-colors duration-150 font-light select-none">Kapcsolat</Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/arak" className="hover:bg-gray-800 hover:text-white p-2 rounded-lg transition-colors duration-150 font-light select-none">Árak</Link>
                                    </SheetClose>
                                </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>

        {/* main content */}
        <main className="min-h-screen w-full">
            {children}
        </main>

        {/* footer content */}
        <footer className="w-full text-center">
            <p className="text-gray-500">Hollóvár Inc. 2024 &copy; Minden jog fenntartva.</p>
        </footer>
      </body>
    </html>
  );
}
