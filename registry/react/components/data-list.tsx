"use client";

import { ark } from "@ark-ui/react/factory";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const dataListVariants = tv({
  slots: {
    root: ["flex flex-col gap-1", "text-sm"],
    item: ["flex gap-4", "py-2"],
    itemLabel: ["min-w-24 shrink-0", "font-medium text-muted-foreground"],
    itemValue: ["flex-1", "text-foreground"],
  },
  variants: {
    orientation: {
      vertical: {
        item: "flex-col gap-1",
        itemLabel: "min-w-0",
      },
      horizontal: {
        item: "flex-row items-center",
      },
    },
    size: {
      sm: {
        root: "text-xs",
        item: "py-1.5",
      },
      md: {
        root: "text-sm",
        item: "py-2",
      },
      lg: {
        root: "text-base",
        item: "py-2.5",
      },
    },
    variant: {
      subtle: {
        itemLabel: "text-muted-foreground",
      },
      bold: {
        itemLabel: "font-semibold text-foreground",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
    variant: "subtle",
  },
});

type DataListContextValue = VariantProps<typeof dataListVariants>;

const DataListContext = React.createContext<DataListContextValue>({});

interface DataListRootProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof dataListVariants> {}

export const DataListRoot = (props: DataListRootProps) => {
  const {
    orientation = "horizontal",
    size = "md",
    variant = "subtle",
    className,
    children,
    ...rest
  } = props;
  const { root } = dataListVariants({ orientation, size, variant });
  const context = React.useMemo(
    () => ({ orientation, size, variant }),
    [orientation, size, variant]
  );

  return (
    <DataListContext.Provider value={context}>
      <ark.div
        className={cn(root(), className)}
        data-slot="data-list"
        {...rest}
      >
        {children}
      </ark.div>
    </DataListContext.Provider>
  );
};

export const DataListItem = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;
  const context = React.useContext(DataListContext);
  const { item } = dataListVariants({
    orientation: context.orientation ?? "horizontal",
    size: context.size ?? "md",
    variant: context.variant ?? "subtle",
  });

  return (
    <ark.div
      className={cn(item(), className)}
      data-slot="data-list-item"
      {...rest}
    />
  );
};

export const DataListItemLabel = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  const context = React.useContext(DataListContext);
  const { itemLabel } = dataListVariants({
    orientation: context.orientation ?? "horizontal",
    size: context.size ?? "md",
    variant: context.variant ?? "subtle",
  });

  return (
    <ark.div
      className={cn(itemLabel(), className)}
      data-slot="data-list-item-label"
      {...rest}
    />
  );
};

export const DataListItemValue = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  const context = React.useContext(DataListContext);
  const { itemValue } = dataListVariants({
    orientation: context.orientation ?? "horizontal",
    size: context.size ?? "md",
    variant: context.variant ?? "subtle",
  });

  return (
    <ark.div
      className={cn(itemValue(), className)}
      data-slot="data-list-item-value"
      {...rest}
    />
  );
};
