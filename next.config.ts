import type { NextConfig } from "next";

const useCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const isGitHubPages = process.env.GITHUB_PAGES === "true" && !useCustomDomain;
const basePath = isGitHubPages ? "/puthu-roja-orchestra" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
