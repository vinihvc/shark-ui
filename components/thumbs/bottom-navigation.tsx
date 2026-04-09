import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BottomNavigationThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full max-w-48 flex-col gap-4">
      <div className="flex min-h-8 items-center justify-around rounded-lg border border-input border-dashed bg-muted p-2 shadow-md/5">
        <div className="flex flex-col items-center gap-1">
          <div className="flex size-4 items-center justify-center rounded-full bg-primary" />
          <div className="h-1 w-6 rounded-full bg-primary" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="size-4 rounded-full bg-muted-foreground/16" />
          <div className="h-1 w-6 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="size-4 rounded-full bg-muted-foreground/16" />
          <div className="h-1 w-6 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
