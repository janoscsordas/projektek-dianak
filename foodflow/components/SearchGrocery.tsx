import Link from "next/link"

type Groceries = {
    id: number
    name: string
}

export default async function SearchGrocery({searchQuery}: {searchQuery: string}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`http://localhost:4000/groceries`)

    if (!response.ok) {
        return <div>Nem található élelmiszer a megadott névvel!</div>
    }

    const groceries: Groceries[] = await response.json()
    const searchedGroceries = groceries.filter((grocery) => grocery.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <ul className="mt-4 text-center">
            {searchedGroceries.map((grocery) => (
                <li key={grocery.id}><Link href={`/groceries/${grocery.id}`}>{grocery.name}</Link></li>
            ))}
        </ul>
    )
}
