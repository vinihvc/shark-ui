"use client";

import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourActions,
  TourContent,
  TourDescription,
  TourHeader,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
  useTourContext,
} from "@/registry/react/components/tour";

const TourProgressBar = () => {
  const { tour } = useTourContext();
  return (
    <div className="absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl bg-muted">
      <div
        className="h-full bg-primary transition-[width]"
        style={{ width: `${tour.getProgressPercent()}%` }}
      />
    </div>
  );
};

const steps: TourStepType[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "Progress Tracking",
    description: "Watch the progress bar at the bottom as you navigate.",
    target: () => document.querySelector<HTMLElement>("#progress-1"),
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Halfway There",
    description: "The progress bar shows how far along you are.",
    target: () => document.querySelector<HTMLElement>("#progress-2"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Almost Done",
    description: "One more step to complete the tour.",
    target: () => document.querySelector<HTMLElement>("#progress-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-4",
    type: "tooltip",
    title: "Complete!",
    description: "You have completed all the steps.",
    target: () => document.querySelector<HTMLElement>("#progress-4"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
  },
];

const ProgressExample = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Tour</Button>
      </TourTrigger>

      <div className="flex flex-wrap gap-2">
        <div
          className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-1"
        >
          Step 1
        </div>
        <div
          className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-2"
        >
          Step 2
        </div>
        <div
          className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-3"
        >
          Step 3
        </div>
        <div
          className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-4"
        >
          Step 4
        </div>
      </div>

      <TourContent>
        <TourHeader>
          <TourProgressText />
          <TourTitle />
          <TourDescription />
        </TourHeader>

        <TourActions />

        <TourProgressBar />
      </TourContent>
    </Tour>
  </div>
);

export default ProgressExample;
