import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    position: 'bottom-right',
  },
  images: {
    // Whitelist custom quality values used in the app
    qualities: [75, 85],
  },
  experimental: {
    // Enable CSS optimization for reduced render-blocking
    optimizeCss: true,
  },
};

export default nextConfig;
