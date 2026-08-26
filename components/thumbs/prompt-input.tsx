import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PromptInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border bg-background p-2">
      <div className="h-8 rounded-md bg-muted" />
      <div className="flex items-center justify-between">
        <div className="size-5 rounded-md bg-muted" />
        <div className="size-6 rounded-full bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
