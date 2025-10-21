"use client";

import {
  Pagination,
  PaginationContext,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../components/pagination";

const PaginationDemo = () => (
  <Pagination count={50} pageSize={10} siblingCount={3}>
    <PaginationPrevious />

    <PaginationContext>
      {({ pages }) =>
        pages.map((page) => {
          if (page.type === "page") {
            return (
              <PaginationItem key={page.value} type="page" value={page.value}>
                {page.value}
              </PaginationItem>
            );
          }

          return null;
        })
      }
    </PaginationContext>
    <PaginationNext />
  </Pagination>
);

export default PaginationDemo;
