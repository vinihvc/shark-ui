import {
  EllipsisVerticalIcon,
  EyeIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuShortcut,
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

const users = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "2", name: "Bruno Silva", email: "bruno@example.com" },
  { id: "3", name: "Clara Mendes", email: "clara@example.com" },
];

const Example = () => {
  return (
    <Table>
      <TableCaption className="sr-only">
        Users with row actions (edit, delete).
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">
              <Menu positioning={{ placement: "left-end" }}>
                <MenuTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <EllipsisVerticalIcon />
                  </Button>
                </MenuTrigger>
                <MenuContent className="min-w-40">
                  <MenuItem value="view">
                    <EyeIcon />
                    View
                    <MenuShortcut>⌘ V</MenuShortcut>
                  </MenuItem>
                  <MenuItem value="edit">
                    <PencilIcon />
                    Edit
                    <MenuShortcut>⌘ E</MenuShortcut>
                  </MenuItem>
                  <MenuItem value="delete" variant="destructive">
                    <Trash2Icon />
                    Delete
                    <MenuShortcut>⌘ ⌫</MenuShortcut>
                  </MenuItem>
                </MenuContent>
              </Menu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Example;
