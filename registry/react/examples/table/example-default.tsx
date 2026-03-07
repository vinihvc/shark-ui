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

const TableDemo = () => {
  return (
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
              <Badge
                className="capitalize"
                variant={statusVariants[user.status]}
              >
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const statusVariants: Record<string, BadgeVariant> = {
  active: "success",
  invited: "info",
  inactive: "destructive",
};

const users = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: "2",
    name: "Bruno Silva",
    email: "bruno.silva@example.com",
    role: "Editor",
    status: "invited",
  },
  {
    id: "3",
    name: "Clara Mendes",
    email: "clara.mendes@example.com",
    role: "Viewer",
    status: "inactive",
  },
  {
    id: "4",
    name: "David Park",
    email: "david.park@example.com",
    role: "Editor",
    status: "active",
  },
];

export default TableDemo;
