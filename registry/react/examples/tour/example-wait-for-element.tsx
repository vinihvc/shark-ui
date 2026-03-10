"use client";

import { waitForElement, waitForEvent } from "@ark-ui/react/tour";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
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
    title: "Dynamic Elements",
    description:
      "This tour demonstrates waiting for elements that appear dynamically.",
    actions: [{ label: "Start", action: "next" }],
  },
  {
    id: "add-item",
    type: "tooltip",
    title: "Add an Item",
    description: "Click the button to add a new item to the list.",
    target: () => document.querySelector<HTMLElement>("#btn-add-item"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "new-item",
    type: "tooltip",
    title: "New Item Added!",
    description:
      "The tour waited for this element to appear before showing this step.",
    target: () => document.querySelector<HTMLElement>('[data-item="new"]'),
    effect({ show }) {
      const [promise, cancel] = waitForElement(
        () => document.querySelector<HTMLElement>('[data-item="new"]'),
        { timeout: 5000 }
      );
      promise.then(() => show());
      return () => cancel();
    },
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "complete",
    type: "dialog",
    title: "Tour Complete",
    description: "You learned how to use waitForElement for dynamic content.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const WaitForElementExample = () => {
  const [items, setItems] = useState(["Item 1", "Item 2"]);

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  };

  return (
    <div className="flex flex-col gap-4">
      <Tour steps={steps}>
        <TourTrigger asChild>
          <Button variant="outline">Start Tour</Button>
        </TourTrigger>

        <div className="flex flex-col gap-2">
          <Button
            id="btn-add-item"
            type="button"
            variant="outline"
            size="sm"
            onClick={addItem}
          >
            <PlusIcon className="size-4" />
            Add Item
          </Button>

          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
                data-item={
                  index === items.length - 1 && items.length > 2
                    ? "new"
                    : undefined
                }
              >
                {item}
              </div>
            ))}
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
};

export default WaitForElementExample;
