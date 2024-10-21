export default function Contact() {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape size-44 absolute right-60 top-36 "></div>
            <div className="flex items-center justify-between backdrop-blur-2xl px-60 py-32">
                <p className="text-4xl w-96">Let's mix our skills with your ideas and create something beautiful</p>
                <button className="glass-btn size-48 rounded-full text-lg">Start a project</button>
            </div>
            <div className="text-xl px-60 py-20 flex items-center justify-between">
                <div className="space-y-2">
                    <p className="opacity-60">Phone Number</p>
                    <p>+36 1 234 5678</p>
                </div>
                <div className="space-y-2">
                    <p className="opacity-60">Email</p>
                    <p>janoscsordas072@gmail.com</p>
                </div>
                <div className="space-y-2">
                    <p className="opacity-60">Place</p>
                    <p>123 Main St, London</p>
                </div>
            </div>
            <footer className="px-60 py-10 opacity-50 flex justify-between items-center">
                <div className="text-lg">
                    &copy;2024 All rights reserved
                </div>
                <div className="flex items-center gap-8">
                    <p>Hun</p>
                    <div className="w-20 h-[1px] bg-white/50"></div>
                    <p>Eng</p>
                </div>
            </footer>
        </section>
    )
}
