"use client";

import {
  MailIcon,
  MoreHorizontalIcon,
  PencilIcon,
  PrinterIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/registry/react/components/action-bar";
import { Badge, type BadgeVariant } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const orders = [
  {
    id: "SO-00005",
    name: "Trashae Hubbard",
    status: "PARTIALLY SHIPPED",
    amount: "245,12 $",
  },
  {
    id: "SO-00006",
    name: "Tongbang Jun-Seo",
    status: "FULFILLED",
    amount: "122,18 $",
  },
  {
    id: "SO-00007",
    name: "Alice Johnson",
    status: "CONFIRMED",
    amount: "89,50 $",
  },
  {
    id: "SO-00010",
    name: "Bruno Silva",
    status: "FULFILLED",
    amount: "310,00 $",
  },
  {
    id: "SO-00012",
    name: "Clara Mendes",
    status: "PARTIALLY SHIPPED",
    amount: "156,75 $",
  },
];

const statusVariants: Record<string, BadgeVariant> = {
  "PARTIALLY SHIPPED": "warning",
  FULFILLED: "success",
  CONFIRMED: "info",
};

const Example = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const isOpen = selectedIds.length > 0;
  const allSelected =
    selectedIds.length > 0 && selectedIds.length === orders.length;
  const someSelected = selectedIds.length > 0;
  let selectAllChecked: boolean | "indeterminate" = false;
  if (allSelected) {
    selectAllChecked = true;
  } else if (someSelected) {
    selectAllChecked = "indeterminate";
  }

  const handleSelectAll = (details: {
    checked?: boolean | "indeterminate";
  }) => {
    if (details.checked === true) {
      setSelectedIds(orders.map((order) => order.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (
    id: string,
    details: { checked?: boolean | "indeterminate" }
  ) => {
    if (details.checked === true) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleClose = () => {
    setSelectedIds([]);
  };

  return (
    <div className="w-full max-w-4xl rounded-lg border">
      <ActionBar onOpenChange={(open) => !open && handleClose()} open={isOpen}>
        <Table>
          <TableCaption className="sr-only">
            Orders with checkbox selection and action bar.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  aria-label="Select all orders"
                  checked={selectAllChecked}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const isSelected = selectedIds.includes(order.id);
              return (
                <TableRow
                  data-state={isSelected ? "selected" : undefined}
                  key={order.id}
                >
                  <TableCell>
                    <Checkbox
                      aria-label={`Select order ${order.id}`}
                      checked={isSelected}
                      onCheckedChange={(details) =>
                        handleSelectRow(order.id, details)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[order.status]}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <ActionBarContent className="w-full max-w-2xl bg-foreground text-background">
          <ActionBarClose asChild>
            <Button size="icon-sm" variant="ghost">
              <XIcon />
            </Button>
          </ActionBarClose>
          <ActionBarSeparator className="bg-border/50" />
          <ActionBarSelectionTrigger count={selectedIds.length} />
          <div className="ml-auto flex items-center gap-1">
            <Menu positioning={{ placement: "top" }}>
              <MenuTrigger asChild>
                <Button size="sm" variant="secondary">
                  <MoreHorizontalIcon />
                  More
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="export">Export</MenuItem>
                <MenuItem value="archive">Archive</MenuItem>
              </MenuContent>
            </Menu>
            <Button size="sm" variant="secondary">
              <MailIcon />
              Send
            </Button>
            <Button size="sm" variant="secondary">
              <PrinterIcon />
              Print
            </Button>
            <Button size="sm" variant="secondary">
              <PencilIcon />
              Edit
            </Button>
            <Button size="sm" variant="destructive">
              <Trash2Icon />
              Delete
            </Button>
          </div>
        </ActionBarContent>
      </ActionBar>
    </div>
  );
};

export default Example;
