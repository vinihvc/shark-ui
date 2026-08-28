import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToolResultThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2">
      <div className="h-2 w-20 rounded-sm bg-foreground/40" />
      <div className="h-1.5 w-8 rounded-sm bg-muted-foreground/24" />
      <div className="ms-auto h-2 w-14 rounded-sm bg-muted-foreground/32" />
    </div>
  </ThumbCard>
);
