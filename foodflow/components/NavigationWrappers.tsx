"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"
import Logo from "./logo.ico"
import { CalculatorIcon, HeartPulseIcon, House, LogOutIcon, NewspaperIcon, Search, ShoppingBasketIcon } from "lucide-react"

// component imports
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Sidebar() {
    const pathName = usePathname()

    return (
        <aside className="w-20 md:min-w-20 md:max-w-20 bg-black">
            <div className="h-16 border-b border-border flex justify-center items-center px-2 md:px-0">
                <Image src={Logo} alt="logo" width={42} height={42} />
            </div>
            <nav className="h-[calc(100vh-4rem)] flex flex-col justify-between items-center gap-6 py-6 overflow-y-scroll no-scrollbar px-2 md:px-0">
                <div className="flex flex-col gap-6 justify-between items-center">
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/" className={`sidebar-item ${pathName === "/" ? "bg-primary hover:opacity-85 transition-opacity duration-100" : "hover:bg-zinc-600"}`}>
                                <House className="w-5 h-5" strokeWidth={1.75} color="white" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p className="capitalize">Kezdőlap</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/groceries" className={`sidebar-item ${pathName === "/groceries" ? "bg-primary hover:opacity-85 transition-opacity duration-100" : "hover:bg-zinc-600"}`}>
                                <ShoppingBasketIcon className="w-5 h-5" strokeWidth={1.75} color="white" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p className="capitalize">Élelmiszerek</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/calculator" className={`sidebar-item ${pathName === "/calculator" ? "bg-primary hover:opacity-85" : "hover:bg-zinc-600"}`}>
                                <CalculatorIcon className="w-5 h-5" strokeWidth={1.75} color="white" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p className="capitalize">BMI Kalkulátor</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/healthy-lifestyle" className={`sidebar-item ${pathName === "/healthy-lifestyle" ? "bg-primary hover:opacity-85" : "hover:bg-zinc-600"}`}>
                                <HeartPulseIcon className="w-5 h-5" strokeWidth={1.75} color="white" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p className="capitalize">Egészséges életmódszerek</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/news" className={`sidebar-item ${pathName === "/news" ? "bg-primary hover:opacity-85" : "hover:bg-zinc-600"}`}>
                                <NewspaperIcon className="w-5 h-5" strokeWidth={1.75} color="white" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p className="capitalize">Hírek</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </nav>
        </aside>
    )
}

export function Navbar() {
    const [query, setQuery] = useState<string>('')
    const router = useRouter()

    // handling search
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query.trim()) {
            // push user to /search route
            router.push(`/search?q=${encodeURIComponent(query)}`)
            setQuery("")
        }
    }

    return (
        <header className="w-full min-h-16 max-h-16 bg-background border-b border-border flex justify-between items-center px-6 gap-4 sm:gap-0">
            <div className="flex gap-2">
                <h1 className="hidden sm:block text-[1.75rem] font-extrabold bg-gradient-to-tr from-primary to-green-600 bg-clip-text text-transparent capitalize">FoodFlow</h1>
                <span className="text-[1.75rem] inline-block hover:animate-spin-once hover:cursor-not-allowed">🥪</span>
            </div>
            <div>
                <form className="flex gap-2" onSubmit={handleSearch}>
                    <Input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Élelmiszer Kerésése..."
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button type="submit" className="bg-background border border-border hover:bg-secondary">
                        <Search className="w-5 h-5" />
                    </Button>
                </form>
            </div>
        </header>
    )
}
