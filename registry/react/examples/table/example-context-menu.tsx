"use client";

import {
  EyeIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const Example = () => (
  <Table className="mx-auto w-full max-w-xl">
    <TableCaption className="sr-only">
      Users with row context menu. Right-click a row to open the menu.
    </TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {users.map((user) => (
        <ContextMenu key={user.id}>
          <ContextMenuTrigger asChild>
            <TableRow>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          </ContextMenuTrigger>
          <ContextMenuContent className="min-w-40">
            <ContextMenuItem value="view">
              <EyeIcon />
              View
              <ContextMenuShortcut>⌘ V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem value="edit">
              <PencilIcon />
              Edit
              <ContextMenuShortcut>⌘ E</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem value="delete" variant="destructive">
              <Trash2Icon />
              Delete
              <ContextMenuShortcut>⌘ ⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </TableBody>
  </Table>
);

const users = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "2", name: "Bruno Silva", email: "bruno@example.com" },
  { id: "3", name: "Clara Mendes", email: "clara@example.com" },
];

export default Example;
