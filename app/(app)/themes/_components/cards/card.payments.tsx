"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Menu,
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

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "alex.rivera@techflow.io",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "maya.chen@designstudio.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "james.mitchell@cloudworks.net",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "sophia.anderson@digitalhub.co",
  },
  {
    id: "k9f2m3n4",
    amount: 450,
    status: "pending",
    email: "david.kim@innovate.space",
  },
  {
    id: "p5q6r7s8",
    amount: 1280,
    status: "success",
    email: "emma.williams@nexuslabs.ai",
  },
];

export interface Payment {
  amount: number;
  email: string;
  id: string;
  status: "pending" | "processing" | "success" | "failed";
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const variant = {
        pending: "warning",
        processing: "info",
        success: "success",
        failed: "destructive",
      } as const;

      return (
        <Badge className="capitalize" variant={variant[status]}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Menu>
          <MenuTrigger asChild>
            <Button aria-label="Open" className="size-8 p-0" variant="ghost">
              <MoreHorizontalIcon aria-hidden />
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuGroup heading="Actions">
              <MenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
                value="copy-payment-id"
              >
                Copy payment ID
              </MenuItem>
              <MenuSeparator />
              <MenuItem value="view-customer">View customer</MenuItem>
              <MenuItem value="view-payment-details">
                View payment details
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      );
    },
  },
];

export const CardsPayments = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Card>
      <CardHeader description="Manage your payments." title="Payments">
        <CardAction>
          <Button size="sm" variant="secondary">
            Add Payment
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      className="data-[name=actions]:w-10 data-[name=amount]:w-24 data-[name=select]:w-10 data-[name=status]:w-24 [&:has([role=checkbox])]:pl-3"
                      data-name={header.id}
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                    data-state={row.getIsSelected() && "selected"}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="[&:has([role=checkbox])]:pl-3"
                        data-name={cell.column.id}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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

        <div className="flex items-center justify-end gap-2">
          <div className="flex-1 text-muted-foreground text-sm">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex gap-2">
            <Button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              size="sm"
              variant="outline"
            >
              Previous
            </Button>
            <Button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              size="sm"
              variant="outline"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
