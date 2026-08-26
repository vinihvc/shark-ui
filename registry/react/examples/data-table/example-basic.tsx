"use client";

import { createColumnHelper } from "@tanstack/react-table";
import {
  DataTable,
  type DataTableFeatures,
} from "@/registry/react/components/data-table";

interface TeamMember {
  department: string;
  id: string;
  name: string;
  role: string;
}

const columnHelper = createColumnHelper<DataTableFeatures, TeamMember>();

const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("department", {
    header: "Department",
  }),
]);

const data: TeamMember[] = [
  {
    department: "Product",
    id: "tm-1",
    name: "Ava Chen",
    role: "Product Manager",
  },
  {
    department: "Engineering",
    id: "tm-2",
    name: "Noah Patel",
    role: "Staff Engineer",
  },
  {
    department: "Design",
    id: "tm-3",
    name: "Mia Rossi",
    role: "Design Lead",
  },
  {
    department: "Engineering",
    id: "tm-4",
    name: "Liam Okonkwo",
    role: "Frontend Engineer",
  },
  {
    department: "Operations",
    id: "tm-5",
    name: "Sofia Berg",
    role: "Ops Specialist",
  },
];

const Example = () => (
  <DataTable
    caption="Team members"
    className="w-full max-w-xl"
    columns={columns}
    data={data}
  />
);

export default Example;
