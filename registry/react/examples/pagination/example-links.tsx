import {
  Pagination,
  PaginationItemLink,
  PaginationItems,
} from "@/registry/react/components/pagination";

const Example = () => (
  <Pagination count={50} pageSize={10}>
    <PaginationItemLink page="previous">Previous</PaginationItemLink>
    <PaginationItems />
    <PaginationItemLink page="next">Next</PaginationItemLink>
  </Pagination>
);

export default Example;
