import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
