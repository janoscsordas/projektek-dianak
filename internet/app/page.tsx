import FlipWordsComponent from "@/components/FlipWords";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/TimeLine";

import { GeistSans } from "geist/font/sans";

export default function Home() {
  return (
    <main className={`${GeistSans.className} antialiased`}>
        <HeroSection />
        <Timeline />
        <FlipWordsComponent />
    </main>
  );
}
