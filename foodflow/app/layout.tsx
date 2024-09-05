import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Image from "next/image";


export const metadata: Metadata = {
  title: "FoodFlow",
  description: "FoodFlow, ahol mindent megtalálsz élelmiszereidről",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
        <body className={GeistSans.className}>
            
            <main>
                {children}
            </main>
        </body>
    </html>
  );
}
