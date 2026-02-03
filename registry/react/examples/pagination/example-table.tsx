"use client";

import React from "react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const users = Array.from({ length: 48 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

const Example = () => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(2);

  const paginatedUsers = users.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex w-full max-w-lg flex-col gap-6 rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between gap-2">
        <div className="flex shrink-0 items-center gap-2">
          <div className="text-muted-foreground text-sm">Items per page:</div>

          <NativeSelect
            onChange={(e) => setPageSize(Number(e.target.value))}
            value={pageSize}
          >
            <NativeSelectOption value="2">2</NativeSelectOption>
            <NativeSelectOption value="3">3</NativeSelectOption>
            <NativeSelectOption value="4">4</NativeSelectOption>
          </NativeSelect>
        </div>

        <Pagination
          className="flex-1 justify-end"
          count={users.length}
          onPageChange={({ page }) => setPage(page)}
          onPageSizeChange={({ pageSize }) => setPageSize(pageSize)}
          page={page}
          pageSize={pageSize}
        >
          <PaginationPrevious />
          <PaginationNext />
        </Pagination>
      </div>
    </div>
  );
};

export default Example;
