"use client";

import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const PaginationDemo = () => (
  <Pagination count={50} pageSize={10}>
    <PaginationPrevious />
    <PaginationItems />
    <PaginationNext />
  </Pagination>
);

export default PaginationDemo;
