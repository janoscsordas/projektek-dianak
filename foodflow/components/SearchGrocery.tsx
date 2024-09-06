import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { notFound } from "next/navigation"

type Groceries = {
    id: number
    name: string
    category: string
    categoryName: string
}

async function getSearchedGroceries(searchQuery: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`http://localhost:4000/groceries`, { next: { revalidate: 0 } }) // opt out of caching

    if (!response.ok) {
        return
    }

    const groceries: Groceries[] = await response.json()
    const searchedGroceries = groceries.filter((grocery) => grocery.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return searchedGroceries
}

export default async function SearchGrocery({searchQuery}: {searchQuery: string}) {
    const searchedGroceries = await getSearchedGroceries(searchQuery)

    if (!searchedGroceries) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-5xl text-center text-primary">500</h1>
                <h2 className="text-3xl text-center">Hiba történt az adatok lekérése közben.</h2>
            </div>
        )
    }

    return (
        <>
            <div className="px-10 mt-10 mx-auto w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {searchedGroceries.map((grocery) => (
                    <Link href={`/grocery/${grocery.id}`} key={grocery.id}>
                        <Card className="relative">
                            <CardHeader>
                                <CardTitle>{grocery.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <span className={`${grocery.categoryName} rounded-br-md rounded-tl-md absolute p-2 bottom-0 right-0 text-white`}>{grocery.category}</span>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            {searchedGroceries.length === 0 && <p className="block mx-auto text-center text-xl mt-5">A keresett termék nem található!</p>}
        </>
    )
}
