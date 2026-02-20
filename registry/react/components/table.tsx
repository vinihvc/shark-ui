import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

interface TableProps extends React.ComponentProps<typeof ark.table> {
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
    <div className="relative w-full overflow-auto" data-slot="table-wrapper">
      <ark.table
        className={cn(
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

export const TableHeader = (props: React.ComponentProps<typeof ark.thead>) => {
  const { className, ...rest } = props;

  return (
    <ark.thead
      className={cn("[&_tr]:border-b", className)}
      data-slot="table-header"
      {...rest}
    />
  );
};

export interface TableBodyProps
  extends React.ComponentProps<typeof ark.tbody> {}

export const TableBody = (props: TableBodyProps) => {
  const { className, ...rest } = props;

  return (
    <ark.tbody
      className={cn("[&_tr:last-child]:border-0", className)}
      data-slot="table-body"
      {...rest}
    />
  );
};

export const TableFooter = (props: React.ComponentProps<typeof ark.tfoot>) => {
  const { className, ...rest } = props;

  return (
    <ark.tfoot
      className={cn(
        "border-t",
        "bg-muted/50",
        "font-medium",
        "last:[&>tr]:border-b-0",
        className
      )}
      data-slot="table-footer"
      {...rest}
    />
  );
};

export const TableRow = (props: React.ComponentProps<typeof ark.tr>) => {
  const { className, ...rest } = props;

  return (
    <ark.tr
      className={cn(
        "border-b",
        "data-[state=selected]:bg-muted",
        "group-data-[variant=striped]/table:even:bg-muted/30",
        "group-data-[hoverable=true]/table:[&:has(td):hover]:bg-muted/50",
        className
      )}
      data-slot="table-row"
      {...rest}
    />
  );
};

export const TableHead = (props: React.ComponentProps<typeof ark.th>) => {
  const { className, ...rest } = props;

  return (
    <ark.th
      className={cn(
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

export const TableCell = (props: React.ComponentProps<typeof ark.td>) => {
  const { className, ...rest } = props;

  return (
    <ark.td
      className={cn(
        "whitespace-nowrap p-2 align-middle",
        "[&:has([role=checkbox])]:ps-2 [&:has([role=checkbox])]:pe-0",
        className
      )}
      data-slot="table-cell"
      {...rest}
    />
  );
};

export const TableCaption = (
  props: React.ComponentProps<typeof ark.caption>
) => {
  const { className, ...rest } = props;

  return (
    <ark.caption
      className={cn("mt-4", "text-muted-foreground text-sm", className)}
      data-slot="table-caption"
      {...rest}
    />
  );
};
