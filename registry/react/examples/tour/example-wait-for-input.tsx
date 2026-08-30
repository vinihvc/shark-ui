"use client";

import { waitForEvent } from "@ark-ui/react/tour";
import { Checkbox } from "@registry/react/components/checkbox";
import { Field, FieldLabel } from "@registry/react/components/field";
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

const Example = () => (
  <div className="flex flex-col gap-4">
    <Tour steps={steps}>
      <TourTrigger asChild>
        <Button variant="outline">Start Form Tutorial</Button>
      </TourTrigger>

      <div className="flex max-w-xs flex-col gap-4 rounded-lg border border-border bg-muted/50 p-4">
        <Field>
          <FieldLabel htmlFor="input-name">Name</FieldLabel>
          <Input id="input-name" placeholder="Enter your name" type="text" />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-email">Email</FieldLabel>
          <Input id="input-email" placeholder="Enter your email" type="email" />
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="checkbox-terms" />
          <FieldLabel htmlFor="checkbox-terms">
            I accept the terms and conditions
          </FieldLabel>
        </Field>
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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Start" }],
    description:
      "Learn how to fill out the form by following the guided steps.",
    id: "intro",
    title: "Form Tutorial",
    type: "dialog",
  },
  {
    description: "Type your name in the input field to continue.",
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
    id: "enter-name",
    target: () => document.querySelector<HTMLInputElement>("#input-name"),
    title: "Enter Your Name",
    type: "tooltip",
  },
  {
    description: "Now enter a valid email address.",
    effect({ next, target, show }) {
      show();
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
    id: "enter-email",
    target: () => document.querySelector<HTMLInputElement>("#input-email"),
    title: "Enter Your Email",
    type: "tooltip",
  },
  {
    description: "Check the checkbox to accept the terms.",
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
    id: "check-terms",
    target: () => document.querySelector<HTMLInputElement>("#checkbox-terms"),
    title: "Accept Terms",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "You have successfully filled out the form.",
    id: "complete",
    title: "Form Complete!",
    type: "dialog",
  },
];

export default Example;
