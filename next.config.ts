import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath in production (GitHub Pages)
  ...(isProd && { basePath: '/o2menu' }),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/o2menu' : '',
  },
};

export default nextConfig;
