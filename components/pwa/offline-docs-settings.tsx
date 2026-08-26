"use client";

import { useSerwist } from "@serwist/next/react";
import { useCallback, useEffect, useState } from "react";
import { useOfflineDocs } from "@/components/pwa/offline-docs-context";
import {
  OFFLINE_DOCS_MANIFEST_URL,
  OFFLINE_DOCS_REVISION_KEY,
  type OfflineDocsManifest,
} from "@/lib/offline-docs";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const BATCH_SIZE = 8;
const PREVIEW_TOTAL = 48;
const PREVIEW_STEP_MS = 25;

type DownloadState = "idle" | "saving" | "saved" | "error";

const fetchManifest = async (): Promise<OfflineDocsManifest> => {
  const response = await fetch(OFFLINE_DOCS_MANIFEST_URL);
  if (!response.ok) {
    throw new Error("Failed to load offline docs manifest.");
  }
  return response.json() as Promise<OfflineDocsManifest>;
};

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

const getStatusLabel = (
  state: DownloadState,
  progress: { done: number; total: number }
) => {
  if (state === "saving") {
    return `Downloading: ${progress.done} / ${progress.total}`;
  }
  if (state === "saved") {
    return `Downloaded: ${progress.done} / ${progress.total}`;
  }
  if (state === "error") {
    return "Download failed. Toggle again to retry.";
  }
  return null;
};

export const OfflineDocsSettings = () => {
  const { serwist } = useSerwist();
  const { enabled, setEnabled } = useOfflineDocs();
  const [state, setState] = useState<DownloadState>("idle");
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  useEffect(() => {
    if (!enabled) {
      setState("idle");
      setProgress({ done: 0, total: 0 });
      return;
    }

    let cancelled = false;

    const cacheFromManifest = async () => {
      if (!serwist) {
        return;
      }

      const manifest = await fetchManifest();
      if (cancelled) {
        return;
      }

      const savedRevision = localStorage.getItem(OFFLINE_DOCS_REVISION_KEY);
      const total = manifest.urls.length;

      if (savedRevision === manifest.revision) {
        setProgress({ done: total, total });
        setState("saved");
        return;
      }

      setState("saving");
      setProgress({ done: 0, total });

      const cacheBatch = async (index: number): Promise<void> => {
        if (cancelled || index >= total) {
          return;
        }
        const batch = manifest.urls.slice(index, index + BATCH_SIZE);
        await serwist.messageSW({
          payload: { urlsToCache: batch },
          type: "CACHE_URLS",
        });
        setProgress({
          done: Math.min(index + BATCH_SIZE, total),
          total,
        });
        await cacheBatch(index + BATCH_SIZE);
      };

      await cacheBatch(0);

      if (cancelled) {
        return;
      }

      localStorage.setItem(OFFLINE_DOCS_REVISION_KEY, manifest.revision);
      setState("saved");
    };

    const previewDownload = async () => {
      setState("saving");
      setProgress({ done: 0, total: PREVIEW_TOTAL });

      const tick = async (done: number): Promise<void> => {
        if (cancelled || done > PREVIEW_TOTAL) {
          return;
        }
        setProgress({ done, total: PREVIEW_TOTAL });
        if (done === PREVIEW_TOTAL) {
          setState("saved");
          return;
        }
        await wait(PREVIEW_STEP_MS);
        await tick(done + 1);
      };

      await tick(0);
    };

    const run = serwist ? cacheFromManifest() : previewDownload();

    run.catch(() => {
      if (!cancelled) {
        setState("error");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [enabled, serwist]);

  const handleCheckedChange = useCallback(
    (details: { checked: boolean }) => {
      setEnabled(details.checked);
    },
    [setEnabled]
  );

  const statusLabel = getStatusLabel(state, progress);

  return (
    <div className="flex flex-col gap-3">
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Available offline</FieldTitle>
            <FieldDescription>
              Disable this option to remove the service worker and clear the
              cache.
            </FieldDescription>
          </FieldContent>
          <Switch
            checked={enabled}
            disabled={state === "saving"}
            onCheckedChange={handleCheckedChange}
          />
        </Field>
      </FieldLabel>

      {statusLabel ? (
        <div
          className="flex h-8 w-full items-center justify-center rounded-full bg-primary px-3 text-center font-medium text-primary-foreground text-sm"
          role="status"
        >
          {statusLabel}
        </div>
      ) : null}
    </div>
  );
};
