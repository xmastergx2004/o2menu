import { useEffect, useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Wait for the window load event (all resources including initial images)
        const handleLoad = () => {
            // Add a small delay for smooth UX
            setTimeout(() => {
                setIsFading(true);
                setTimeout(onFinished, 500); // Wait for fade out animation
            }, 1000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, [onFinished]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2c3e50] transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="relative w-32 h-32 mb-4 animate-pulse">
                <Image
                    src={getAssetPath("/o2photos/o2coffeelogo.jpg")}
                    alt="O2 Coffee Lab"
                    fill
                    className="object-contain rounded-full shadow-2xl"
                    priority
                />
            </div>
            <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#27ae60] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-[#27ae60] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-[#27ae60] rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}
