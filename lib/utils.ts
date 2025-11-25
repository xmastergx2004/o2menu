// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
    // In production on GitHub Pages, detect basePath from current URL
    // For local development, basePath is empty
    const basePath = typeof window !== 'undefined' && window.location.pathname.startsWith('/o2menu')
        ? '/o2menu'
        : '';

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};
