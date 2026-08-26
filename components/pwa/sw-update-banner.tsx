"use client";

import { useSerwist } from "@serwist/next/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/registry/react/components/button";

export const SwUpdateBanner = () => {
  const { serwist } = useSerwist();
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (!serwist) {
      return;
    }

    const onWaiting = () => {
      setWaiting(true);
    };

    serwist.addEventListener("waiting", onWaiting);

    return () => {
      serwist.removeEventListener("waiting", onWaiting);
    };
  }, [serwist]);

  const handleReload = useCallback(() => {
    if (!serwist) {
      return;
    }
    serwist.addEventListener("controlling", () => {
      window.location.reload();
    });
    serwist.messageSkipWaiting();
  }, [serwist]);

  if (!(serwist && waiting)) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
      role="status"
    >
      <div className="flex max-w-md items-center gap-3 rounded-xl border bg-background px-3 py-2 text-sm shadow-lg">
        <p className="text-muted-foreground">A new version is available.</p>
        <Button onClick={handleReload} size="sm">
          Reload
        </Button>
      </div>
    </div>
  );
};
