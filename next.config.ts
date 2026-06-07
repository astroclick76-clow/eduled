import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eduled",
  assetPrefix: "/eduled/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
