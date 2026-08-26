"use client";

import {
  type Column,
  type ColumnDef,
  columnFilteringFeature,
  columnVisibilityFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  type ReactTable,
  type RowData,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  type TableOptions,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EyeOffIcon,
  Settings2Icon,
} from "lucide-react";
import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  useCallback,
} from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

export const dataTableFeatures = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: { includesString: filterFn_includesString },
  paginatedRowModel: createPaginatedRowModel(),
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
});

export type DataTableFeatures = typeof dataTableFeatures;

type DataTableOptions<TData extends RowData> = Omit<
  TableOptions<DataTableFeatures, TData>,
  "columns" | "data" | "features"
>;

export interface DataTableProps<TData extends RowData>
  extends Omit<ComponentProps<"div">, "children"> {
  /**
   * A concise description of the table for assistive technology.
   */
  caption?: ReactNode;
  /**
   * Column definitions typed for the included TanStack Table features.
   */
  columns: ColumnDef<DataTableFeatures, TData>[];
  /**
   * Rows to render.
   */
  data: TData[];
  /**
   * Content displayed when no rows match the current table state.
   */
  emptyMessage?: ReactNode;
  /**
   * Additional TanStack Table options, excluding data, columns and features.
   */
  tableOptions?: DataTableOptions<TData>;
}

export const DataTable = <TData extends RowData>(
  props: DataTableProps<TData>
) => {
  const {
    caption,
    className,
    columns,
    data,
    emptyMessage = "No results.",
    tableOptions,
    ...rest
  } = props;

  const table = useTable({
    ...tableOptions,
    columns,
    data,
    features: dataTableFeatures,
  });

  return (
    <div
      className={cn("overflow-hidden rounded-md border", className)}
      {...rest}
    >
      <Table>
        {caption ? (
          <TableCaption className="sr-only">{caption}</TableCaption>
        ) : null}

        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() ? "selected" : undefined}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

interface DataTableColumnHeaderProps<TData extends RowData, TValue>
  extends ComponentProps<"div"> {
  /**
   * The column to render the header for.
   */
  column: Column<DataTableFeatures, TData, TValue>;
  /**
   * The title of the column.
   */
  title: string;
}

export const DataTableColumnHeader = <TData extends RowData, TValue>(
  props: DataTableColumnHeaderProps<TData, TValue>
) => {
  const { className, column, title, ...rest } = props;
  const canSort = column.getCanSort();
  const handleSortAscending = useCallback(
    () => column.toggleSorting(false),
    [column]
  );
  const handleSortDescending = useCallback(
    () => column.toggleSorting(true),
    [column]
  );
  const handleHide = useCallback(
    () => column.toggleVisibility(false),
    [column]
  );

  if (!canSort) {
    return (
      <div className={className} {...rest}>
        {title}
      </div>
    );
  }

  const sortDirection = column.getIsSorted();

  let sortIcon = <ChevronsUpDownIcon aria-hidden className="size-3.5" />;

  if (sortDirection === "desc") {
    sortIcon = <ArrowDownIcon aria-hidden className="size-3.5" />;
  } else if (sortDirection === "asc") {
    sortIcon = <ArrowUpIcon aria-hidden className="size-3.5" />;
  }

  return (
    <div className={cn("flex items-center gap-2", className)} {...rest}>
      <Menu positioning={{ placement: "bottom-start" }}>
        <MenuTrigger asChild>
          <Button className="-ms-2" size="sm" variant="ghost">
            <span>{title}</span>
            {sortIcon}
          </Button>
        </MenuTrigger>

        <MenuContent>
          <MenuItem onClick={handleSortAscending} value="sort-ascending">
            <ArrowUpIcon aria-hidden />
            Ascending
          </MenuItem>
          <MenuItem onClick={handleSortDescending} value="sort-descending">
            <ArrowDownIcon aria-hidden />
            Descending
          </MenuItem>
          {column.getCanHide() && (
            <>
              <MenuSeparator />
              <MenuItem onClick={handleHide} value="hide">
                <EyeOffIcon aria-hidden />
                Hide
              </MenuItem>
            </>
          )}
        </MenuContent>
      </Menu>
    </div>
  );
};

export interface DataTablePaginationProps<TData extends RowData>
  extends ComponentProps<"div"> {
  /**
   * The table instance to render the pagination for.
   */
  table: ReactTable<DataTableFeatures, TData>;
}

export const DataTablePagination = <TData extends RowData>(
  props: DataTablePaginationProps<TData>
) => {
  const { className, table, ...rest } = props;

  const pageCount = table.getPageCount();
  const { pageIndex, pageSize } = table.state.pagination;
  const filteredRowCount = table.getFilteredRowModel().rows.length;
  const handlePageSizeChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      table.setPageSize(Number(event.target.value));
    },
    [table]
  );
  const handlePageChange = useCallback(
    (details: { page: number }) => {
      table.setPageIndex(details.page - 1);
    },
    [table]
  );

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 px-2",
        className
      )}
      data-slot="data-table-pagination"
      {...rest}
    >
      <div className="flex-1 text-muted-foreground text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of {filteredRowCount}{" "}
        row(s) selected.
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="flex items-center gap-2 font-medium text-sm">
          <span className="sr-only sm:not-sr-only">Rows per page</span>
          <NativeSelect
            aria-label="Rows per page"
            onChange={handlePageSizeChange}
            size="sm"
            value={pageSize}
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <NativeSelectOption key={size} value={size}>
                {size}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </div>

        <div className="w-28 text-center font-medium text-sm">
          Page {pageIndex + 1} of {pageCount}
        </div>

        <Pagination
          className="mx-0 w-auto justify-start gap-1"
          count={filteredRowCount}
          onPageChange={handlePageChange}
          page={pageIndex + 1}
          pageSize={pageSize}
        >
          <PaginationPrevious
            size="icon-sm"
            variant="outline"
            withLabel={false}
          />
          <PaginationNext size="icon-sm" variant="outline" withLabel={false} />
        </Pagination>
      </div>
    </div>
  );
};

export interface DataTableViewOptionsProps<TData extends RowData>
  extends ComponentProps<typeof Button> {
  table: ReactTable<DataTableFeatures, TData>;
}

export const DataTableViewOptions = <TData extends RowData>(
  props: DataTableViewOptionsProps<TData>
) => {
  const { className, table, ...rest } = props;
  const columns = table.getAllColumns().filter((column) => column.getCanHide());

  if (columns.length === 0) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button className={cn("ms-auto", className)} size="sm" {...rest}>
          <Settings2Icon aria-hidden />
          View
        </Button>
      </MenuTrigger>

      <MenuContent>
        <MenuGroup heading="Toggle columns">
          {columns.map((column) => (
            <DataTableViewOption column={column} key={column.id} />
          ))}
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

interface DataTableViewOptionProps<TData extends RowData> {
  column: Column<DataTableFeatures, TData>;
}

const DataTableViewOption = <TData extends RowData>(
  props: DataTableViewOptionProps<TData>
) => {
  const { column } = props;
  const handleCheckedChange = useCallback(
    (checked: boolean) => column.toggleVisibility(checked),
    [column]
  );

  return (
    <MenuCheckboxItem
      checked={column.getIsVisible()}
      className="capitalize"
      closeOnSelect={false}
      onCheckedChange={handleCheckedChange}
      value={column.id}
    >
      {column.id}
    </MenuCheckboxItem>
  );
};
