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

const Example = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Tour</Button>
      </TourTrigger>

      <div
        className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
        id="tour-target-element"
      >
        Target Element
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

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Start Tour" }],
    description:
      "This tour demonstrates different step types: dialog, tooltip, and floating.",
    id: "welcome",
    title: "Welcome!",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description:
      "This step appears as a tooltip anchored to a specific element.",
    id: "tooltip-step",
    target: () => document.querySelector<HTMLElement>("#tour-target-element"),
    title: "Tooltip Step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description:
      "This step floats at a fixed position on the screen, independent of any target.",
    id: "floating-step",
    placement: "bottom-end",
    title: "Floating Step",
    type: "floating",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "You have seen all the different step types available.",
    id: "complete",
    title: "Tour Complete!",
    type: "dialog",
  },
];

export default Example;
