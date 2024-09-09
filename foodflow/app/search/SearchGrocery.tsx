import Link from "next/link"

type Groceries = {
    id: number
    name: string
    searchDescription: string
    category: string
    categoryName: string
}

async function getSearchedGroceries(searchQuery: string) {
    const response = await fetch(`http://localhost:4000/groceries`, { next: { revalidate: 0 } }) // opt out of caching

    if (!response.ok || !response) {
        return "Hiba a keresési adatok lekérdezésekor"
    }

    const groceries: Groceries[] = await response.json()
    const searchedGroceries = groceries.filter((grocery) => grocery.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return searchedGroceries
}

export default async function SearchGrocery({searchQuery}: {searchQuery: string}) {
    const searchedGroceries = await getSearchedGroceries(searchQuery)

    if (typeof searchedGroceries == "string") {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-5xl text-center text-primary">500</h1>
                <h2 className="text-3xl text-center">Hiba történt az adatok lekérése közben.</h2>
            </div>
        )
    }

    return (
        <>
            <div className="px-10 mt-10 mx-auto w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5">
                {searchedGroceries.map((grocery) => (
                    <div key={grocery.id} className="card">
                        <Link href={`/groceries/${grocery.id}`}>
                            <h3>{grocery.name}</h3>
                            <p>{grocery.searchDescription}</p>
                            <div className={`pill ${grocery.categoryName}`}>
                                {grocery.category}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {searchedGroceries.length === 0 && <p className="block mx-auto text-center text-xl mt-5">A keresett élelmiszer nem található!</p>}
        </>
    )
}
