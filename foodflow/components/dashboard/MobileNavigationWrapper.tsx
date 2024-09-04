"use client"

import { Beef, Calculator, Home, Salad } from "lucide-react"
import Link from "next/link"

export default function MobileNavigationWrapper() {
    return (
      <div className="fixed sm:hidden bottom-0 left-0 w-full bg-orange-800 flex justify-center items-center gap-10 px-4 py-3 rounded-t-xl">
          <Link href="/" className="w-max h-9 flex flex-col justify-center items-center text-white">
              <Home className="w-7 h-7" strokeWidth={1.75} />
              <span className="text-[0.6rem]">Kezdőlap</span>
          </Link>
          <Link href="/" className="w-max h-9 flex flex-col justify-center items-center text-white">
              <Salad className="w-7 h-7" strokeWidth={1.75} />
              <span className="text-[0.6rem]">Élelmiszerek</span>
          </Link>
          <Link href="/" className="w-max h-9 flex flex-col justify-center items-center text-white">
              <Calculator className="w-7 h-7" strokeWidth={1.75} />
              <span className="text-[0.6rem]">Kalkulátor</span>
          </Link>
          <Link href="/" className="w-max h-9 flex flex-col justify-center items-center text-white">
              <Beef className="w-7 h-7" strokeWidth={1.75} />
              <span className="text-[0.6rem]">Kalória</span>
          </Link>
      </div>
    )
}
