"use client";

import {
  createColumnHelper,
  type Row,
  type RowSelectionState,
  type Table as TanStackTable,
  useTable,
} from "@tanstack/react-table";
import { useCallback, useState } from "react";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  type DataTableFeatures,
  DataTablePagination,
  dataTableFeatures,
} from "@/registry/react/components/data-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

interface InventoryItem {
  id: string;
  location: string;
  quantity: number;
  sku: string;
  status: "in-stock" | "low" | "backorder";
}

const columnHelper = createColumnHelper<DataTableFeatures, InventoryItem>();

const SelectAllCheckbox = ({
  table,
}: {
  table: TanStackTable<DataTableFeatures, InventoryItem>;
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

const SelectRowCheckbox = ({
  row,
}: {
  row: Row<DataTableFeatures, InventoryItem>;
}) => {
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

const columns = columnHelper.columns([
  columnHelper.display({
    cell: ({ row }) => <SelectRowCheckbox row={row} />,
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => <SelectAllCheckbox table={table} />,
    id: "select",
  }),
  columnHelper.accessor("sku", {
    header: "SKU",
  }),
  columnHelper.accessor("location", {
    header: "Location",
  }),
  columnHelper.accessor("quantity", {
    cell: ({ getValue }) => <span className="tabular-nums">{getValue()}</span>,
    header: "Qty",
  }),
  columnHelper.accessor("status", {
    cell: ({ getValue }) => (
      <span className="capitalize">{getValue().replace("-", " ")}</span>
    ),
    header: "Status",
  }),
]);

const locations = [
  "Aisle A",
  "Aisle B",
  "Aisle C",
  "Dock",
  "Overflow",
] as const;
const statuses: InventoryItem["status"][] = ["in-stock", "low", "backorder"];

const data: InventoryItem[] = Array.from({ length: 24 }, (_, index) => {
  const n = index + 1;

  return {
    id: `inv-${n}`,
    location: locations[index % locations.length] ?? "Aisle A",
    quantity: (n * 7) % 120,
    sku: `SKU-${String(1000 + n)}`,
    status: statuses[index % statuses.length] ?? "in-stock",
  };
});

const Example = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useTable({
    columns,
    data,
    features: dataTableFeatures,
    getRowId: (row) => row.id,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
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
      <DataTablePagination table={table} />
    </div>
  );
};

export default Example;
