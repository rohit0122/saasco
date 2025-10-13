import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ['placehold.co'], // ✅ move under `images`
  },
};

export default nextConfig;
