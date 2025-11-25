import { useState, useEffect } from "react";
import Image from "next/image";
import ImageSkeleton from "./ImageSkeleton";

interface ProgressiveImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    className?: string;
    objectFit?: "cover" | "contain";
    onError?: () => void;
    priority?: boolean;
}

export default function ProgressiveImage({
    src,
    alt,
    fill = true,
    className = "",
    objectFit = "cover",
    onError,
    priority = false
}: ProgressiveImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string>("");

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);

        // Create a low-quality image URL (you can also create actual thumbnails)
        // For now, we'll just use the regular image but with loading states
        setCurrentSrc(src);
    }, [src]);

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
        if (onError) onError();
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    if (hasError) {
        return null;
    }

    return (
        <>
            {isLoading && <ImageSkeleton />}
            <Image
                src={currentSrc}
                alt={alt}
                fill={fill}
                className={`${className} ${isLoading ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'} transition-all duration-700 ease-out`}
                style={{ objectFit }}
                onError={handleError}
                onLoad={handleLoad}
                loading={priority ? undefined : "lazy"}
                priority={priority}
                unoptimized
            />
        </>
    );
}
