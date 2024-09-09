import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export type News = {
    id: number
    title: string
    article: string
    date: string
}

async function getNews() {
    const response = await fetch(`http://localhost:4000/news`, { next: { revalidate: 0 } })

    if (!response.ok || !response) {
        return "Hiba a hirek lekérdezésekor"
    }

    const news: News[] = await response.json()

    return news
}

export default async function NewsList() {
    const news = await getNews()

    if (typeof news == "string") {

        return (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-5xl text-center text-primary">500</h1>
                <h2 className="text-3xl text-center">Hiba történt az adatok lekérdezésekor</h2>
            </div>
        )
    }

    return (
        <>
            {news.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                    <Card className="group hover:bg-muted transition-colors duration-200">
                        <CardHeader>
                            <CardTitle className="flex flex-row justify-between items-center">{article.title.slice(0, 25)}... <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" /></CardTitle>

                        </CardHeader>
                        <CardContent>
                            <p>{article.article.slice(0, 50)}...</p>
                        </CardContent>
                        <CardFooter>
                            <div className="pill dairy">{article.date}</div>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </>
    )
}
