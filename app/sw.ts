/// <reference lib="esnext" />
/// <reference lib="webworker" />

import type {
  PrecacheEntry,
  RuntimeCaching,
  SerwistGlobalConfig,
} from "serwist";
import {
  CacheFirst,
  ExpirationPlugin,
  NetworkFirst,
  NetworkOnly,
  Serwist,
} from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const expiration = (maxEntries: number) =>
  new ExpirationPlugin({
    maxAgeFrom: "last-used",
    maxAgeSeconds: 14 * 24 * 60 * 60,
    maxEntries,
  });

const runtimeCaching: RuntimeCaching[] = [
  {
    handler: new CacheFirst({
      cacheName: "next-static",
      plugins: [expiration(128)],
    }),
    matcher: ({ sameOrigin, url }) =>
      sameOrigin && url.pathname.startsWith("/_next/static/"),
  },
  {
    handler: new NetworkOnly(),
    matcher: ({ sameOrigin, url }) =>
      sameOrigin &&
      (url.pathname.startsWith("/r/") || url.pathname.startsWith("/api/")),
  },
  {
    handler: new NetworkFirst({
      cacheName: "pages-rsc",
      matchOptions: { ignoreSearch: true },
      networkTimeoutSeconds: 3,
      plugins: [expiration(400)],
    }),
    matcher: ({ request, sameOrigin, url }) =>
      sameOrigin &&
      (request.headers.get("RSC") === "1" || url.pathname.endsWith(".txt")),
  },
  {
    handler: new NetworkFirst({
      cacheName: "pages",
      matchOptions: { ignoreSearch: true },
      networkTimeoutSeconds: 3,
      plugins: [expiration(400)],
    }),
    matcher: ({ request, sameOrigin }) =>
      sameOrigin &&
      (request.mode === "navigate" || request.destination === "document"),
  },
  {
    handler: new NetworkFirst({
      cacheName: "same-origin",
      networkTimeoutSeconds: 3,
      plugins: [expiration(64)],
    }),
    matcher: ({ request, sameOrigin, url }) =>
      sameOrigin && request.method === "GET" && !url.pathname.startsWith("/r/"),
  },
];

const serwist = new Serwist({
  clientsClaim: true,
  disableDevLogs: true,
  fallbacks: {
    entries: [
      {
        matcher: ({ request }) => request.destination === "document",
        url: "/~offline",
      },
    ],
  },
  navigationPreload: true,
  precacheEntries: self.__SW_MANIFEST,
  precacheOptions: {
    cleanupOutdatedCaches: true,
    concurrency: 10,
  },
  runtimeCaching,
  skipWaiting: false,
});

serwist.addEventListeners();
