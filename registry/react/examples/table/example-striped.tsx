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
  <Table className="mx-auto w-full max-w-xl" variant="striped">
    <TableCaption className="sr-only">
      Users with alternating row backgrounds.
    </TableCaption>
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
          <TableCell className="text-center">{user.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const users = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "2",
    name: "Bruno Silva",
    email: "bruno.silva@example.com",
    role: "Editor",
    status: "Invited",
  },
  {
    id: "3",
    name: "Clara Mendes",
    email: "clara.mendes@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: "4",
    name: "David Park",
    email: "david.park@example.com",
    role: "Editor",
    status: "Active",
  },
];

export default Example;
