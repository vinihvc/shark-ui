import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BreadcrumbThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <nav className="flex w-56 items-center gap-1 rounded-lg border bg-muted p-2 text-muted-foreground/64 text-sm shadow-md/5">
      <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />

      <div className="h-0.5 w-3 shrink-0 -rotate-45 rounded-full bg-muted-foreground/16" />

      <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />

      <div className="h-0.5 w-3 shrink-0 -rotate-45 rounded-full bg-muted-foreground/16" />

      <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
    </nav>
  </ThumbCard>
);
