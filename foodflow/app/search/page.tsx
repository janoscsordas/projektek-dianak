import SearchGrocery from "@/app/search/SearchGrocery";
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
            <div className="py-5">
                <h1 className="text-4xl font-bold text-center">A keresési találatok erre: <span className="text-primary font-extrabold ">{searchParams.q}</span></h1>

                <div>
                    <Suspense fallback={<Loading />}>
                        <SearchGrocery searchQuery={searchParams.q} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
