import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Offline",
};

const OfflinePage = () => (
  <main className="container flex min-h-[calc(100svh-var(--header-height))] flex-col items-center justify-center gap-4 py-16 text-center">
    <h1 className="font-heading text-2xl">
      This page is not available offline
    </h1>
    <p className="max-w-md text-muted-foreground text-sm">
      Pages you have already opened, or docs you saved for offline, still work.
      Reconnect to load this page, or go back home.
    </p>
    <Button asChild>
      <Link href="/">Back to home</Link>
    </Button>
  </main>
);

export default OfflinePage;
