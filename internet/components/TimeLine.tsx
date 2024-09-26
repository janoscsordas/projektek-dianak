import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

// asset imports
import Server1980Picture from "@/assets/Server_1980.jpg"
import Table from "@/assets/Table.png"
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowLeft } from "lucide-react";

export default function TimeLine() {
  const data = [
    {
      title: "1960s",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          A történet katonai fejlesztések civil szférába való átszivárgásával kezdődött. Abban az időben merült föl ugyanis az USA-ban egy kevéssé sebezhető számítógép-hálózat szükségessége, amelynek egy esetleges atomtámadás után megmaradó részei működőképesek maradnak. Dwight D. Eisenhower elnök – a szovjetek űrversenybeli sikereit ellensúlyozandó, a Szputnyik–1 fellövésének hírére – elrendelte a DARPA (Defense Advanced Research Project Agency) felállítását, amely a kutatásokat azután finanszírozta. Kidolgoztak egy többközpontú, csomagkapcsolt (ahol az adatok továbbítása kisebb csomagokban történik) hálózati kommunikációs rendszert (az NCP protokollt), amely a mai TCP/IP szabvány ősének tekinthető.
          </p>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
    {
      title: "1969",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Ezen az elven kezdett működni 1969-ben az ARPANET (Advanced Research Projects Agency Network), és a katonai felhasználásokon kívül a csomagkapcsolt adattovábbítás további kutatásra szolgált, de egyes egyetemek, katonai bázisok és kormányzati laboratóriumok kutatói is használták elektronikus levelezésre, fájlok cseréjére és távoli bejelentkezésre egymás számítógépei között.
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "1970-1980s",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            1972-ben megszületett az első e-mail-program.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                1974-ben jelent meg először az „internet” kifejezés, egy a TCP protokollról szóló tanulmányban.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                1983-ban az addig szigorúan ellenőrzött ARPANET-ből MILNET (Military Network) néven leválasztották a hadászati szegmenst.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                1988 az első hálózaton keresztül terjedő féregvírus (worm) éve volt. A National Science Foundation felismerte, hogy a gerinchálózat döntő fontosságú lehet a tudományos kutatásban, ezért igen nagy szerepet vállalt az internet bővítésében.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                1985–86-ban kiépítették az NSF 6 szuperszámítógép központját, és az így kialakult hálózatot (mely az NSFNET nevet kapta) összekapcsolták az ARPANET-tel. Az NSFNET (National Science Foundation Network) több bővítés után (optikai kábeleket fektettek le, újabb vonalakat hoztak létre, aminek eredményeként a hálózat sebessége a kezdeti 56 kbps-ról 45 Mbps-ra emelkedett) ma is az USA domináns gerinchálózata.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                Az ARPANET formálisan 1989-ben szűnt meg, hogy helyét átadja a fejlettebb gerinchálózatoknak. Az NSFNET mellett jelentős részben már magáncégek hálózatain folyik a kommunikáció (AT&T, MCI, UUNET, Sprint stb.).
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src={Server1980Picture} alt="Server 1980" placeholder="blur" className="rounded-lg shadow-lg" title="Szerver 1980-ból" />
            <Image src={Table} alt="Táblázat" placeholder="blur" className="self-center" title="Táblázat" />
          </div>
        </div>
      ),
    },
    {
        title: "Magyarország",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Az első magyarországi domain címet 1991-ben jegyezték be a Számítástechnikai és Automatizálási Kutatóintézet számára: sztaki.hu.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Hazai elterjedését gyorsította, amikor a Matáv (ma Magyar Telekom) hálózatán 1995 óta elérhető telefonmodemes mellett 1999-ben elkezdődött az üzleti és lakossági célú ISDN szolgáltatás a Matávnet nevet viselő leányvállalatának jóvoltából. 2001 májusában az Axelero névre váltva - és azt 2005-ig viselve - tette elérhetővé magánszemélyek számára is az egy évvel korábban bevezetett, gyorsabb, szélessávú ADSL technológiát. A vezetékes távközlési piac 2001 decemberi megnyitását követően több szolgáltató is megjelent változatos ajánlatokkal. A kábeltelevíziós piacon 1998-ban megjelent UPC a frissen kiépített csillagpontos hálózatain 2000 szeptemberében indította el a Chello nevű szélessávú internet szolgáltatását. (A UPC-t 2019-ben vásárolta fel a Vodafone.) Magyarországon 2007-ben a háztartások körülbelül 38%-a rendelkezett internet előfizetéssel, egy évvel korábban 2006-ban még 32%. Nőtt a széles sávú elérések aránya, a 2006-os 22%-ról 33%-ra. Az európai uniós átlag 42%, ebben az összehasonlításban hazánk a 18. helyen áll. Megelőz minket többek között Franciaország, Spanyolország, Észtország, Ausztria és Szlovénia, mögöttünk helyezkedik el Olaszország, Szlovákia, Lengyelország és Portugália. Mindehhez hozzá kell tenni, hogy egyáltalán a szélessáv fogalma nem tisztázott, például mást jelent az USA-ban és mást az EU-ban. A mobilinternet-előfizetések változása 2007. I. negyedévéhez képest (amikor 220 598 előfizetés volt az országban), 2011. IV. negyedévére 2 154 852 előfizetésre nőtt.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Egy 2014-es adócsomag-tervezet szerint Magyarországon 2015-től gigabyte-onkénti 150 forintos adó lett volna kivetve. A tervezetet a tüntetések hatására visszavonták, mivel általános felháborodást keltett mind az országon belül, mind az Európai Unióban.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                    A 2010-es évtized végére a magyar internet előfizetői piac telítetté vált. Számottevően megnövekedett a szélessávú (4G) mobilinternet használat, továbbá a korszerű, optikai kábeles technológián továbbított szolgáltatások aránya.
                </p>
            </div>
        )
    },
    {
        title: "Manapság",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Manapság az internetes technológiákat körülbelül négymilliárdnyian használják személyes, illetve üzleti célokra, például információkeresésre, szolgáltatások és áruk megrendelésére, kapcsolattartásra, szórakozásra stb.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Jelenleg kutatások zajlanak az internet technikai (elsősorban távközlési) problémáinak megoldására, például az új IPv6 címzési rendszer bevezetésére. A jelenleg használt címzési rendszer (IPv4) ugyanis kifogyóban van új, kiosztható címekből a végpontok (például előfizetők számítógépe(i) vagy más eszköze(i), kiszolgálók stb.) számára, amely ha bekövetkezne a probléma megoldása (IPv6) és a megoldásra való átállás globális szintű beteljesedése előtt, akkor az internet további bővítése csak igen nehezen és nagy áldozatokkal jöhetne létre. (Még legalább ötmilliárd ember számára kell elérhetővé tenni a jelenlegi 1,4-1,5 helyett!)
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    2010 nyarán jelentette be az MIT, hogy egy új technológiával, az ún. flow switching elve alapján százszorosára lehetne növelni az adattovábbítás sebességét. Az újdonság bevezetését gátolja azonban, hogy ehhez le kell cserélni a routereket.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                    Több eset is felhívta arra a figyelmet, hogy az internet – elosztott jellege dacára – nem olyan stabil, mint amilyennek tervezték és amilyennek általában vélik.
                </p>
                <div className="mt-5 w-max">
                    <a href="https://hu.wikipedia.org/wiki/Internet" target="_blank">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Forrás</span>
                        </HoverBorderGradient>
                    </a>
                </div>
            </div>
        )
    }
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
