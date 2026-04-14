import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

interface DataListProps extends ComponentProps<typeof ark.dl> {
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
      class={cn("group/data-list", "flex flex-col gap-1", "text-sm", className)}
      data-orientation={orientation}
      data-slot="data-list"
      {...rest}
    >
      {children}
    </ark.dl>
  );
};

export const DataListItem = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
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

export const DataListItemLabel = (props: ComponentProps<typeof ark.dt>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.dt
      class={cn(
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

export const DataListItemValue = (props: ComponentProps<typeof ark.dd>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.dd
      class={cn("flex-1", "text-foreground", className)}
      data-slot="data-list-item-value"
      {...rest}
    />
  );
};
