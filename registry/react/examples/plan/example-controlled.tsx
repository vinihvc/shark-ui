"use client";

import { useState } from "react";
import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/registry/react/components/plan";
import {
  TaskItem,
  TaskItemContent,
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
      <Plan onOpenChange={handleOpenChange} open={open}>
        <PlanHeader>
          <div className="min-w-0">
            <PlanTitle>Add email validation</PlanTitle>
            <PlanDescription>Update the helper and the form.</PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <TaskItem status="completed">
            <TaskItemTrigger
              status="completed"
              title="Read current validator"
            />
            <TaskItemContent>
              <TaskItemDetailFile>src/utils/helpers.ts</TaskItemDetailFile>
            </TaskItemContent>
          </TaskItem>
          <TaskItem status="in-progress">
            <TaskItemTrigger status="in-progress" title="Patch isValidEmail" />
            <TaskItemContent>
              <TaskItemDetailFile>src/utils/helpers.ts</TaskItemDetailFile>
              <TaskItemDetailFile>src/app.tsx</TaskItemDetailFile>
            </TaskItemContent>
          </TaskItem>
          <TaskItem status="pending">
            <TaskItemTrigger status="pending" title="Run unit tests" />
          </TaskItem>
        </PlanContent>
      </Plan>
      <p className="text-muted-foreground text-sm">
        Plan: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
