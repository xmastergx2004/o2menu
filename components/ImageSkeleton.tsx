export default function ImageSkeleton() {
    return (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-[#27ae60] rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
