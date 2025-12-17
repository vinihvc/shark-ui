import { ark } from "@ark-ui/react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The orientation of the separator.
   *
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export const Separator = (props: SeparatorProps) => {
  const { orientation = "horizontal", className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "my-4 shrink-0",
        "bg-border",
        "data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full",
        "data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
        className
      )}
      data-orientation={orientation}
      data-part="root"
      data-scope="separator"
      role="none"
      {...rest}
    />
  );
};
