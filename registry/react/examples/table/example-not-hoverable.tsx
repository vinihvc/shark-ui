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
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
  },
  {
    id: "2",
    name: "Bruno Silva",
    email: "bruno@example.com",
  },
  {
    id: "3",
    name: "Clara Mendes",
    email: "clara@example.com",
  },
];

const Example = () => {
  return (
    <Table isHoverable={false}>
      <TableCaption className="sr-only">
        Table with row hover disabled (isHoverable=false).
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Example;
