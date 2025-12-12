import { cn } from "@/lib/utils";

interface KbdGroupProps extends React.ComponentProps<"div"> {
  /**
   * The spacing variable value
   *
   * @default 1
   */
  spacing?: number;
}

export const KbdGroup = (props: KbdGroupProps) => {
  const { spacing = 1, className, ...rest } = props;

  return (
    <kbd
      className={cn("inline-flex items-center gap-(--gap)", className)}
      data-part="group"
      data-scope="kbd"
      style={
        {
          "--gap": `calc(${spacing} * var(--spacing))`,
        } as React.CSSProperties
      }
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
        "font-medium font-sans text-muted-foreground text-xs",
        "rounded-sm",
        "pointer-events-none select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        className
      )}
      data-part="root"
      data-scope="kbd"
      {...rest}
    />
  );
};
