// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
    // Only apply basePath in production (GitHub Pages deployment)
    // In development, use the path as-is
    const basePath = process.env.NODE_ENV === 'production'
        ? (process.env.NEXT_PUBLIC_BASE_PATH || '')
        : '';

    // Remove leading slash from path if it exists
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // If no basePath, just return the path with leading slash
    return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
};
