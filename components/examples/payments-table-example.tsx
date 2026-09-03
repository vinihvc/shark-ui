"use client";

import {
  type ColumnFiltersState,
  type ColumnVisibilityState,
  createColumnHelper,
  type RowSelectionState,
  type SortingState,
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
  DataTable,
  DataTableColumnHeader,
  type DataTableFeatures,
} from "@/registry/react/components/data-table";
import { FormatNumber } from "@/registry/react/components/format";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

interface Payment {
  amount: number;
  email: string;
  id: string;
  status: "pending" | "processing" | "success" | "failed";
}

const columnHelper = createColumnHelper<DataTableFeatures, Payment>();

const statusVariant = {
  failed: "destructive",
  pending: "warning",
  processing: "info",
  success: "success",
} as const;

const data: Payment[] = [
  {
    amount: 316,
    email: "alex.rivera@techflow.io",
    id: "m5gr84i9",
    status: "success",
  },
  {
    amount: 242,
    email: "maya.chen@designstudio.com",
    id: "3u1reuv4",
    status: "success",
  },
  {
    amount: 837,
    email: "james.mitchell@cloudworks.net",
    id: "derv1ws0",
    status: "processing",
  },
  {
    amount: 721,
    email: "sophia.anderson@digitalhub.co",
    id: "bhqecj4p",
    status: "failed",
  },
  {
    amount: 450,
    email: "david.kim@innovate.space",
    id: "k9f2m3n4",
    status: "pending",
  },
  {
    amount: 1280,
    email: "emma.williams@nexuslabs.ai",
    id: "p5q6r7s8",
    status: "success",
  },
];

const columns = columnHelper.columns([
  columnHelper.display({
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={({ checked }) => row.toggleSelected(!!checked)}
      />
    ),
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={({ checked }) =>
          table.toggleAllPageRowsSelected(!!checked)
        }
      />
    ),
    id: "select",
  }),
  columnHelper.accessor("status", {
    cell: ({ getValue }) => {
      const status = getValue();

      return (
        <Badge className="capitalize" variant={statusVariant[status]}>
          {status}
        </Badge>
      );
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  }),
  columnHelper.accessor("email", {
    cell: ({ getValue }) => <div className="lowercase">{getValue()}</div>,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  }),
  columnHelper.accessor("amount", {
    cell: ({ getValue }) => (
      <div className="text-right font-medium">
        <FormatNumber currency="USD" style="currency" value={getValue()} />
      </div>
    ),
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-end"
        column={column}
        title="Amount"
      />
    ),
  }),
  columnHelper.display({
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
    enableHiding: false,
    id: "actions",
  }),
]);

export const PaymentsTableExample = (props: React.ComponentProps<"div">) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  const selectedCount = Object.values(rowSelection).filter(Boolean).length;

  return (
    <Card {...props}>
      <CardHeader description="Manage your payments." title="Payments">
        <CardAction>
          <Button size="sm" variant="secondary">
            Add Payment
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <DataTable
          caption="Payments"
          columns={columns}
          data={data}
          tableOptions={{
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
          }}
        />

        <div className="text-muted-foreground text-sm">
          {selectedCount} of {data.length} row(s) selected.
        </div>
      </CardContent>
    </Card>
  );
};
