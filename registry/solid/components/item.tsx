import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/solid/components/separator";

export const ItemGroup = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("group/item-group", "flex w-full flex-col gap-4", className)}
      data-slot="item-group"
      role="list"
      {...rest}
    />
  );
};

export const ItemSeparator = (props: ComponentProps<typeof Separator>) => {
  const { class: className, ...rest } = props;

  return (
    <Separator
      class={cn("my-2", className)}
      data-slot="item-separator"
      orientation="horizontal"
      {...rest}
    />
  );
};

const itemVariants = tv({
  base: [
    "[--space:--spacing(3)]",
    "group/item",
    "flex w-full flex-wrap items-center",
    "gap-(--space) p-(--space)",
    "in-data-[slot=menu-content]:p-0",
    "text-sm",
    "rounded-xl border",
    "transition-colors duration-100",
    "[a]:transition-colors [a]:hover:bg-muted",
    "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: "border-transparent",
      outline: "border-border shadow-xs/5",
      muted: "border-transparent bg-muted/48 shadow-muted/5 shadow-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ItemProps
  extends ComponentProps<typeof ark.div>,
    VariantProps<typeof itemVariants> {}

export const Item = (props: ItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      class={cn(itemVariants({ variant }), className)}
      data-slot="item"
      data-variant={variant}
      {...rest}
    />
  );
};

const itemMediaVariants = tv({
  base: [
    "flex shrink-0 items-center justify-center gap-2",
    "group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start",
    "[&_svg]:pointer-events-none",
  ],
  variants: {
    variant: {
      default: "bg-transparent",
      icon: ["[&_svg:not([class*='size-'])]:size-4"],
      image: [
        "size-10",
        "rounded-xl",
        "overflow-hidden",
        "[&_img]:size-full [&_img]:object-cover",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ItemMediaProps
  extends ComponentProps<typeof ark.div>,
    VariantProps<typeof itemMediaVariants> {}

export const ItemMedia = (props: ItemMediaProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      class={cn(itemMediaVariants({ variant, className }))}
      data-slot="item-media"
      data-variant={variant}
      {...rest}
    />
  );
};

export const ItemContent = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex flex-1 flex-col gap-0.5",
        "[&+[data-slot=item-content]]:flex-none",
        className
      )}
      data-slot="item-content"
      {...rest}
    />
  );
};

export const ItemTitle = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "w-fit",
        "flex items-center gap-2",
        "line-clamp-1 font-medium text-sm leading-snug",
        "underline-offset-4",
        className
      )}
      data-slot="item-title"
      {...rest}
    />
  );
};

export const ItemDescription = (props: ComponentProps<typeof ark.p>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.p
      class={cn(
        "line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-normal",
        "[&>a:hover]:text-primary",
        "[&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="item-description"
      {...rest}
    />
  );
};

export const ItemActions = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("flex items-center gap-2", className)}
      data-slot="item-actions"
      {...rest}
    />
  );
};

export const ItemHeader = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex basis-full items-center justify-between gap-2",
        "[&_img]:size-full [&_img]:rounded-xl [&_img]:object-cover",
        className
      )}
      data-slot="item-header"
      {...rest}
    />
  );
};

export const ItemFooter = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      data-slot="item-footer"
      {...rest}
    />
  );
};
