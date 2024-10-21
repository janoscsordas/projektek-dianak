export default function Hero() {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape absolute -rotate-45 w-[40rem] h-[25rem] top-60 right-40 "></div>
            <div className="px-40 h-full backdrop-blur-3xl">
                <div className="px-20 h-full flex flex-col justify-center gap-1">
                    <span className="opacity-50 text-xl">Halloween Ünnep</span>
                    <h1 className="text-7xl">Habár itthon nem ünnepeljük, <br /> mégis sokak szeretik a Halloween-t</h1>
                </div>
            </div>
        </section>
    )
}
