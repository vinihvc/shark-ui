import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AutocompleteThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-col gap-4 rounded-lg border border-input border-dashed bg-muted p-3 shadow-md/5">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex h-8 items-center rounded-lg border border-input bg-muted px-4 shadow-md/5">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
