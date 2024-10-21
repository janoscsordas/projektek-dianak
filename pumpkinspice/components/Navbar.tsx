import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 p-8 flex items-center justify-between">
            <div>Pumpkin Spice</div>
            <div>
                <Menu fontSize={34} />
            </div>
        </nav>
    )
}
