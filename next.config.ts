import type { NextConfig } from "next";

/**
 * Vercel-native Next.js deploy (no `output: "export"`).
 * Static export caused Ready + platform 404: NOT_FOUND when Output Directory
 * was mis-set; server redirects also do not apply under pure export.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
