import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AnnouncementThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-6 items-center gap-2 rounded-full border border-input bg-muted px-2 shadow-md/5">
      <div className="flex h-3 items-center justify-center rounded-full bg-primary px-2">
        <div className="h-1 w-10 rounded-full bg-primary-foreground" />
      </div>
      <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/16 px-2" />
    </div>
  </ThumbCard>
);
