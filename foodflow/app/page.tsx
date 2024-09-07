import { Chart, EatingChart } from "@/components/BarChart";

export default function Home() {
  return (
    <section className="w-full min-h-full grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div className="card">
            <h2 className="text-2xl font-bold">Üdv a Foodflow Dashboard oldalon</h2>
            <p>Itt minden információt megtalálhat az élelmiszerekről. Egyúttal kikalkulálhatja a BMI-jét is, olvashat az egészséges életmódszerekről, és híreket az élelmiszerekkel kapcsolatban. Az oldal az emberek tudatosságát kívánja felnyitni, hogy egészségesebben éljenek és tájékozódjanak a helyes életmódról.</p>
            <div className="pill dairy">
                Válasszon az oldalsósávról menüpontot a továbblépéshez
            </div>
        </div>
        <div className="card grid place-items-center">
            <h2 className="text-2xl font-bold">Statisztika</h2>
            <Chart />
            <div className="pill vegetable">
                Statisztika az oldal látogatottságáról
            </div>
        </div>
        <div className="card grid place-items-center">
            <h2 className="text-2xl font-bold">Statisztika a gyümölcs- és zöldségfogyasztás gyakorisága (2019) %</h2>
            <EatingChart />
            <div className="pill fruit">
                KSH statisztika (2019)
            </div>
        </div>
        <div className="card">
            <h2 className="text-2xl font-bold">További információ az oldalról</h2>
            <p>Az oldalt készíti <i>Csordás János</i>. Minden információ, ami az oldalon megtalálható nem saját tulajdon, és szabadon felhasználható. &copy; 2024 minden jog fenntartva. Ha bármilyen kérdése, kérése vagy észrevétele van a következő elérhetőségeken tud jelezni.</p>
            <p>E-mail: <a className="text-primary underline" href="mailto:janocsordas@gmail.com">janocsordas@gmail.com</a></p>
            <div className="pill bakery">
                Oldal információ
            </div>
        </div>
    </section>
  );
}
