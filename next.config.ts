import type { NextConfig } from "next";

const useCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const isGitHubPages = process.env.GITHUB_PAGES === "true" && !useCustomDomain;
const basePath = isGitHubPages ? "/puthu-roja-orchestra" : "";
const siteUrl = useCustomDomain
  ? "https://puthurojaorchestra.com"
  : isGitHubPages
    ? "https://harinirajant.github.io/puthu-roja-orchestra"
    : "http://localhost:3000";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
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
