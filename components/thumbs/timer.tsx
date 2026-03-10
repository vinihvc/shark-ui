import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TimerThumb = ({
  description = "",
  title = "Timer",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="inline-flex w-fit items-center justify-center gap-2 rounded-lg border bg-muted px-6 py-4 font-semibold text-muted-foreground text-xl tabular-nums shadow-md/5">
      <div className="h-1.5 w-6 rounded-full bg-muted-foreground/16" />
      <div className="flex flex-col gap-1">
        <div className="size-0.5 rotate-90 rounded-full bg-muted-foreground/32" />
        <div className="size-0.5 rotate-90 rounded-full bg-muted-foreground/32" />
      </div>
      <div className="h-1.5 w-6 rounded-full bg-muted-foreground/16" />
      <div className="flex flex-col gap-1">
        <div className="size-0.5 rotate-90 rounded-full bg-muted-foreground/32" />
        <div className="size-0.5 rotate-90 rounded-full bg-muted-foreground/32" />
      </div>
      <div className="h-1.5 w-6 rounded-full bg-muted-foreground/16" />
      <div className="flex flex-col gap-1">
        <div className="size-0.5 rotate-90 rounded-full bg-muted-foreground/32" />
        <div className="size-0.5 rotate-90 rounded-full bg-muted-foreground/32" />
      </div>
      <div className="h-1.5 w-6 rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
