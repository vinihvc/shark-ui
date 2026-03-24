import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ActionBarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="rounded-lg border border-input border-dashed bg-muted shadow-md/5">
      <div className="flex h-8 items-center gap-2 px-2">
        <div className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
        <div className="ms-auto flex gap-1.5">
          <div className="size-5 rounded-md bg-muted-foreground/8" />
          <div className="size-5 rounded-md bg-muted-foreground/8" />
          <div className="size-5 rounded-md bg-primary" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
