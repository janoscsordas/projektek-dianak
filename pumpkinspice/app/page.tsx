"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

export default function Home() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {

        ScrollTrigger.defaults({
            scroller: ".wrapper",
        })

        gsap.utils.toArray<HTMLElement>(".panel").forEach((panel, index) => {
            gsap.to(`.bullet-${index + 1}`, {
                background: "#fff",
                scrollTrigger: {
                    trigger: panel,
                    toggleActions: "play reverse play reverse",
                }
            })
        })
    })

  return (
    <>
        <div className="wrapper">
            <Navbar />
            <SideBar />

            <div className="fixed top-2/4 right-10 z-50 space-y-6">
                <div className="bg-white/25 size-2 rounded-full bullet-1"></div>
                <div className="bg-white/25 size-2 rounded-full bullet-2"></div>
                <div className="bg-white/25 size-2 rounded-full bullet-3"></div>
            </div>

            <Hero />
            <About />
            <Contact />
        </div>
    </>
  );
}
