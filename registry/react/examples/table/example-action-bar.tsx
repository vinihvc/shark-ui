"use client";

import {
  ArchiveIcon,
  CopyIcon,
  EllipsisIcon,
  PencilIcon,
  SendIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarContent,
  ActionBarSelectionTrigger,
} from "@/registry/react/components/action-bar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
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

const Example = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const isOpen = selectedIds.length > 0;
  const allSelected =
    selectedIds.length > 0 && selectedIds.length === orders.length;

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    if (checked) {
      setSelectedIds(orders.map((order) => order.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean | "indeterminate") => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleClose = () => {
    setSelectedIds([]);
  };

  return (
    <div className="w-full max-w-2xl rounded-lg border">
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
                  checked={allSelected}
                  onCheckedChange={({ checked }) => handleSelectAll(checked)}
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
                  <TableCell className="w-12">
                    <Checkbox
                      aria-label={`Select order ${order.id}`}
                      checked={isSelected}
                      onCheckedChange={({ checked }) =>
                        handleSelectRow(order.id, checked)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>
                    <Badge
                      className="capitalize"
                      variant={statusVariants[order.status]}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <ActionBarContent className="w-full max-w-xl">
          <ActionBarSelectionTrigger count={selectedIds.length} />
          <div className="ml-auto flex gap-2">
            <Button size="sm" variant="secondary">
              <SendIcon />
              Send
            </Button>
            <Button size="sm" variant="secondary">
              <PencilIcon />
              Edit
            </Button>
            <Menu positioning={{ placement: "top" }}>
              <MenuTrigger asChild>
                <Button size="sm" variant="secondary">
                  <EllipsisIcon />
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="archive">
                  <ArchiveIcon />
                  Archive
                </MenuItem>
                <MenuItem value="duplicate">
                  <CopyIcon />
                  Duplicate
                </MenuItem>
              </MenuContent>
            </Menu>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" variant="destructive">
                  <Trash2Icon />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader
                  description="This action cannot be undone."
                  title="Delete selected orders?"
                />
                <AlertDialogBody>
                  <ul>
                    {selectedIds.map((id) => {
                      const order = orders.find((o) => o.id === id);

                      if (!order) {
                        return null;
                      }

                      return (
                        <li className="py-1 text-sm" key={id}>
                          {order.id} - {order.name}
                        </li>
                      );
                    })}
                  </ul>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </ActionBarContent>
      </ActionBar>
    </div>
  );
};

export default Example;

const orders = [
  {
    id: "SO-01",
    name: "Macbook Pro 16",
    status: "progress",
    amount: "245,12 $",
  },
  {
    id: "SO-02",
    name: "Apple Watch Series 9",
    status: "transit",
    amount: "122,18 $",
  },
  {
    id: "SO-03",
    name: "AirPods Max",
    status: "pending",
    amount: "89,50 $",
  },
  {
    id: "SO-04",
    name: "iPad Pro 13",
    status: "pending",
    amount: "310,00 $",
  },
  {
    id: "SO-05",
    name: "iPhone 15 Pro Max",
    status: "transit",
    amount: "156,75 $",
  },
];

const statusVariants: Record<string, BadgeVariant> = {
  transit: "success",
  pending: "warning",
  progress: "info",
};
