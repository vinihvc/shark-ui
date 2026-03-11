import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const InputOtpThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="flex h-8 w-full items-center justify-center rounded-lg border bg-muted shadow-md/5"
          key={index}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/16" />
        </div>
      ))}

      <hr className="mx-1 h-1 w-2 shrink-0 rounded-full bg-muted-foreground/16" />

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="flex h-8 w-full items-center justify-center rounded-lg border bg-muted shadow-md/5"
          key={index}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/16" />
        </div>
      ))}
    </div>
  </BlockThumbCard>
);
