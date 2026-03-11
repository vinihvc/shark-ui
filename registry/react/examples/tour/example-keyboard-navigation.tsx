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

const steps: TourStepType[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "Keyboard Navigation",
    description: "Press the right arrow key (→) to go to the next step.",
    target: () => document.querySelector<HTMLElement>("#tour-key-1"),
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Go Back",
    description: "Press the left arrow key (←) to go back.",
    target: () => document.querySelector<HTMLElement>("#tour-key-2"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Close Tour",
    description: "Press Escape to close the tour at any time.",
    target: () => document.querySelector<HTMLElement>("#tour-key-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
  },
];

const KeyboardNavigationExample = () => (
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

export default KeyboardNavigationExample;
