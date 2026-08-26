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
  type TourStepType,
  TourTitle,
  TourTrigger,
} from "@/registry/react/components/tour";

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Begin" }],
    description:
      "This tour will guide you through actions. You must complete each step to proceed.",
    id: "intro",
    title: "Interactive Tutorial",
    type: "dialog",
  },
  {
    description: 'Click the "Add Item" button to continue.',
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "click-add",
    target: () => document.querySelector<HTMLElement>("#btn-add"),
    title: "Click the Add Button",
    type: "tooltip",
  },
  {
    description: 'Now click the "Edit" button.',
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "click-edit",
    target: () => document.querySelector<HTMLElement>("#btn-edit"),
    title: "Click the Edit Button",
    type: "tooltip",
  },
  {
    description: 'Finally, click the "Delete" button.',
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "click-delete",
    target: () => document.querySelector<HTMLElement>("#btn-delete"),
    title: "Click the Delete Button",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Finish" }],
    description: "You completed all the interactive steps.",
    id: "complete",
    title: "Well Done!",
    type: "dialog",
  },
];

const Example = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Interactive Tour</Button>
      </TourTrigger>

      <div className="flex flex-wrap gap-2">
        <Button id="btn-add" size="sm" type="button" variant="outline">
          Add Item
        </Button>
        <Button id="btn-edit" size="sm" type="button" variant="outline">
          Edit
        </Button>
        <Button id="btn-delete" size="sm" type="button" variant="outline">
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

export default Example;
