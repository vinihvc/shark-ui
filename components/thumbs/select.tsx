import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SelectThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 w-48 items-center rounded-lg border border-input bg-muted px-2 shadow-md/5">
      <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
      <div className="ml-auto rotate-180">
        <span aria-hidden className="text-muted-foreground/64 text-xs">
          ⌃
        </span>
      </div>
    </div>
  </ThumbCard>
);
