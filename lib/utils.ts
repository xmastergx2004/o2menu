// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
    // 1. Try to get basePath from environment variable (works at build time & client time if configured)
    const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

    // 2. Fallback: Detect from window location (works at client runtime if env var fails)
    const windowBasePath = typeof window !== 'undefined' && window.location.pathname.startsWith('/o2menu')
        ? '/o2menu'
        : '';

    // Use env var if it exists (even if empty string), otherwise use window detection
    // We check for undefined specifically because '' is a valid basePath (local dev)
    const basePath = envBasePath !== undefined ? envBasePath : windowBasePath;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};
