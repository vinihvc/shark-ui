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

  return (
    <Table>
      <TableCaption>A list of users in your workspace.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDemo;
