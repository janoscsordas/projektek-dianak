import SearchGrocery from "@/components/SearchGrocery";
import notFound from "./not-found";
import { Suspense } from "react"
import Loading from "@/app/search/loading"

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

                <Suspense fallback={<Loading />}>
                    <SearchGrocery searchQuery={searchParams.q} />
                </Suspense>
            </div>
        </section>
    )
}
