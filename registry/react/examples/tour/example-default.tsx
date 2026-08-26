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

const TourDemo = () => (
  <Tour steps={steps}>
    <TourTrigger asChild>
      <Button variant="outline">Open</Button>
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

const steps: TourStepType[] = [
  {
    actions: [{ action: "next" as const, label: "Start Tour" }],
    description: "You gonna learn how to use to install and use the component.",
    id: "step-1",
    title: "Welcome to the tour",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev" as const, label: "Previous" },
      { action: "next" as const, label: "Next" },
    ],
    description:
      "Let's take a quick tour of the documentation site to help you get started。",
    id: "step-2",
    target: () => document.querySelector("#installation"),
    title: "Installation Step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev" as const, label: "Previous" },
      { action: "next" as const, label: "Next" },
    ],
    description: "This is how to use the component.",
    id: "step-3",
    target: () => document.querySelector("#usage"),
    title: "Usage Step",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss" as const, label: "Finish Tour" }],
    description: "You've completed the tour. Thank you for your time!",
    id: "step-4",
    title: "That's all folks!",
    type: "dialog",
  },
];

export default TourDemo;
