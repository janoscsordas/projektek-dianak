export default function About() {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape absolute w-full h-[60vh] left-0 right-0 rotate-180 "></div>
            <div className="w-full h-full backdrop-blur-3xl flex flex-col justify-center p-40">
                <h1 className="text-8xl p-20">About</h1>
                <div className="w-96 self-center flex flex-col gap-6 opacity-50 font-sans">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor maiores nihil porro quia voluptate. Enim facere reprehenderit sequi nihil cum corrupti vel? Ipsum molestiae quos doloribus dicta ratione dolore accusantium?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit esse maiores, ipsa sequi provident ratione tenetur ab iste porro mollitia hic autem ducimus in quam magnam animi adipisci perspiciatis?
                    </p>
                </div>
                <div className="px-10 py-20 ">
                    <div className="flex items-center justify-around gap-40">
                        <h1 className="text-5xl">Services</h1>
                        <ul className="space-y-2">
                            <p>Development</p>
                            <li className="opacity-60">Design</li>
                            <li className="opacity-60">Deployment</li>
                            <li className="opacity-60">SEO and Serm Optimization</li>
                        </ul>
                        <ul className="space-y-2">
                            <p>Development</p>
                            <li className="opacity-60">Design</li>
                            <li className="opacity-60">Deployment</li>
                            <li className="opacity-60">SEO and Serm Optimization</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}
