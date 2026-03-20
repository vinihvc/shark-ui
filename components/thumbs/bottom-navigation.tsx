import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BottomNavigationThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-52 flex-col gap-4">
      <div className="flex min-h-8 items-center justify-around rounded-lg border bg-muted p-2 shadow-md/5">
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex size-6 items-center justify-center rounded-full bg-muted-foreground/16" />
          <div className="h-1 w-6 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="h-6 w-6 rounded-full bg-muted-foreground/8" />
          <div className="h-1 w-6 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="h-6 w-6 rounded-full bg-muted-foreground/8" />
          <div className="h-1 w-6 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
