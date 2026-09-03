import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FileThumbnailThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative h-14 w-11 rounded-md border bg-muted">
      <div className="absolute -start-2 bottom-2 rounded-md border-t border-t-muted-foreground/30 bg-muted-foreground px-1.5 py-0.5 font-medium text-[11px] text-background uppercase leading-none shadow-xs">
        PDF
      </div>
    </div>
  </ThumbCard>
);
