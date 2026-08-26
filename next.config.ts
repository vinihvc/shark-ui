import { codeInspectorPlugin } from "code-inspector-plugin";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Static export — avoids serverless functions on Vercel Hobby (free) tier.
  output: "export",
  reactStrictMode: true,
  serverExternalPackages: ["@takumi-rs/core"],
  turbopack: {
    rules: codeInspectorPlugin({
      behavior: {
        copy: true,
      },
      bundler: "turbopack",
    }),
  },
  // DISABLED for Vercel free tier — rewrites to /api/raw spawn serverless routes.
  // async rewrites() {
  //   return [
  //     {
  //       destination: "/api/raw/docs/:path*",
  //       source: "/docs/:path*.md",
  //     },
  //   ];
  // },
};

export default withMDX(config);
