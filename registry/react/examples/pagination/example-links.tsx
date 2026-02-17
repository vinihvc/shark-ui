"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Pagination,
  PaginationItemLink,
  PaginationItems,
} from "@/registry/react/components/pagination";

const Example = () => (
  <Pagination count={50} pageSize={10}>
    <PaginationItemLink page="previous">
      <ChevronLeftIcon />
      Previous
    </PaginationItemLink>
    <PaginationItems />
    <PaginationItemLink page="next">
      Next
      <ChevronRightIcon />
    </PaginationItemLink>
  </Pagination>
);

export default Example;
