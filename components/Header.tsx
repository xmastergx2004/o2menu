import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";

interface HeaderProps {
    showBack?: boolean;
    onBack?: () => void;
}

export default function Header({ showBack, onBack }: HeaderProps) {
    return (
        <header className="bg-white p-5 text-center shadow-sm sticky top-0 z-50 rounded-b-3xl transition-all duration-300">
            <div className="relative flex items-center justify-center gap-2 mb-1">
                {showBack && (
                    <button
                        onClick={onBack}
                        className="absolute left-0 text-white bg-[#2c3e50] text-xl p-3 rounded-full shadow-lg hover:bg-[#34495e] hover:scale-110 transition-all duration-300 z-10"
                        aria-label="Geri Dön"
                    >
                        <FaArrowLeft />
                    </button>
                )}
                <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-white">
                        <Image
                            src="/o2photos/o2coffeelogo.jpg"
                            alt="O2 Coffee Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h1 className="font-bold text-3xl text-[#2c3e50] tracking-wide">O2 MENÜ</h1>
                </div>
            </div>
            <p className="text-[#7f8c8d] text-sm font-light mt-2">Lezzetin Doğal Hali</p>
        </header>
    );
}
