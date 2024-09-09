import NewsList from "./NewsList";

export default function AllNewsPage() {
    return (
        <section className="w-full">
            <h1 className="text-3xl font-bold text-center">Hírek az élelmiszerekről</h1>
            <div className="w-[90%] lg:w-2/3 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <NewsList />
            </div>
        </section>
    )
}
