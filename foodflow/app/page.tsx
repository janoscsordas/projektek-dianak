import Image from "next/image";

// component imports
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <section>
        <h1 className="text-[1.5rem] mx-auto sm:mx-0 font-extrabold bg-gradient-to-r from-green-600 to-red-500 w-max bg-clip-text text-transparent">FoodFlow <span className="text-xs ml-2">Élelmiszerekről, Okosan.</span></h1>
        <hr className="my-4" />
        <div className="mt-10 w-full">
            <h2 className="text-[1.5rem] font-semibold leading-6 text-center sm:text-left">Az oldal, ahol <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900">minden</span> adatot megtalálsz élelmiszereidről.</h2>
        </div>
        <div className="w-full my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="w-[85%] sm:w-full mx-auto sm:mx-0">
                <CardHeader>
                    <CardTitle>Keresgélj az élelmiszerek között</CardTitle>
                    <CardDescription>Amely adatra kíváncsi vagy, most bármikor megnézheted.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Nagy választék adatait tekintheti meg.</p>
                </CardContent>
            </Card>
            <Card className="w-[85%] sm:w-full mx-auto sm:mx-0">
                <CardHeader>
                    <CardTitle>Kalkulálja a BMI-jét</CardTitle>
                    <CardDescription>Most bármikor kikalkulálalhatja a testtömeg indexét.</CardDescription>
                </CardHeader>
            </Card>
            <Card className="w-[85%] sm:w-full mx-auto sm:mx-0">
                <CardHeader>
                    <CardTitle>Keresgélj az élelmiszerek között</CardTitle>
                    <CardDescription>Amely adatra kíváncsi vagy, most bármikor megnézheted.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Nagy választék adatait tekintheti meg.</p>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
