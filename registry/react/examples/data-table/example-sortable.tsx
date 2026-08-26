"use client";

import { createColumnHelper } from "@tanstack/react-table";
import {
  DataTable,
  DataTableColumnHeader,
  type DataTableFeatures,
} from "@/registry/react/components/data-table";

interface FileRow {
  id: string;
  name: string;
  size: number;
  type: string;
  updatedAt: string;
}

const columnHelper = createColumnHelper<DataTableFeatures, FileRow>();

const formatBytes = (bytes: number) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  }),
  columnHelper.accessor("type", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  }),
  columnHelper.accessor("size", {
    cell: ({ getValue }) => (
      <span className="tabular-nums">{formatBytes(getValue())}</span>
    ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Size" />
    ),
  }),
  columnHelper.accessor("updatedAt", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated" />
    ),
  }),
]);

const data: FileRow[] = [
  {
    id: "f-1",
    name: "brand-guidelines.pdf",
    size: 2_450_000,
    type: "PDF",
    updatedAt: "2026-08-12",
  },
  {
    id: "f-2",
    name: "dashboard-mock.fig",
    size: 18_200_000,
    type: "Figma",
    updatedAt: "2026-08-20",
  },
  {
    id: "f-3",
    name: "q3-metrics.csv",
    size: 84_000,
    type: "CSV",
    updatedAt: "2026-08-18",
  },
  {
    id: "f-4",
    name: "hero-still.png",
    size: 1_120_000,
    type: "PNG",
    updatedAt: "2026-08-05",
  },
  {
    id: "f-5",
    name: "api-contract.json",
    size: 12_400,
    type: "JSON",
    updatedAt: "2026-08-22",
  },
  {
    id: "f-6",
    name: "release-notes.md",
    size: 6200,
    type: "Markdown",
    updatedAt: "2026-08-24",
  },
];

const Example = () => (
  <DataTable
    caption="Project files"
    className="w-full max-w-2xl"
    columns={columns}
    data={data}
  />
);

export default Example;
