"use client";

import { KeyboardIcon } from "lucide-react";
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
    <Tour keyboardNavigation steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Tour</Button>
      </TourTrigger>

      <p className="flex items-center gap-2 text-muted-foreground text-sm">
        <KeyboardIcon className="size-4" />
        Use arrow keys to navigate, Escape to close
      </p>

      <div className="flex flex-wrap gap-2">
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-key-1"
        >
          Step 1
        </div>
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-key-2"
        >
          Step 2
        </div>
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-key-3"
        >
          Step 3
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

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "Press the right arrow key (→) to go to the next step.",
    id: "step-1",
    target: () => document.querySelector<HTMLElement>("#tour-key-1"),
    title: "Keyboard Navigation",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Press the left arrow key (←) to go back.",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#tour-key-2"),
    title: "Go Back",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Press Escape to close the tour at any time.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#tour-key-3"),
    title: "Close Tour",
    type: "tooltip",
  },
];

export default Example;
