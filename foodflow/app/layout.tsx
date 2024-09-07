import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";


// component imports
import { Navbar, Sidebar } from "@/components/NavigationWrappers";
import { TooltipProvider } from "@/components/ui/tooltip";

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
            <TooltipProvider>
                <main className="flex h-screen">
                    {/* Sidebar */}
                    <Sidebar />

                    <div className="flex flex-col flex-grow">
                        {/* Navbar */}
                        <Navbar />

                        {/* Content Wrapper */}
                        <div className="flex-grow overflow-y-scroll bg-gray-100 py-4 px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </TooltipProvider>
        </body>
    </html>
  );
}
