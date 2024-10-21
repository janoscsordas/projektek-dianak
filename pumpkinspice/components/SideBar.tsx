import { Apple, Axe, Ghost } from "lucide-react";

export default function SideBar() {
    return (
        <div className="fixed h-[70dvh] bottom-0 w-24 flex flex-col justify-between items-center p-10 z-50">
            <div className="flex items-center -rotate-90 gap-8 p-10">
                <p>Hun</p>
                <div className="w-20 h-[1px] bg-white/50"></div>
                <p>Eng</p>
            </div>
            <div className="space-y-8">
                <Apple className="hover:text-orange-500 cursor-pointer" />
                <Axe className="hover:text-orange-500 cursor-pointer" />
                <Ghost className="hover:text-orange-500 cursor-pointer" />
            </div>
        </div>
    )
}
