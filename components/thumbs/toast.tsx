import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ToastThumb = ({
  description = "",
  title = "Toast",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="relative flex min-h-14 w-full items-end justify-center">
      {/* Stacked background toasts - peeking from behind */}
      <div
        aria-hidden
        className="absolute top-0 right-4 h-9 w-5/6 scale-90 rounded-full border bg-card"
      />
      <div
        aria-hidden
        className="absolute top-2 right-2 h-9 w-5/6 scale-95 rounded-full border bg-card"
      />
      {/* Primary toast - front */}
      <div className="relative z-10 flex w-full items-start gap-2 rounded-full border bg-card px-3 py-2.5 shadow-md/5">
        <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-muted-foreground/40 bg-muted">
          <span
            aria-hidden
            className="font-bold text-[10px] text-muted-foreground"
          >
            !
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-4/5 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
