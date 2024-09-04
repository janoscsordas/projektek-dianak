import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import { Home, LogOut } from "lucide-react";
import Link from "next/link";

// component imports
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "FoodFlow",
  description: "FoodFlow, ahol minden adatot megtalálsz élelmiszereidről",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={GeistSans.className}>
            
        </body>
    </html>
  );
}
