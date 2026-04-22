import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AnnouncementThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-6 items-center gap-2 rounded-lg border border-input bg-muted p-0.5 shadow-md/5">
      <div className="flex h-full w-10 items-center justify-center rounded-md bg-primary px-1.5">
        <div className="h-1 w-full rounded-full bg-primary-foreground" />
      </div>
      <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/16 px-2" />
    </div>
  </ThumbCard>
);
