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
    actions: [{ action: "next", label: "Next" }],
    description: "Watch the event log below as you navigate.",
    id: "step-1",
    target: () => document.querySelector<HTMLElement>("#event-1"),
    title: "First Step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Each step change triggers an event.",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#event-2"),
    title: "Second Step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Complete the tour to see the status change.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#event-3"),
    title: "Final Step",
    type: "tooltip",
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
