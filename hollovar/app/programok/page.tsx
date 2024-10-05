import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bird, Castle, Clock, Crown, Swords, Target } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Hollóvár felfedezése",
    description: "Felfedezésre kerül a Hollóvár és közben megismerheti a történetét.",
    icon: <Crown className="h-6 w-6" />,
    duration: "2 óra",
  },
  {
    title: "Séta a Hollóvár körül, majd ebéd",
    description: "A Hollóvár körüli séta, majd ebédelés a vár melletti étteremben.",
    icon: <Castle className="h-6 w-6" />,
    duration: "1.5 óra",
  },
  {
    title: "Játékok a Hollóvárban",
    description: "Különböző játékok a gyerekeknek és felnőtteknek egyaránt a várban.",
    icon: <Swords className="h-6 w-6" />,
    duration: "1 óra",
  },
  {
    title: "Erdő felfedezése",
    description: "A Hollóvár körüli erdő felfedezése és titkainak feltárása.",
    icon: <Clock className="h-6 w-6" />,
    duration: "1.5 óra",
  },
  {
    title: "Lövészet az erdőben",
    description: "Az erdőben megtalálható céllövöldében lövészet a felnőtteknek.",
    icon: <Target />,
    duration: "30 perc"
  },
  {
    title: "Hollók szelidítésének a menetének megismerése",
    description: "Megismerjük a hollók szelídítésének a menetét bővebben.",
    icon: <Bird />,
    duration: "30 perc"
  }
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-200 pt-[5.25rem]">
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-stone-800">
                  {program.icon}
                  {program.title}
                </CardTitle>
                <CardDescription className="text-stone-600">Időtartam: {program.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700">{program.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Tudj meg többet</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/arak">
            <Button size="lg" className="bg-stone-800 hover:bg-stone-700 text-white">
                Foglald le a napod még ma
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
