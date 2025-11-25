import { MenuItem } from "@/data/menuData";
import { FaMugHot } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "./ImageSkeleton";

interface ProductCardProps {
    item: MenuItem;
    category: string;
    onClick: () => void;
}

export default function ProductCard({ item, category, onClick }: ProductCardProps) {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Categories that need object-contain (long photos)
    const containCategories = ["SOĞUK KAHVELER", "MILKSHAKE", "FROZEN", "SOFT İÇECEKLER"];
    const objectFitClass = containCategories.includes(category) ? "object-contain p-2" : "object-cover";

    return (
        <div
            onClick={onClick}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col h-full"
        >
            <div className="w-full h-36 bg-gray-200 flex items-center justify-center text-gray-400 text-3xl relative overflow-hidden group">
                {item.image && !imageError ? (
                    <>
                        {isLoading && <ImageSkeleton />}
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className={`${objectFitClass} transition-transform duration-500 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            onError={() => {
                                setImageError(true);
                                setIsLoading(false);
                            }}
                            onLoad={() => setIsLoading(false)}
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    </>
                ) : (
                    <FaMugHot />
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="font-semibold text-[#2c3e50] mb-1">{item.name}</h3>
                <div className="text-[#27ae60] font-bold text-lg mt-auto">{item.price}</div>
            </div>
        </div>
    );
}
