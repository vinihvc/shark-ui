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
    id: "welcome",
    type: "dialog",
    title: "Welcome!",
    description:
      "This tour demonstrates different step types: dialog, tooltip, and floating.",
    actions: [{ label: "Start Tour", action: "next" }],
  },
  {
    id: "tooltip-step",
    type: "tooltip",
    title: "Tooltip Step",
    description:
      "This step appears as a tooltip anchored to a specific element.",
    target: () => document.querySelector<HTMLElement>("#tour-target-element"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "floating-step",
    type: "floating",
    placement: "bottom-end",
    title: "Floating Step",
    description:
      "This step floats at a fixed position on the screen, independent of any target.",
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "complete",
    type: "dialog",
    title: "Tour Complete!",
    description: "You have seen all the different step types available.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const StepTypesExample = () => (
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

export default StepTypesExample;
