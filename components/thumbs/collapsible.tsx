import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CollapsibleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex items-center justify-between gap-2 border-b border-input p-3">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
        <span
          aria-hidden="true"
          className="rotate-180 text-muted-foreground text-xs"
        >
          ⌃
        </span>
      </div>
      <div className="flex flex-col gap-1.5 border-border border-b border-input p-3">
        <div className="flex w-full flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
