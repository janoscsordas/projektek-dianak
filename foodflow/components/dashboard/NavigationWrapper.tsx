"use client"

import { Beef, Calculator, Home, LogOut, Salad } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// component imports
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button";
import { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function NavigationWrapper() {
    const pathName = usePathname()

    return (
        <aside className="hidden fixed overflow-y-scroll no-scrollbar h-screen inset-0 px-3 py-4 2xl:px-7 2xl:py-5 w-12 sm:flex flex-col gap-3 justify-between items-center bg-muted">
            <nav className="flex flex-col gap-3">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className="aside-main flex items-center justify-center rounded-lg bg-green-700 transition-colors">
                            <Home className="aside-icon" strokeWidth={1.75} color="white" />
                            <span className="sr-only">Kezdőlap</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-green-700">
                        <p>Kezdőlap</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className={`${pathName === "/groceries" ? "active" : ""} aside-main flex items-center justify-center rounded-lg hover:bg-secondary transition-colors`}>
                            <Salad className="aside-icon" strokeWidth={1.75} />
                            <span className="sr-only">Élelmiszerek</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>Élelmiszerek</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className={`${pathName === "/calculate-bmi" ? "active" : ""} aside-main flex items-center justify-center rounded-lg hover:bg-secondary transition-colors`}>
                            <Calculator className="aside-icon" strokeWidth={1.75} />
                            <span className="sr-only">BMI Kalkulátor</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>BMI Kalkulátor</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className={`${pathName === "/calories" ? "active" : ""} aside-main flex items-center justify-center rounded-lg hover:bg-secondary transition-colors`}>
                            <Beef className="aside-icon" strokeWidth={1.75} />
                            <span className="sr-only">Kalória Bevitel</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>Kalória Bevitel</p>
                    </TooltipContent>
                </Tooltip>
            </nav>

            <AlertDialog>
                <AlertDialogTrigger>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span
                                className="aside-main cursor-pointer flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-500 transition-colors">
                                <LogOut className="aside-icon" color="white" strokeWidth={1.75} />
                                <span className="sr-only">Kilépés</span>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-red-500">
                            <p>Kilépés</p>
                        </TooltipContent>
                    </Tooltip>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Biztos ki akar lépni?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Ha kilép, hiányozni fog NAGYON. :(
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Maradok</AlertDialogCancel>
                    <AlertDialogAction onClick={() => window.close()}>Kilépek</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </aside>
    )
}
