"use client";

import {
  columnFilteringFeature,
  createColumnHelper,
  createFilteredRowModel,
  filterFn_includesString,
  globalFilteringFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { type ChangeEvent, useCallback, useState } from "react";
import { Input } from "@/registry/react/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const Example = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useTable({
    columns,
    data,
    features,
    globalFilterFn: "includesString",
    onGlobalFilterChange: setGlobalFilter,
    state: {
      globalFilter,
    },
  });

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      table.setGlobalFilter(event.target.value);
    },
    [table]
  );

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <Input
        aria-label="Search contacts"
        className="max-w-xs"
        onChange={handleSearchChange}
        placeholder="Search…"
        type="search"
        value={globalFilter}
      />
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getAllCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const features = tableFeatures({
  columnFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: { includesString: filterFn_includesString },
  globalFilteringFeature,
});

interface Contact {
  city: string;
  company: string;
  id: string;
  name: string;
  role: string;
}

const columnHelper = createColumnHelper<typeof features, Contact>();

const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("company", {
    header: "Company",
  }),
  columnHelper.accessor("city", {
    header: "City",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
]);

const data: Contact[] = [
  {
    city: "Austin",
    company: "Northwind Labs",
    id: "c-1",
    name: "Elena Vargas",
    role: "Account Executive",
  },
  {
    city: "Toronto",
    company: "Cedar Analytics",
    id: "c-3",
    name: "Priya Nair",
    role: "Data Analyst",
  },
  {
    city: "Lisbon",
    company: "Harbor Creative",
    id: "c-4",
    name: "Mateo Silva",
    role: "Creative Director",
  },
  {
    city: "Seoul",
    company: "Pixel Forge",
    id: "c-5",
    name: "Hana Kim",
    role: "UX Researcher",
  },
  {
    city: "Dublin",
    company: "Orbit Systems",
    id: "c-7",
    name: "Aoife Byrne",
    role: "Support Lead",
  },
  {
    city: "São Paulo",
    company: "Harbor Creative",
    id: "c-8",
    name: "Camila Costa",
    role: "Brand Strategist",
  },
];

export default Example;
