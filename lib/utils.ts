// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
    // Next.js automatically handles basePath in the Image component
    // So we just need to ensure the path starts with /
    return path.startsWith('/') ? path : `/${path}`;
};
