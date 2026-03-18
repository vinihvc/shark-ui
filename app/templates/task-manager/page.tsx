"use client";

import { createListCollection } from "@ark-ui/react";
import { EllipsisIcon, PlusIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const STATUS_OPTIONS = ["Todo", "In Progress", "Done", "Backlog", "Canceled"];
const PRIORITY_OPTIONS = ["Low", "Medium", "High"];

const statusCollection = createListCollection({ items: STATUS_OPTIONS });
const priorityCollection = createListCollection({ items: PRIORITY_OPTIONS });

const TASKS = [
  {
    id: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    type: "Documentation",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    type: "Documentation",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    type: "Bug",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    type: "Feature",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-8686",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    type: "Feature",
    status: "Canceled",
    priority: "Medium",
  },
  {
    id: "TASK-1280",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    type: "Bug",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-7262",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    type: "Feature",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-1138",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    type: "Feature",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7184",
    title: "We need to program the back-end THX pixel!",
    type: "Feature",
    status: "Todo",
    priority: "Low",
  },
  {
    id: "TASK-5160",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    type: "Documentation",
    status: "In Progress",
    priority: "High",
  },
];

const typeVariantMap: Record<string, "secondary" | "destructive" | "default"> =
  {
    Documentation: "secondary",
    Bug: "destructive",
    Feature: "default",
  };

const TaskManagerTemplatePage = () => {
  return (
    <div className="flex min-h-svh flex-col">
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h1 className="font-semibold text-2xl">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Select collection={statusCollection}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusCollection.items.map((item) => (
                <SelectItem item={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select collection={priorityCollection}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              {priorityCollection.items.map((item) => (
                <SelectItem item={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Menu>
            <MenuTrigger asChild>
              <Button variant="outline">View</Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="table">Table</MenuItem>
              <MenuItem value="list">List</MenuItem>
            </MenuContent>
          </Menu>
          <Button className="ml-auto">
            <PlusIcon aria-hidden className="size-4" />
            Add Task
          </Button>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {TASKS.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-mono text-xs">{task.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge
                        className="w-fit"
                        variant={typeVariantMap[task.type] ?? "secondary"}
                      >
                        {task.type}
                      </Badge>
                      <span className="line-clamp-2">{task.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.priority}</TableCell>
                  <TableCell>
                    <Menu>
                      <MenuTrigger asChild>
                        <Button
                          aria-label="Open menu"
                          size="icon-sm"
                          variant="ghost"
                        >
                          <EllipsisIcon aria-hidden className="size-4" />
                        </Button>
                      </MenuTrigger>
                      <MenuContent>
                        <MenuItem value="edit">Edit</MenuItem>
                        <MenuItem value="delete" variant="destructive">
                          Delete
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            0 of 100 row(s) selected
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">
              Rows per page
            </span>
            <Pagination count={100} pageSize={25}>
              <PaginationPrevious />
              <PaginationItems />
              <PaginationNext />
            </Pagination>
            <span className="text-muted-foreground text-sm">
              Page 1 of 4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerTemplatePage;
