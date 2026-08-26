import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SpeechInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center justify-center">
      <div className="grid size-9 place-items-center rounded-full bg-muted">
        <div className="size-3 rounded-full bg-muted-foreground/40" />
      </div>
    </div>
  </ThumbCard>
);
