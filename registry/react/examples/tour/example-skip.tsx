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
} from "@/registry/react/components/tour";

const steps: TourStepType[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "First Feature",
    description: "You can skip this tour at any time using the Skip button.",
    target: () => document.querySelector<HTMLElement>("#tour-item-1"),
    actions: [
      { label: "Skip", action: "dismiss" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Second Feature",
    description: "Continue or skip to end the tour early.",
    target: () => document.querySelector<HTMLElement>("#tour-item-2"),
    actions: [
      { label: "Skip", action: "dismiss" },
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Final Feature",
    description: "This is the last step of the tour.",
    target: () => document.querySelector<HTMLElement>("#tour-item-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
  },
];

const Example = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Tour</Button>
      </TourTrigger>

      <div className="flex flex-wrap gap-2">
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-item-1"
        >
          Item 1
        </div>
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-item-2"
        >
          Item 2
        </div>
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-item-3"
        >
          Item 3
        </div>
      </div>

      <TourContent>
        <TourHeader>
          <TourProgressText />
          <TourTitle />
          <TourDescription />
        </TourHeader>

        <TourActions />
      </TourContent>
    </Tour>
  </div>
);

export default Example;
