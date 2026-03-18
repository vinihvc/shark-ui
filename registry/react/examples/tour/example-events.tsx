"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourActions,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
} from "@/registry/react/components/tour";

const steps: TourStepType[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "First Step",
    description: "Watch the event log below as you navigate.",
    target: () => document.querySelector<HTMLElement>("#event-1"),
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Second Step",
    description: "Each step change triggers an event.",
    target: () => document.querySelector<HTMLElement>("#event-2"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Final Step",
    description: "Complete the tour to see the status change.",
    target: () => document.querySelector<HTMLElement>("#event-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
  },
];

const Example = () => {
  const [logs, setLogs] = React.useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Tour
        onStatusChange={(details) => addLog(`Status: ${details.status}`)}
        onStepChange={(details) =>
          addLog(`Step changed: ${details.stepId ?? "unknown"}`)
        }
        steps={steps}
      >
        <TourTrigger asChild>
          <Button variant="outline">Start Tour</Button>
        </TourTrigger>

        <div className="flex flex-wrap gap-2">
          <div
            className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
            id="event-1"
          >
            Step 1
          </div>
          <div
            className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
            id="event-2"
          >
            Step 2
          </div>
          <div
            className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
            id="event-3"
          >
            Step 3
          </div>
        </div>

        <div className="flex h-32 flex-col gap-1 overflow-y-auto rounded-md border bg-muted p-3 font-mono text-muted-foreground text-xs">
          <strong>Event Log:</strong>
          {logs.length === 0 ? (
            <span>Start the tour to see events</span>
          ) : (
            logs.map((log, i) => <span key={i}>{log}</span>)
          )}
        </div>

        <TourContent>
          <TourHeader>
            <TourProgressText />
            <TourTitle />
            <TourDescription />
          </TourHeader>

          <TourFooter>
            <TourActions />
          </TourFooter>
        </TourContent>
      </Tour>
    </div>
  );
};

export default Example;
