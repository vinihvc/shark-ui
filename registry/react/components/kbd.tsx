import { ark } from "@ark-ui/react";
import { cn } from "@/lib/utils";

interface KbdGroupProps extends React.ComponentProps<typeof ark.div> {}

export const KbdGroup = (props: KbdGroupProps) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "[--gap:--spacing(1)]",
        "inline-flex items-center gap-(--gap)",
        className
      )}
      data-slot="kbd-group"
      {...rest}
    />
  );
};

export const Kbd = (props: React.ComponentProps<typeof ark.kbd>) => {
  const { className, ...rest } = props;

  return (
    <ark.kbd
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
      data-slot="kbd"
      {...rest}
    />
  );
};
