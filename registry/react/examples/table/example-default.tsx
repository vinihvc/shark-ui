import { Badge, type BadgeVariant } from "@/registry/react/components/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const TableDemo = () => (
  <Table className="mx-auto w-full max-w-xl">
    <TableCaption>A list of users in your workspace.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
        <TableHead className="text-center">Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell className="text-center">
            <Badge className="capitalize" variant={statusVariants[user.status]}>
              {user.status}
            </Badge>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const statusVariants: Record<string, BadgeVariant> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};

const users = [
  {
    email: "alice.johnson@example.com",
    id: "1",
    name: "Alice Johnson",
    role: "Admin",
    status: "active",
  },
  {
    email: "bruno.silva@example.com",
    id: "2",
    name: "Bruno Silva",
    role: "Editor",
    status: "invited",
  },
  {
    email: "clara.mendes@example.com",
    id: "3",
    name: "Clara Mendes",
    role: "Viewer",
    status: "inactive",
  },
  {
    email: "david.park@example.com",
    id: "4",
    name: "David Park",
    role: "Editor",
    status: "active",
  },
];

export default TableDemo;
