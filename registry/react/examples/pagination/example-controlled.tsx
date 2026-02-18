"use client";

import React from "react";
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const Example = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div className="flex flex-col gap-4">
      <Pagination
        count={50}
        onPageChange={(details) => setPage(details.page)}
        page={page}
        pageSize={10}
      >
        <PaginationPrevious />
        <PaginationItems />
        <PaginationNext />
      </Pagination>

      <p className="text-center text-muted-foreground text-sm">
        Page {page} of 5
      </p>
    </div>
  );
};

export default Example;
