import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QuestionnaireThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border bg-muted p-3">
      <div className="h-1.5 w-8 rounded bg-muted-foreground/24" />
      <div className="h-2.5 w-3/4 rounded bg-muted-foreground/48" />
      <div className="flex items-center gap-2 rounded-md border border-primary/32 p-2">
        <div className="size-2.5 rounded-full bg-primary" />
        <div className="h-1.5 w-2/3 rounded bg-muted-foreground/48" />
      </div>
      <div className="flex items-center gap-2 rounded-md border p-2">
        <div className="size-2.5 rounded-full border border-muted-foreground/48" />
        <div className="h-1.5 w-1/2 rounded bg-muted-foreground/24" />
      </div>
      <div className="ms-auto h-5 w-12 rounded bg-primary" />
    </div>
  </ThumbCard>
);
