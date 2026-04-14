import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const Card = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "[--space:--spacing(4)]",
        "group/card",
        "py-(--space)",
        "flex flex-col gap-4",
        "bg-card",
        "text-foreground",
        "has-data-[variant=image]:pt-0 has-data-[slot=card-footer]:pb-0",
        "rounded-xl border shadow-xs/5",
        className
      )}
      data-slot="card"
      {...rest}
    />
  );
};

const cardMediaVariants = tv({
  base: [
    "flex shrink-0 items-center gap-2",
    "[&_svg]:pointer-events-none",
    "px-(--space)",
  ],
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "[&_svg:not([class*='size-'])]:size-4",
      image: [
        "overflow-hidden rounded-t-sm",
        "px-0",
        "[&_img]:size-full [&_img]:object-cover",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardMediaProps
  extends ComponentProps<typeof ark.div>,
    VariantProps<typeof cardMediaVariants> {}

export const CardMedia = (props: CardMediaProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      class={cn(cardMediaVariants({ variant, className }), className)}
      data-slot="card-media"
      data-variant={variant}
      {...rest}
    />
  );
};

interface HeaderProps extends ComponentProps<typeof ark.div> {
  /**
   * The description of the card
   */
  description?: string;
  /**
   * The title of the card
   */
  title?: string;
}

export const CardHeader = (props: HeaderProps) => {
  const { class: className, title, description, children, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "grid auto-rows-min grid-rows-[auto_auto] gap-1",
        "px-(--space)",
        "items-start",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className
      )}
      data-slot="card-header"
      {...rest}
    >
      {!!title && <CardTitle>{title}</CardTitle>}
      {!!description && <CardDescription>{description}</CardDescription>}
      {!title && typeof children === "string" ? (
        <CardTitle>{children}</CardTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const CardTitle = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "font-semibold text-foreground text-lg/6 sm:text-base/6",
        className
      )}
      data-slot="card-title"
      {...rest}
    />
  );
};

export const CardDescription = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("row-start-2", "text-muted-foreground text-sm", className)}
      data-slot="card-description"
      {...rest}
    />
  );
};

export const CardAction = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      data-slot="card-action"
      {...rest}
    />
  );
};

export const CardContent = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("px-(--space)", className)}
      data-slot="card-content"
      {...rest}
    />
  );
};

export const CardFooter = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex items-center gap-2",
        "px-(--space)",
        "bg-muted/48",
        "rounded-b-xl border-t",
        "py-(--space)",
        className
      )}
      data-slot="card-footer"
      {...rest}
    />
  );
};
