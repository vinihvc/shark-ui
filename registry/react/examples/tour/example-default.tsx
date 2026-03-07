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
    title: "Welcome to the tour",
    description: "You gonna learn how to use to install and use the component.",
    actions: [{ label: "Start Tour", action: "next" as const }],
  },
  {
    id: "step-2",
    type: "tooltip",
    target: () => document.querySelector("#installation"),
    title: "Installation Step",
    description:
      "Let's take a quick tour of the documentation site to help you get started。",
    actions: [
      { label: "Previous", action: "prev" as const },
      { label: "Next", action: "next" as const },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    target: () => document.querySelector("#usage"),
    title: "Usage Step",
    description: "This is how to use the component.",
    actions: [
      { label: "Previous", action: "prev" as const },
      { label: "Next", action: "next" as const },
    ],
  },
  {
    id: "step-4",
    type: "dialog",
    title: "That's all folks!",
    description: "You've completed the tour. Thank you for your time!",
    actions: [{ label: "Finish Tour", action: "dismiss" as const }],
  },
];

const TourDemo = () => (
  <Tour steps={steps}>
    <TourTrigger asChild>
      <Button>Open Tour</Button>
    </TourTrigger>

    <TourContent>
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

export default TourDemo;
