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

const steps: TourStepType[] = [
  {
    id: "step-1",
    type: "dialog",
    title: "Custom spacing",
    description:
      "`TourContent` uses `[--space:--spacing(2)]` here for tighter padding than the default.",
    actions: [{ label: "Next", action: "next" as const }],
  },
  {
    id: "step-2",
    type: "dialog",
    title: "Breakpoint utilities",
    description:
      "You can pair `[--space]` with responsive variants, e.g. `md:[--space:--spacing(6)]`.",
    actions: [{ label: "Done", action: "dismiss" as const }],
  },
];

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

export default Example;
