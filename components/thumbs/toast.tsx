import { InfoIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ToastThumb = ({
  description = "",
  title = "Toast",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="relative isolate flex min-h-14 items-center justify-center">
      <div className="absolute inset-x-0 -top-3 h-12 w-full scale-90 rounded-lg border bg-muted opacity-32" />
      <div className="absolute inset-x-0 -top-1 h-12 w-full scale-95 rounded-lg border bg-muted opacity-64" />

      <div className="relative z-10 flex h-12 w-full items-center justify-start gap-2 rounded-lg border bg-muted px-3 shadow-md/5">
        <div className="mt-4 flex h-full items-start justify-start">
          <InfoIcon aria-hidden className="size-3 text-muted-foreground/64" />
        </div>
        <div className="flex w-full flex-1 flex-col gap-1.5">
          <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
