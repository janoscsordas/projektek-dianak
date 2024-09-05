import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function notFound() {
  return (
    <section className="w-full h-full flex justify-center items-center">
        <div>
            <h1 className="text-5xl text-center font-bold text-primary">404</h1>
            <h2 className="text-2xl text-center font-semibold">A keresett oldal nem található</h2>
            <p className="text-center text-gray-600">Eltévetdél? :(</p>
            <Link href="/" className="group block w-max mx-auto mt-10 p-3 border border-border rounded-md hover:bg-secondary">
                Vissza a főoldalra <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    </section>
  )
}
