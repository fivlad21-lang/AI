import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — more reliable on Vercel for this client-only birthday SPA
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
