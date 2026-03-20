import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputOtpThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="flex h-8 w-full items-center justify-center rounded-lg border border-input bg-muted shadow-md/5"
          key={index}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/16" />
        </div>
      ))}

      <hr className="mx-1 h-1 w-2 shrink-0 rounded-full bg-muted-foreground/16" />

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="flex h-8 w-full items-center justify-center rounded-lg border border-input bg-muted shadow-md/5"
          key={index}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/16" />
        </div>
      ))}
    </div>
  </ThumbCard>
);
