import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const InputOtpThumb = ({
  description = "",
  title = "Input OTP",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="flex h-8 w-full items-center justify-center rounded border shadow-md/5"
          key={index}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/32" />
        </div>
      ))}

      <hr className="mx-1 h-1 w-2 shrink-0 rounded-full bg-muted-foreground/16" />

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="flex h-8 w-full items-center justify-center rounded border shadow-md/5"
          key={index}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/32" />
        </div>
      ))}
    </div>
  </BlockThumbCard>
);
