"use client";

import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourPreviousStep,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
} from "@/registry/react/components/tour";

const Example = () => (
  <Tour steps={steps}>
    <TourTrigger asChild>
      <Button variant="outline">Open</Button>
    </TourTrigger>
    <TourContent className="max-w-md [--space:--spacing(2)]">
      <TourHeader>
        <TourProgressText />
        <TourTitle />
        <TourDescription />
      </TourHeader>
      <TourFooter>
        <TourPreviousStep />
        <TourNextStep />
      </TourFooter>
    </TourContent>
  </Tour>
);

const steps: TourStepType[] = [
  {
    actions: [{ action: "next" as const, label: "Next" }],
    description:
      "`TourContent` uses `[--space:--spacing(2)]` here for tighter padding than the default.",
    id: "step-1",
    title: "Custom spacing",
    type: "dialog",
  },
  {
    actions: [{ action: "dismiss" as const, label: "Done" }],
    description:
      "You can pair `[--space]` with responsive variants, e.g. `md:[--space:--spacing(6)]`.",
    id: "step-2",
    title: "Breakpoint utilities",
    type: "dialog",
  },
];

export default Example;
