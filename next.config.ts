import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    position: 'bottom-right',
  },
  experimental: {
    // Enable CSS optimization for reduced render-blocking
    optimizeCss: true,
  },
};

export default nextConfig;
