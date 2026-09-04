import type { NextConfig } from "next";

/**
 * Vercel-native Next.js deploy (no `output: "export"`).
 * Root `/` locale redirect is handled in `src/proxy.ts` (Accept-Language + cookie).
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
};

export default nextConfig;
