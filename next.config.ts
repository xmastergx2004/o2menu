import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/o2menu',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
