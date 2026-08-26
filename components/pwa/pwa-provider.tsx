"use client";

import { SerwistProvider } from "@serwist/next/react";
import type { ReactNode } from "react";
import {
  OfflineDocsProvider,
  useOfflineDocs,
} from "@/components/pwa/offline-docs-context";
import { SwUpdateBanner } from "@/components/pwa/sw-update-banner";

interface PwaProviderProps {
  children: ReactNode;
}

const SerwistGate = (props: PwaProviderProps) => {
  const { children } = props;
  const { enabled, isProduction } = useOfflineDocs();

  return (
    <SerwistProvider
      cacheOnNavigation
      disable={!(isProduction && enabled)}
      key={String(enabled)}
      options={{ type: "classic" }}
      reloadOnOnline={false}
      swUrl="/sw.js"
    >
      {children}
      <SwUpdateBanner />
    </SerwistProvider>
  );
};

export const PwaProvider = (props: PwaProviderProps) => {
  const { children } = props;

  return (
    <OfflineDocsProvider>
      <SerwistGate>{children}</SerwistGate>
    </OfflineDocsProvider>
  );
};
