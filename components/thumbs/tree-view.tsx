import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TreeViewThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-1.5 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="rotate-180 text-muted-foreground/64 text-xs"
        >
          ⌃
        </span>
        <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex items-center gap-2 pl-4">
        <span aria-hidden className="text-muted-foreground/64 text-xs">
          ⌃
        </span>
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex items-center gap-2 pl-4">
        <span aria-hidden className="text-muted-foreground/64 text-xs">
          ⌃
        </span>
        <div className="h-2 w-2/5 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
