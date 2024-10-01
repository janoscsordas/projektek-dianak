import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

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
        <header className="w-full fixed top-0 left-0 p-5 bg-white text-black">
            <nav className="w-full lg:w-1/2 mx-auto flex items-center lg:items-start justify-between">
                <Link href="/" className="">
                    <h2 className="tracking-widest lg:text-center text-xl font-bold select-none">Hollóvár</h2>
                    <p className="text-md text-center select-none">A felfedezett vár</p>
                </Link>
                <div className="flex gap-5 mt-1 items-center">
                    <Link href="/programok" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Programok</Link>
                    <Link href="/nyitvatartas" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Nyitvatartás</Link>
                    <Link href="/kapcsolat" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Kapcsolat</Link>
                    <Link href="/arak" className="hover:text-lime-600 transition-colors duration-150 font-light select-none">Árak</Link>
                </div>
            </nav>
        </header>

        {/* main content */}
        <main className="min-h-screen w-full">
            {children}
        </main>
      </body>
    </html>
  );
}
