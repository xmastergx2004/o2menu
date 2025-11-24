import { MenuCategory } from "@/data/menuData";
import Image from "next/image";

interface CategoryNavProps {
    categories: MenuCategory[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function CategoryNav({ categories, activeCategory, onSelectCategory }: CategoryNavProps) {
    return (
        <nav className="px-4 py-6">
            <ul className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                    <li key={cat.category}>
                        <button
                            onClick={() => onSelectCategory(cat.category)}
                            className={`relative flex flex-col items-center justify-center gap-3 w-full h-[140px] rounded-2xl font-semibold transition-all duration-300 shadow-md overflow-hidden group ${activeCategory === cat.category
                                    ? "bg-[#2c3e50] text-white shadow-xl ring-4 ring-[#27ae60]/20 transform scale-[1.02]"
                                    : "bg-white text-[#7f8c8d] border border-gray-100 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
                                }`}
                        >
                            {cat.image ? (
                                <>
                                    <Image
                                        src={cat.image}
                                        alt={cat.category}
                                        fill
                                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${activeCategory === cat.category ? 'opacity-40' : 'opacity-100'}`}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                                    <span className="relative z-10 text-white text-lg font-bold tracking-wide text-center px-2 drop-shadow-md">{cat.category}</span>
                                </>
                            ) : (
                                <>
                                    <span className={`text-4xl transition-transform duration-300 ${activeCategory === cat.category ? 'scale-110' : ''}`}>
                                        {cat.icon}
                                    </span>
                                    <span className="text-sm tracking-wide text-center px-2">{cat.category}</span>
                                </>
                            )}

                            {activeCategory === cat.category && !cat.image && (
                                <div className="w-1.5 h-1.5 bg-[#27ae60] rounded-full mt-1"></div>
                            )}
                            {activeCategory === cat.category && cat.image && (
                                <div className="absolute bottom-3 w-1.5 h-1.5 bg-[#27ae60] rounded-full z-10"></div>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
