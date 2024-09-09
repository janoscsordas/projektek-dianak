import Link from "next/link"

export type Grocery = {
    id: number
    categoryName: string
    category: string
    name: string
    searchDescription: string
}

async function getGroceryCategories() {
    const response = await fetch(`http://localhost:4000/groceries`, { next: { revalidate: 0 } }) // opt out of caching

    if (!response.ok || !response) {
        return "Hiba az adatok lekérdezésekor"
    }

    const data: Grocery[] = await response.json()

    return data
}

export default async function CategoriesList() {
    const groceries = await getGroceryCategories()

    if (typeof groceries == "string") {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-5xl text-center text-primary">500</h1>
                <h2 className="text-3xl text-center">Hiba történt az adatok lekérdezésekor.</h2>
            </div>
        )
    }

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-5">
            {groceries.map((grocery) => (
                <div key={grocery.id} className="card">
                    <Link href={`/groceries/${grocery.id}`}>
                        <h3>{grocery.name}</h3>
                        <p>{grocery.searchDescription}</p>
                        <div className={`pill ${grocery.categoryName}`}>{grocery.category}</div>
                    </Link>
                </div>
            ))}
            {groceries.length === 0 && <p className="block mx-auto text-center text-xl mt-5">Nincsenek termék kategóriák.</p>}
        </div>
    )
}
