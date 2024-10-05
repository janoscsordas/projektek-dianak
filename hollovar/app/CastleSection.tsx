import Image from "next/image"

import corridorImg from "@/assets/corridor.jpg"
import castleImg from "@/assets/crow_castle_bg.jpg"
import castleInside from "@/assets/castleInside.avif"

export default function CastleSection() {
  return (
    <section className="py-16">
      <div className="px-4 mx-auto xl:max-w-7xl">
        <h2 className="text-4xl font-bold text-center">A Hollóvár bemutatása</h2>
        <p className="text-center text-gray-500 mb-12 mt-1">Ismerj meg néhány dolgot a Hollóvárról</p>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src={castleImg}
              width={600}
              height={400}
              alt="Camelot Castle exterior"
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Legendás Vár</h3>
              <p className="text-gray-700">
                A várat először a XII. században említették meg ősmagyarjaink. A leírtak alapján arra tudunk következtetni, hogy a vár már ekkor is állt és erre bukkantak rá felmenőink. Legközelebb csak a XVII. század közepén tettek róla említést, amikor is a vár egy része romokban hevert. Így, amikor a jelenben rá bukkantunk erre a titokzatos építményre, azonnal megkezdtük a vár restaurálását és újjáépítését, hogy a mai emberek is megismerhessék.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <Image
                src={corridorImg}
                width={600}
                height={400}
                alt="Hollóvár Folyosó"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold mb-4">A Vár Hatalmas Folyosója</h3>
              <p className="text-gray-700">
                Egy a várt átívelő folyosó elég hosszú és félelmetes a sötétben, ugyanis hiába tűnhet úgy, hogy egyenesen húzódik, egyáltalán nem ilyen egyszerű a valóságban. Mégpedig azért, mert olyan tükröződési trükköket használtak, hogy aki ide belép, azt higyje, hogy egy egyenes folyosón megy keresztül, pedig igazából teljesen össze vissza kacskaringózik.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src={castleInside}
              width={600}
              height={400}
              alt="Camelot Castle gardens"
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Amiért a Hollóvár HOLLÓ vár</h3>
              <p className="text-gray-700">
                Amikor először bukkantak a várra a felmenőink rengeteg holló volt a vár körül. Olyan hangokat hallattak magukból, mintha emberi beszéd lett volna. Az emberek ettől féltek így meg sem merték közelíteni a várat. Sok rém történet maradt fent az akkori időkből ennek köszönhetően. Az egyik történetben említik Hollóvárként ezt az építményt. Így terjedt el nevezetesen a Hollóvár kifejezés erről, és ezért hívjuk így napjainkban is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
