"use client";

import { useState } from "react";
import {
  TaskItem,
  TaskItemContent,
  TaskItemDetail,
  TaskItemDetailFile,
  TaskItemTrigger,
} from "@/registry/react/components/task";

const Example = () => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <TaskItem onOpenChange={handleOpenChange} open={open} status="completed">
        <TaskItemTrigger title="Archive resolved support conversations" />
        <TaskItemContent>
          <TaskItemDetail>
            Archived 42 conversations and saved the export to
            <TaskItemDetailFile>exports/support-archive.csv</TaskItemDetailFile>
          </TaskItemDetail>
        </TaskItemContent>
      </TaskItem>
      <p className="text-muted-foreground text-sm">
        Task: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
