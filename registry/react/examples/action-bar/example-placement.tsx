"use client";

import {
  ActionBarCloseTrigger,
  ActionBarContent,
  ActionBarPositioner,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";
import { useState } from "react";

const ActionBarPlacementDemo = () => {
  const [placement, setPlacement] = useState<
    "bottom" | "bottom-start" | "bottom-end"
  >("bottom");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant={placement === "bottom-start" ? "solid" : "outline"}
          size="sm"
          onClick={() => setPlacement("bottom-start")}
        >
          Bottom Start
        </Button>
        <Button
          type="button"
          variant={placement === "bottom" ? "solid" : "outline"}
          size="sm"
          onClick={() => setPlacement("bottom")}
        >
          Bottom
        </Button>
        <Button
          type="button"
          variant={placement === "bottom-end" ? "solid" : "outline"}
          size="sm"
          onClick={() => setPlacement("bottom-end")}
        >
          Bottom End
        </Button>
      </div>
      <Button type="button" onClick={() => setOpen(true)}>
        Show Action Bar
      </Button>
      <ActionBarRoot open={open} onOpenChange={setOpen}>
        <ActionBarPositioner placement={placement}>
          <ActionBarContent className="w-full max-w-md">
            <ActionBarCloseTrigger />
            <ActionBarSeparator />
            <ActionBarSelectionTrigger count={5} />
          </ActionBarContent>
        </ActionBarPositioner>
      </ActionBarRoot>
    </div>
  );
};

export default ActionBarPlacementDemo;
