// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/o2menu' : '';

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};
