"use client";

import React from "react";

export const UnregisterLegacyServiceWorker = () => {
  React.useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

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
  }, []);

  return null;
};
