"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationItemLink,
  PaginationItems,
} from "@/registry/react/components/pagination";

const Example = () => {
  return (
    <Pagination count={50} pageSize={10}>
      <PaginationItemLink page="previous">
        <ChevronLeft />
        Previous
      </PaginationItemLink>

      <PaginationItems />

      <PaginationItemLink page="next">
        Next
        <ChevronRight />
      </PaginationItemLink>
    </Pagination>
  );
};

export default Example;
