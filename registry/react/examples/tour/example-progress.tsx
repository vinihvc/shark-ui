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

const Example = () => (
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
    actions: [{ action: "next", label: "Next" }],
    description: "Watch the progress bar at the bottom as you navigate.",
    id: "step-1",
    target: () => document.querySelector<HTMLElement>("#progress-1"),
    title: "Progress Tracking",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "The progress bar shows how far along you are.",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#progress-2"),
    title: "Halfway There",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "One more step to complete the tour.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#progress-3"),
    title: "Almost Done",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "You have completed all the steps.",
    id: "step-4",
    target: () => document.querySelector<HTMLElement>("#progress-4"),
    title: "Complete!",
    type: "tooltip",
  },
];

export default Example;
