import { cn } from "@/lib/utils";

export const BlocksThumb = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-lg",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col gap-2 rounded-lg border bg-muted/48 p-3">
        <div className="h-2 w-3/5 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-4/5 rounded-full bg-muted-foreground/8" />
        <div className="mt-2 h-6 w-20 rounded-md bg-muted-foreground/16" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded-md border bg-muted-foreground/16" />
        <div className="h-8 flex-1 rounded-md border bg-muted-foreground/8" />
      </div>
      <div className="flex gap-1 rounded-b-lg border-t pt-2">
        <div className="h-2 flex-1 rounded-full bg-muted-foreground/16" />
        <div className="h-2 flex-1 rounded-full bg-muted-foreground/8" />
        <div className="h-2 flex-1 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  );
};
