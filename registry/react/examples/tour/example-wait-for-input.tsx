"use client";

import { waitForEvent } from "@ark-ui/react/tour";
import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
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
    id: "intro",
    type: "dialog",
    title: "Form Tutorial",
    description:
      "Learn how to fill out the form by following the guided steps.",
    actions: [{ label: "Start", action: "next" }],
  },
  {
    id: "enter-name",
    type: "tooltip",
    title: "Enter Your Name",
    description: "Type your name in the input field to continue.",
    target: () => document.querySelector<HTMLInputElement>("#input-name"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent<HTMLInputElement>(
        target,
        "input",
        {
          predicate: (el) => el.value.trim().length >= 2,
        }
      );
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "enter-email",
    type: "tooltip",
    title: "Enter Your Email",
    description: "Now enter a valid email address.",
    target: () => document.querySelector<HTMLInputElement>("#input-email"),
    effect({ next, target, show }) {
      show();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const [promise, cancel] = waitForEvent<HTMLInputElement>(
        target,
        "input",
        {
          predicate: (el) => emailRegex.test(el.value),
        }
      );
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "check-terms",
    type: "tooltip",
    title: "Accept Terms",
    description: "Check the checkbox to accept the terms.",
    target: () => document.querySelector<HTMLInputElement>("#checkbox-terms"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent<HTMLInputElement>(
        target,
        "change",
        {
          predicate: (el) => el.checked,
        }
      );
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "complete",
    type: "dialog",
    title: "Form Complete!",
    description: "You have successfully filled out the form.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const Example = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Form Tutorial</Button>
      </TourTrigger>

      <div className="flex max-w-xs flex-col gap-4 rounded-lg border border-border bg-muted/50 p-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm" htmlFor="input-name">
            Name
          </label>
          <Input id="input-name" placeholder="Enter your name" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm" htmlFor="input-email">
            Email
          </label>
          <Input id="input-email" placeholder="Enter your email" type="email" />
        </div>
        <div className="flex items-center gap-2">
          <input
            className="size-4 rounded border-input accent-primary"
            id="checkbox-terms"
            type="checkbox"
          />
          <label
            className="text-muted-foreground text-sm"
            htmlFor="checkbox-terms"
          >
            I accept the terms and conditions
          </label>
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

export default Example;
