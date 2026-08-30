"use client";

import {
  createColumnHelper,
  createExpandedRowModel,
  type ExpandedState,
  type Row,
  rowExpandingFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Fragment, useCallback, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const Example = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useTable({
    columns,
    data,
    features,
    getRowCanExpand: () => true,
    onExpandedChange: setExpanded,
    state: {
      expanded,
    },
  });

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  className={
                    header.column.id === "total" ? "text-right" : undefined
                  }
                  key={header.id}
                >
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
              <Fragment key={row.id}>
                <TableRow>
                  {row.getAllCells().map((cell) => (
                    <TableCell
                      className={
                        cell.column.id === "total" ? "text-right" : undefined
                      }
                      key={cell.id}
                    >
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
                {row.getIsExpanded() ? (
                  <TableRow>
                    <TableCell className="p-0" colSpan={columns.length}>
                      <OrderDetail order={row.original} />
                    </TableCell>
                  </TableRow>
                ) : null}
              </Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

const features = tableFeatures({
  expandedRowModel: createExpandedRowModel(),
  rowExpandingFeature,
});

interface LineItem {
  product: string;
  qty: number;
  unitPrice: number;
}

interface Order {
  customer: string;
  id: string;
  items: LineItem[];
  total: number;
}

const columnHelper = createColumnHelper<typeof features, Order>();

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(amount);

const ExpandToggle = ({ row }: { row: Row<typeof features, Order> }) => {
  const handleToggle = useCallback(() => {
    row.toggleExpanded();
  }, [row]);

  return (
    <Button
      aria-expanded={row.getIsExpanded()}
      aria-label={row.getIsExpanded() ? "Collapse order" : "Expand order"}
      className="size-8"
      onClick={handleToggle}
      size="icon-sm"
      variant="ghost"
    >
      {row.getIsExpanded() ? (
        <ChevronDownIcon aria-hidden className="size-4" />
      ) : (
        <ChevronRightIcon aria-hidden className="size-4" />
      )}
    </Button>
  );
};

const columns = columnHelper.columns([
  columnHelper.display({
    cell: ({ row }) => <ExpandToggle row={row} />,
    header: () => <span className="sr-only">Expand</span>,
    id: "expand",
  }),
  columnHelper.accessor("id", {
    header: "Order",
  }),
  columnHelper.accessor("customer", {
    header: "Customer",
  }),
  columnHelper.accessor("total", {
    cell: ({ getValue }) => (
      <span className="font-medium tabular-nums">
        {formatCurrency(getValue())}
      </span>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
]);

const data: Order[] = [
  {
    customer: "Brightline Co.",
    id: "ORD-1042",
    items: [
      { product: "Studio desk", qty: 2, unitPrice: 420 },
      { product: "Task lamp", qty: 4, unitPrice: 68 },
    ],
    total: 1112,
  },
  {
    customer: "Harbor Clinic",
    id: "ORD-1045",
    items: [
      { product: "Waiting chair", qty: 6, unitPrice: 190 },
      { product: "Side table", qty: 3, unitPrice: 110 },
    ],
    total: 1470,
  },
];

const OrderDetail = ({ order }: { order: Order }) => (
  <div className="bg-muted/40 px-4 py-3">
    <p className="mb-2 font-medium text-muted-foreground text-xs uppercase tracking-wide">
      Line items
    </p>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="w-20">Qty</TableHead>
          <TableHead className="w-28 text-right">Unit</TableHead>
          <TableHead className="w-28 text-right">Line</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {order.items.map((item) => (
          <TableRow key={`${order.id}-${item.product}`}>
            <TableCell>{item.product}</TableCell>
            <TableCell className="tabular-nums">{item.qty}</TableCell>
            <TableCell className="text-right tabular-nums">
              {formatCurrency(item.unitPrice)}
            </TableCell>
            <TableCell className="text-right font-medium tabular-nums">
              {formatCurrency(item.qty * item.unitPrice)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
