"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  OFFLINE_DOCS_ENABLED_KEY,
  OFFLINE_DOCS_REVISION_KEY,
} from "@/lib/offline-docs";

interface OfflineDocsContextValue {
  enabled: boolean;
  isProduction: boolean;
  setEnabled: (enabled: boolean) => void;
}

const OfflineDocsContext = createContext<OfflineDocsContextValue | null>(null);

const clearOfflineData = () => {
  localStorage.removeItem(OFFLINE_DOCS_REVISION_KEY);
  localStorage.setItem(OFFLINE_DOCS_ENABLED_KEY, "false");
  Reflect.deleteProperty(window, "serwist");

  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) =>
      Promise.all(
        registrations.map((registration) => registration.unregister())
      )
    )
    .then(() => caches.keys())
    .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
    .catch(() => {
      // Cleanup can fail in private browsing or without a SW.
    });
};

export const OfflineDocsProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const isProduction = process.env.NODE_ENV === "production";
  const [enabled, setEnabledState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(OFFLINE_DOCS_ENABLED_KEY) === "true") {
      setEnabledState(true);
    }
  }, []);

  const setEnabled = useCallback((next: boolean) => {
    if (next) {
      localStorage.setItem(OFFLINE_DOCS_ENABLED_KEY, "true");
      setEnabledState(true);
      return;
    }

    clearOfflineData();
    setEnabledState(false);
  }, []);

  return (
    <OfflineDocsContext.Provider value={{ enabled, isProduction, setEnabled }}>
      {children}
    </OfflineDocsContext.Provider>
  );
};

export const useOfflineDocs = () => {
  const context = useContext(OfflineDocsContext);

  if (!context) {
    throw new Error("useOfflineDocs must be used within OfflineDocsProvider.");
  }

  return context;
};
