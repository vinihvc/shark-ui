import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PromptInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-2xl border bg-muted p-2">
      <div className="h-8 rounded-md bg-muted-foreground/16" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="size-5 rounded-full bg-muted-foreground/16" />
          <div className="h-4 w-14 rounded-sm bg-muted-foreground/16" />
        </div>
        <div className="size-6 rounded-full bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
