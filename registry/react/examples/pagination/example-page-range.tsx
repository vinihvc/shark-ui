"use client";

import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const Example = () => (
  <Pagination count={100} page={6} pageSize={10}>
    <PaginationPrevious />
    <PaginationItems />
    <PaginationNext />
  </Pagination>
);

export default Example;
