"use client";

import { waitForEvent } from "@ark-ui/react/tour";
import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourActions,
  TourContent,
  TourDescription,
  TourHeader,
  TourProgressText,
  TourTitle,
  TourTrigger,
  type TourStepType,
} from "@/registry/react/components/tour";

const steps: TourStepType[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Interactive Tutorial",
    description:
      "This tour will guide you through actions. You must complete each step to proceed.",
    actions: [{ label: "Begin", action: "next" }],
  },
  {
    id: "click-add",
    type: "tooltip",
    title: "Click the Add Button",
    description: 'Click the "Add Item" button to continue.',
    target: () => document.querySelector<HTMLElement>("#btn-add"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "click-edit",
    type: "tooltip",
    title: "Click the Edit Button",
    description: 'Now click the "Edit" button.',
    target: () => document.querySelector<HTMLElement>("#btn-edit"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "click-delete",
    type: "tooltip",
    title: "Click the Delete Button",
    description: 'Finally, click the "Delete" button.',
    target: () => document.querySelector<HTMLElement>("#btn-delete"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "complete",
    type: "dialog",
    title: "Well Done!",
    description: "You completed all the interactive steps.",
    actions: [{ label: "Finish", action: "dismiss" }],
  },
];

const WaitForClickExample = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Interactive Tour</Button>
      </TourTrigger>

      <div className="flex flex-wrap gap-2">
        <Button id="btn-add" type="button" variant="outline" size="sm">
          Add Item
        </Button>
        <Button id="btn-edit" type="button" variant="outline" size="sm">
          Edit
        </Button>
        <Button id="btn-delete" type="button" variant="outline" size="sm">
          Delete
        </Button>
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

export default WaitForClickExample;
