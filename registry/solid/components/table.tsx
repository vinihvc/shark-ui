import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

interface TableProps extends ComponentProps<typeof ark.table> {
  /**
   * Whether the table rows are hoverable.
   *
   * @default true
   */
  isHoverable?: boolean;
  /**
   * The variant of the table.
   *
   * @default "plain"
   */
  variant?: "plain" | "striped";
}

export const Table = (props: TableProps) => {
  const { variant = "plain", isHoverable = true, className, ...rest } = props;

  return (
    <div class="relative w-full overflow-auto" data-slot="table-wrapper">
      <ark.table
        class={cn(
          "group/table",
          "w-full",
          "caption-bottom",
          "text-foreground text-sm",
          className
        )}
        data-hoverable={isHoverable}
        data-slot="table"
        data-variant={variant}
        {...rest}
      />
    </div>
  );
};

export const TableHeader = (props: ComponentProps<typeof ark.thead>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.thead
      class={cn("[&_tr]:border-b", className)}
      data-slot="table-header"
      {...rest}
    />
  );
};

export interface TableBodyProps extends ComponentProps<typeof ark.tbody> {}

export const TableBody = (props: TableBodyProps) => {
  const { class: className, ...rest } = props;

  return (
    <ark.tbody
      class={cn("[&_tr:last-child]:border-0", className)}
      data-slot="table-body"
      {...rest}
    />
  );
};

export const TableFooter = (props: ComponentProps<typeof ark.tfoot>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.tfoot
      class={cn(
        "border-t",
        "bg-muted/48",
        "font-medium",
        "last:[&>tr]:border-b-0",
        className
      )}
      data-slot="table-footer"
      {...rest}
    />
  );
};

export const TableRow = (props: ComponentProps<typeof ark.tr>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.tr
      class={cn(
        "border-b",
        "data-[state=selected]:bg-muted",
        "group-data-[variant=striped]/table:even:bg-muted/30",
        "group-data-[hoverable=true]/table:[&:has(td):hover]:bg-muted/48",
        className
      )}
      data-slot="table-row"
      {...rest}
    />
  );
};

export const TableHead = (props: ComponentProps<typeof ark.th>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.th
      class={cn(
        "h-10 px-4",
        "text-left align-middle",
        "font-normal text-muted-foreground",
        "rtl:text-right",
        "[&:has([role=checkbox])]:ps-2 [&:has([role=checkbox])]:pe-0",
        className
      )}
      data-slot="table-head"
      {...rest}
    />
  );
};

export const TableCell = (props: ComponentProps<typeof ark.td>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.td
      class={cn(
        "whitespace-nowrap p-2 align-middle",
        "[&:has([role=checkbox])]:ps-2 [&:has([role=checkbox])]:pe-0",
        className
      )}
      data-slot="table-cell"
      {...rest}
    />
  );
};

export const TableCaption = (props: ComponentProps<typeof ark.caption>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.caption
      class={cn("mt-4", "text-muted-foreground text-sm", className)}
      data-slot="table-caption"
      {...rest}
    />
  );
};
