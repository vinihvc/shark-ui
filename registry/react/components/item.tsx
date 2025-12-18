import { ark } from "@ark-ui/react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";

export const ItemGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cn("group/item-group flex flex-col", className)}
      data-slot="item-group"
      role="list"
      {...rest}
    />
  );
};

export const ItemSeparator = (
  props: React.ComponentProps<typeof Separator>
) => {
  const { className, ...rest } = props;

  return (
    <Separator
      className={cn("my-0", className)}
      data-slot="item-separator"
      orientation="horizontal"
      {...rest}
    />
  );
};

const itemVariants = tv({
  base: [
    "group/item",
    "flex flex-wrap items-center gap-2.5",
    "text-sm",
    "rounded-md border border-transparent",
    "[a]:transition-colors [a]:hover:bg-accent/50",
    "transition-colors duration-100",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
  ],
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border-border",
      muted: "bg-muted/50",
    },
    size: {
      sm: "gap-2.5 px-4 py-3",
      md: "gap-4 p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface ItemProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof itemVariants> {}

export const Item = (props: ItemProps) => {
  const { variant = "default", size = "md", className, ...rest } = props;

  return (
    <ark.div
      className={cn(itemVariants({ variant, size, className }))}
      data-size={size}
      data-slot="item"
      data-variant={variant}
      {...rest}
    />
  );
};

const itemMediaVariants = tv({
  base: [
    "flex shrink-0 items-center justify-center gap-2",
    "group-has-data-[slot=item-description]/item:translate-y-0.5",
    "group-has-data-[slot=item-description]/item:self-start",
    "[&_svg]:pointer-events-none",
  ],
  variants: {
    variant: {
      default: "bg-transparent",
      icon: [
        "size-8",
        "rounded-sm border bg-muted",
        "[&_svg:not([class*='size-'])]:size-4",
      ],
      image: [
        "size-10",
        "overflow-hidden rounded-sm",
        "[&_img]:size-full",
        "[&_img]:object-cover",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ItemMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof itemMediaVariants> {}

export const ItemMedia = (props: ItemMediaProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(itemMediaVariants({ variant, className }))}
      data-slot="item-media"
      data-variant={variant}
      {...rest}
    />
  );
};

export const ItemContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-1 flex-col gap-1",
        "[&+[data-slot=item-content]]:flex-none",
        className
      )}
      data-slot="item-content"
      {...rest}
    />
  );
};

export const ItemTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-fit items-center gap-2",
        "font-medium text-sm leading-snug",
        className
      )}
      data-slot="item-title"
      {...rest}
    />
  );
};

export const ItemDescription = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn(
        "line-clamp-2 text-balance font-normal text-muted-foreground text-sm leading-normal",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="item-description"
      {...rest}
    />
  );
};

export const ItemActions = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex items-center gap-2", className)}
      data-slot="item-actions"
      {...rest}
    />
  );
};

export const ItemHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      data-slot="item-header"
      {...rest}
    />
  );
};

export const ItemFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      data-slot="item-footer"
      {...rest}
    />
  );
};
