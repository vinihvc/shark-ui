"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

interface DataListProps extends React.ComponentProps<typeof ark.dl> {
  /**
   * The orientation of the data list.
   *
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export const DataList = (props: DataListProps) => {
  const { orientation = "horizontal", className, children, ...rest } = props;

  return (
    <ark.dl
      className={cn(
        "group/data-list",
        "flex flex-col gap-1",
        "text-sm",
        className
      )}
      data-orientation={orientation}
      data-slot="data-list"
      {...rest}
    >
      {children}
    </ark.dl>
  );
};

export const DataListItem = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex gap-4 py-2",
        "group-data-[orientation=horizontal]/data-list:flex-row group-data-[orientation=horizontal]/data-list:items-center",
        "group-data-[orientation=vertical]/data-list:flex-col group-data-[orientation=vertical]/data-list:gap-1",
        className
      )}
      data-slot="data-list-item"
      {...rest}
    />
  );
};

export const DataListItemLabel = (
  props: React.ComponentProps<typeof ark.dt>
) => {
  const { className, ...rest } = props;

  return (
    <ark.dt
      className={cn(
        "min-w-24 shrink-0",
        "font-medium text-muted-foreground",
        "group-data-[orientation=vertical]/data-list:min-w-0",
        className
      )}
      data-slot="data-list-item-label"
      {...rest}
    />
  );
};

export const DataListItemValue = (
  props: React.ComponentProps<typeof ark.dd>
) => {
  const { className, ...rest } = props;

  return (
    <ark.dd
      className={cn("flex-1", "text-foreground", className)}
      data-slot="data-list-item-value"
      {...rest}
    />
  );
};
