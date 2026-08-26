import { spawnSync } from "node:child_process";
import { serwist } from "@serwist/next/config";
import { writeOfflineDocsManifest } from "./scripts/build-offline-manifest.mts";

await writeOfflineDocsManifest();

const gitRevision = spawnSync("git", ["rev-parse", "HEAD"], {
  encoding: "utf8",
}).stdout?.trim();

const revision = gitRevision || crypto.randomUUID();

export default await serwist({
  additionalPrecacheEntries: [
    { revision, url: "/" },
    { revision, url: "/~offline" },
  ],
  globIgnores: ["**/*.map"],
  globPatterns: [
    ".next/static/**/*.{js,css,woff,woff2,ttf,ico,png,svg,webp,avif}",
  ],
  precachePrerendered: false,
  swDest: "out/sw.js",
  swSrc: "app/sw.ts",
});
