import { ark } from "@ark-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";

const buttonGroupVariants = tv({
  base: [
    "flex w-fit items-stretch",
    "*:not([class*='w-']):w-fit",
    "*:not([class*='flex-']):flex-1",
    "*:focus-visible:relative *:focus-visible:z-10",
    "has-[>[data-slot=button-group]]:gap-2",
    "has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md",
  ],
  variants: {
    orientation: {
      horizontal: [
        "[&>*:not(:first-child)]:rounded-l-none",
        "[&>*:not(:first-child)]:border-l-0",
        "[&>*:not(:last-child)]:rounded-r-none",
      ],
      vertical: [
        "flex-col",
        "[&>*:not(:first-child)]:rounded-t-none",
        "[&>*:not(:first-child)]:border-t-0",
        "[&>*:not(:last-child)]:rounded-b-none",
      ],
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface ButtonGroupProps
  extends React.ComponentProps<typeof ark.fieldset>,
    VariantProps<typeof buttonGroupVariants> {}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, orientation, ...rest } = props;

  return (
    <ark.fieldset
      className={cn(buttonGroupVariants({ orientation }), className)}
      data-orientation={orientation}
      data-part="root"
      data-scope="button-group"
      {...rest}
    />
  );
};

export const ButtonGroupText = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center gap-2 px-4",
        "font-medium text-sm",
        "rounded-md border bg-muted shadow-xs",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className
      )}
      data-part="text"
      data-scope="button-group"
      {...rest}
    />
  );
};

export const ButtonGroupSeparator = (
  props: React.ComponentProps<typeof Separator>
) => {
  const { orientation = "vertical", className, ...rest } = props;

  return (
    <Separator
      className={cn(
        "relative",
        "self-stretch",
        "bg-input",
        "data-[orientation=vertical]:h-auto",
        "m-0!",
        className
      )}
      data-part="separator"
      data-scope="button-group"
      orientation={orientation}
      {...rest}
    />
  );
};
