import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-1",
    "px-2 py-0.5",
    "rounded-md border",
    "select-none font-medium text-xs",
    "overflow-hidden",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
  ],
  variants: {
    variant: {
      default: [
        "bg-primary text-primary-foreground",
        "[a&]:hover:bg-primary/90",
      ],
      secondary: [
        "bg-secondary text-secondary-foreground",
        "[a&]:hover:bg-secondary/90",
      ],
      destructive: [
        "bg-destructive dark:bg-destructive/60",
        "text-destructive-foreground",
        "focus-visible:ring-destructive/20",
        "dark:focus-visible:ring-destructive/40",
        "[a&]:hover:bg-destructive/90",
      ],
      outline: ["[a&]:hover:bg-accent", "[a&]:hover:text-accent-foreground"],
    },
  },
});

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  /**
   * If `true`, the badge will render the child as a slot.
   *
   * @default false
   */
  asChild?: boolean;
}

export const Badge = (props: BadgeProps) => {
  const { asChild, variant = "default", className, ...rest } = props;

  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      data-part="badge"
      {...rest}
    />
  );
};
