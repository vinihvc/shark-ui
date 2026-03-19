import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["@takumi-rs/core"],
  async redirects() {
    return [
      {
        destination: "/blocks/application-ui/forms/sign-in-simple",
        permanent: true,
        source: "/blocks/login",
      },
    ];
  },
  async rewrites() {
    return [
      {
        destination: "/api/raw/docs/:path*",
        source: "/docs/:path*.md",
      },
    ];
  },
};

export default withMDX(config);
