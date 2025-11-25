import { MenuItem } from "@/data/menuData";
import { FaImage, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import ProgressiveImage from "./ProgressiveImage";

interface ProductModalProps {
    item: MenuItem | null;
    category: string;
    onClose: () => void;
}

export default function ProductModal({ item, category, onClose }: ProductModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Only cold drinks need object-contain, all others use cover
    const objectFitClass = category === "SOĞUK KAHVELER" ? "contain" : "cover";

    useEffect(() => {
        if (item) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = 'unset';
        }
    }, [item]);

    if (!item && !isVisible) return null;

    return (
        <div
            className={`fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ${item ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={onClose}
        >
            <div
                className={`bg-white w-full max-w-sm rounded-3xl p-6 relative transform transition-transform duration-300 ${item ? "scale-100" : "scale-90"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 text-xl text-white bg-red-500 hover:bg-red-600 transition-colors z-20 rounded-full p-3 shadow-lg hover:scale-110 duration-300"
                    aria-label="Kapat"
                >
                    <FaTimes />
                </button>

                <div className="w-full h-64 bg-gray-100 rounded-2xl mb-5 flex items-center justify-center text-4xl text-gray-300 relative overflow-hidden shadow-inner">
                    {item?.image ? (
                        <ProgressiveImage
                            src={item.image}
                            alt={item.name}
                            objectFit={objectFitClass}
                            priority={true}
                        />
                    ) : (
                        <FaImage />
                    )}
                </div>

                <h2 className="text-2xl font-bold text-[#2c3e50] mb-2 text-center">{item?.name}</h2>
                <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    {item?.description || "Bu ürün için henüz açıklama eklenmemiştir."}
                </p>

                <div className="text-[#27ae60] font-bold text-3xl text-center mt-4 bg-green-50 py-2 rounded-xl">
                    {item?.price}
                </div>
            </div>
        </div>
    );
}
