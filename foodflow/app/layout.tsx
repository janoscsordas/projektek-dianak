import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";

// component imports
import { TooltipProvider } from "@/components/ui/tooltip";
import NavigationWrapper from "@/components/dashboard/NavigationWrapper";
import MobileNavigationWrapper from "@/components/dashboard/MobileNavigationWrapper";

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
    <html lang="hu">
        <body className={GeistSans.className}>
            <TooltipProvider>
                {/* main navigation wrapper */}
                <NavigationWrapper />

                {/* mobile navigation wrapper */}
                <MobileNavigationWrapper />

                {/* main content wrapper */}
                <main className="min-h-screen w-full bg-mainbg sm:pl-[4.5rem] py-4 2xl:py-6">
                    {children}
                </main>
            </TooltipProvider>
        </body>
    </html>
  );
}
