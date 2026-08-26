import { CalendarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DateInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 w-full max-w-48 items-center gap-1 rounded-lg border border-input bg-muted px-3 shadow-md/5">
      <div className="flex h-2 min-w-5 items-center justify-center rounded-sm bg-muted-foreground/12" />

      <span aria-hidden className="px-1 text-[10px] text-muted-foreground/48">
        /
      </span>

      <div className="flex h-2 min-w-5 items-center justify-center rounded-sm bg-muted-foreground/12" />

      <span className="aria-hidden px-1 text-[10px] text-muted-foreground/48">
        /
      </span>

      <div className="flex h-2 min-w-5 items-center justify-center rounded-sm bg-muted-foreground/12" />

      <CalendarIcon
        aria-hidden="true"
        className="ms-auto size-3 shrink-0 opacity-48"
      />
    </div>
  </ThumbCard>
);
