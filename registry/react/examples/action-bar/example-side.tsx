"use client";

import { XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

type Placement = "bottom" | "bottom-start" | "bottom-end";

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<Placement>("bottom");

  const handleOpenChange = (nextPlacement: Placement) => {
    setIsOpen(true);
    setPlacement(nextPlacement);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => handleOpenChange("bottom-start")}
          variant="outline"
        >
          Bottom Start
        </Button>
        <Button onClick={() => handleOpenChange("bottom")} variant="outline">
          Bottom
        </Button>
        <Button
          onClick={() => handleOpenChange("bottom-end")}
          variant="outline"
        >
          Bottom End
        </Button>
      </div>

      <ActionBar onOpenChange={setIsOpen} open={isOpen}>
        <ActionBarContent
          className="w-full max-w-md"
          positioning={{ placement }}
        >
          <ActionBarClose asChild>
            <Button size="icon-sm" variant="ghost">
              <XIcon />
            </Button>
          </ActionBarClose>
          <ActionBarSeparator />
          <ActionBarSelectionTrigger count={5} />
        </ActionBarContent>
      </ActionBar>
    </>
  );
};

export default Example;
