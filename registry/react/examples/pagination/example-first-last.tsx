import {
  Pagination,
  PaginationFirst,
  PaginationItems,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const Example = () => (
  <Pagination count={100} pageSize={10}>
    <PaginationFirst />
    <PaginationPrevious />
    <PaginationItems />
    <PaginationNext />
    <PaginationLast />
  </Pagination>
);

export default Example;
