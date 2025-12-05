import { cn } from "@/lib/utils";

export const KbdGroup = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <kbd
      className={cn("inline-flex items-center gap-1", className)}
      data-part="group"
      data-scope="kbd"
      {...rest}
    />
  );
};

export const Kbd = (props: React.ComponentProps<"kbd">) => {
  const { className, ...rest } = props;

  return (
    <kbd
      className={cn(
        "h-5 w-fit min-w-5",
        "inline-flex items-center justify-center gap-1",
        "px-1",
        "bg-muted",
        "select-none font-medium font-sans text-muted-foreground text-xs",
        "rounded-sm",
        "pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-3",
        className
      )}
      data-part="root"
      data-scope="kbd"
      {...rest}
    />
  );
};
