import Image from "next/image";
import Link from "next/link";
import CastleSection from "./CastleSection";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
        <div className="w-full h-screen mx-auto pt-48 bg-hero_image bg-cover bg-center bg-no-repeat">
            <div className="backdrop-blur-sm h-full">
                <h1 className="animation text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-3 uppercase tracking-[0.2em]">Fedezd fel a Hollóvárat</h1>
                <p className="animation font-light text-lg tracking-wider text-center my-8">Sok Kaland és Utazás Vár Rád!</p>
                <Link href="/programok" className="animation select-none border-2 border-black bg-black text-white tracking-[0.175em] p-3 hover:bg-white hover:text-black transition-colors duration-200 mx-auto block w-max font-light">Programjaink</Link>
            </div>
        </div>

        <CastleSection />
    </section>
  );
}
