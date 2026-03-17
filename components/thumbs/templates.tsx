import { cn } from "@/lib/utils";

export const TemplatesThumb = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-xl border bg-card shadow-lg",
        className
      )}
      {...rest}
    >
      <div className="flex w-12 shrink-0 flex-col gap-1 border-r bg-muted/48 p-2">
        <div className="h-2 w-full rounded bg-muted-foreground/16" />
        <div className="h-2 w-full rounded bg-muted-foreground/8" />
        <div className="h-2 w-3/4 rounded bg-muted-foreground/16" />
        <div className="h-2 w-full rounded bg-muted-foreground/8" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex gap-2">
          <div className="h-2 w-2/5 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-1/5 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="rounded-md border bg-muted-foreground/16" />
          <div className="rounded-md border bg-muted-foreground/8" />
          <div className="rounded-md border bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  );
};
