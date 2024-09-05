import SearchGrocery from "@/components/SearchGrocery";
import notFound from "./not-found";

export default async function SearchPage({
    searchParams
} : { searchParams: { q: string | undefined }}) {

    if (!searchParams.q) {
        return notFound()
    }

    return (
        <section className="w-full h-full">
            <div className="py-10">
                <h1 className="text-3xl font-semibold text-center">A keresett termék: <span className="text-primary font-bold">{searchParams.q}</span></h1>
                <SearchGrocery searchQuery={searchParams.q} />
            </div>
        </section>
    )
}
