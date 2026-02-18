import { ChevronLeftIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const DatePickerThumb = ({
  description = "",
  title = "Date Picker",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="relative flex w-48 flex-col gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex items-center justify-between gap-1">
        <div className="flex size-5 items-center justify-center rounded-lg border bg-muted">
          <span aria-hidden className="text-muted-foreground/64">
            <ChevronLeftIcon className="size-3" />
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1">
          <div className="h-2 w-full rounded-lg bg-muted-foreground/16" />
          <div className="h-2 w-3/4 rounded-lg bg-muted-foreground/16" />
        </div>
        <div className="flex size-5 items-center justify-center rounded-lg border bg-muted">
          <span aria-hidden className="text-muted-foreground/64">
            <ChevronLeftIcon className="size-3 rotate-180" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 place-content-center gap-1.5">
        {Array.from({ length: 5 }, (_, i) => `day-${i}`).map((key) => (
          <div className="h-1.5 rounded-lg bg-muted-foreground/16" key={key} />
        ))}
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-1.5">
        {Array.from({ length: 10 }, (_, i) => `cell-${i}`).map((key) => (
          <div className="relative flex flex-col items-center" key={key}>
            <div className="flex size-6 items-center justify-center rounded-lg bg-muted-foreground/8" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 size-full rounded-b-lg bg-linear-to-b from-transparent via-transparent to-muted" />
    </div>
  </BlockThumbCard>
);
