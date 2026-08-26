"use client";

import {
  type Column,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  type Row,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  type SortingState,
  sortFn_alphanumeric,
  sortFn_text,
  type Table as TanStackTable,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { type ChangeEvent, useCallback, useState } from "react";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import { Input } from "@/registry/react/components/input";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const DataTableDemo = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useTable({
    columns,
    data,
    features,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      sorting,
    },
  });

  const emailFilterValue = table.getColumn("email")?.getFilterValue();

  const handleEmailFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      table.getColumn("email")?.setFilterValue(event.target.value);
    },
    [table]
  );

  const handlePreviousPage = useCallback(() => {
    table.previousPage();
  }, [table]);

  const handleNextPage = useCallback(() => {
    table.nextPage();
  }, [table]);

  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center gap-2 py-4">
        <Input
          className="max-w-xs"
          onChange={handleEmailFilterChange}
          placeholder="Filter emails..."
          type="text"
          value={typeof emailFilterValue === "string" ? emailFilterValue : ""}
        />
        <Menu>
          <MenuTrigger asChild>
            <Button className="ms-auto" variant="outline">
              Columns
              <ChevronDownIcon aria-hidden className="size-4" />
            </Button>
          </MenuTrigger>
          <MenuContent>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <ColumnVisibilityItem column={column} key={column.id} />
              ))}
          </MenuContent>
        </Menu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
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
            {table.getRowModel().rows?.length ? (
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
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex gap-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={handlePreviousPage}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={handleNextPage}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const features = tableFeatures({
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

export interface Payment {
  amount: number;
  email: string;
  id: string;
  status: "pending" | "processing" | "success" | "failed";
}

const columnHelper = createColumnHelper<typeof features, Payment>();

const data: Payment[] = [
  {
    amount: 316,
    email: "ken99@example.com",
    id: "m5gr84i9",
    status: "success",
  },
  {
    amount: 837,
    email: "Monserrat44@example.com",
    id: "derv1ws0",
    status: "processing",
  },
  {
    amount: 874,
    email: "Silas22@example.com",
    id: "5kma53ae",
    status: "success",
  },
  {
    amount: 721,
    email: "carmella@example.com",
    id: "bhqecj4p",
    status: "failed",
  },
];

const SelectAllCheckbox = ({
  table,
}: {
  table: TanStackTable<typeof features, Payment>;
}) => {
  const handleCheckedChange = useCallback(
    ({ checked }: { checked: boolean | "indeterminate" }) => {
      table.toggleAllPageRowsSelected(!!checked);
    },
    [table]
  );

  return (
    <Checkbox
      aria-label="Select all"
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={handleCheckedChange}
    />
  );
};

const SelectRowCheckbox = ({ row }: { row: Row<typeof features, Payment> }) => {
  const handleCheckedChange = useCallback(
    ({ checked }: { checked: boolean | "indeterminate" }) => {
      row.toggleSelected(!!checked);
    },
    [row]
  );

  return (
    <Checkbox
      aria-label="Select row"
      checked={row.getIsSelected()}
      onCheckedChange={handleCheckedChange}
    />
  );
};

const EmailSortHeader = ({
  column,
}: {
  column: Column<typeof features, Payment, string>;
}) => {
  const handleSort = useCallback(() => {
    column.toggleSorting(column.getIsSorted() === "asc");
  }, [column]);

  return (
    <Button onClick={handleSort} variant="ghost">
      Email
      <ArrowUpDownIcon aria-hidden className="size-4" />
    </Button>
  );
};

const PaymentActions = ({ payment }: { payment: Payment }) => {
  const handleCopyId = useCallback(() => {
    navigator.clipboard.writeText(payment.id);
  }, [payment.id]);

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button aria-label="Open menu" className="size-8 p-0" variant="ghost">
          <MoreHorizontalIcon aria-hidden className="size-4" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup heading="Actions">
          <MenuItem onClick={handleCopyId} value="copy-payment-id">
            Copy payment ID
          </MenuItem>
          <MenuSeparator />
          <MenuItem value="view-customer">View customer</MenuItem>
          <MenuItem value="view-payment-details">View payment details</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

const ColumnVisibilityItem = ({
  column,
}: {
  column: Column<typeof features, Payment, unknown>;
}) => {
  const handleCheckedChange = useCallback(
    (value: boolean) => {
      column.toggleVisibility(value);
    },
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

export const columns = columnHelper.columns([
  columnHelper.display({
    cell: ({ row }) => <SelectRowCheckbox row={row} />,
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => <SelectAllCheckbox table={table} />,
    id: "select",
  }),
  columnHelper.accessor("status", {
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
    header: "Status",
  }),
  columnHelper.accessor("email", {
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    header: ({ column }) => <EmailSortHeader column={column} />,
  }),
  columnHelper.accessor("amount", {
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    header: () => <div className="text-right">Amount</div>,
  }),
  columnHelper.display({
    cell: ({ row }) => <PaymentActions payment={row.original} />,
    enableHiding: false,
    id: "actions",
  }),
]);

export default DataTableDemo;
