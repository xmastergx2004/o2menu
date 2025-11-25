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
    const [imageSrc, setImageSrc] = useState<string>("");

    // Reset states when src changes - ensures each image is isolated
    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        setImageSrc(src);
    }, [src]);

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
        setImageSrc(""); // Clear the src to prevent showing wrong image
        if (onError) onError();
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    // Don't render Image component if there's an error or no src
    if (hasError || !imageSrc) {
        return null;
    }

    return (
        <>
            {isLoading && <ImageSkeleton />}
            <Image
                key={src} // Force new instance when src changes
                src={imageSrc}
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
