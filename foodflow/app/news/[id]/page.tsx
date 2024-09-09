import Link from "next/link"
import { type News } from "../NewsList"
import { ArrowLeftIcon } from "lucide-react"
import { notFound } from "next/navigation"

async function getOneNews(id: string) {
    const response = await fetch(`http://localhost:4000/news/${id}`, { next: { revalidate: 0 } })

    if (!response.ok) {
        return notFound()
    }

    const news: News = await response.json()

    return news
}

export default async function NewsPage({ params }: { params: { id: string } }) {
    const news = await getOneNews(params.id)

    return (
        <section className="w-full h-max">
            <Link href="/news" className="group flex gap-2 w-max p-2 mb-5 items-center border border-transparent hover:border-border rounded-md hover:bg-gray-400 transition-all duration-200"><ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Vissza a főoldalra</Link>
            <div className="article">
                <h1 className="text-3xl font-bold text-center mb-12">{news.title}</h1>
                <p className="text-justify">{news.article}</p>

                <div className="mt-10">
                    <span className="text-sm">Dátum: {news.date}</span>
                </div>
            </div>
        </section>
    )
}
