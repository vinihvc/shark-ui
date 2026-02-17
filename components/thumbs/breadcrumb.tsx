import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const BreadcrumbThumb = ({
  description = "",
  title = "Breadcrumb",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <nav className="flex w-56 items-center gap-1 text-muted-foreground text-sm">
      <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />

      <div className="h-0.5 w-3 shrink-0 -rotate-45 rounded-full bg-muted-foreground/16" />

      <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />

      <div className="h-0.5 w-3 shrink-0 -rotate-45 rounded-full bg-muted-foreground/16" />

      <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
    </nav>
  </BlockThumbCard>
);
