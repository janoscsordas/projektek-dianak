import { notFound } from "next/navigation"

import { type Grocery } from "../GroceriesList"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

async function getGrocery(id: string) {
    const response = await fetch(`http://localhost:4000/groceries/${id}`, { next: { revalidate: 0 } })

    if (!response.ok) {
        return notFound()
    }

    const grocery: Grocery = await response.json()

    return grocery
}

export default async function GroceryPage({ params }: { params: { id: string } }) {
    const grocery = await getGrocery(params.id)

    return (
        <section className="">
            <Link href="/groceries" className="group flex gap-2 w-max p-2 mb-5 items-center border border-transparent hover:border-border rounded-md hover:bg-gray-400 transition-all duration-200"><ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Vissza a főoldalra</Link>
            <h1 className="text-3xl font-bold">{grocery.name}</h1>
            <p className="text-[.9rem] text-gray-500">{grocery.searchDescription}</p>
            <p className="text-[.9rem] text-gray-500">{grocery.category}</p>
        </section>
    )
}
