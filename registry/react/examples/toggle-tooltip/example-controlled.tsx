"use client";

import { InfoIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleTooltip onOpenChange={handleOpenChange} open={open}>
        <ToggleTooltipTrigger asChild>
          <Button
            aria-label="More information"
            size="icon-md"
            variant="outline"
          >
            <InfoIcon aria-hidden="true" />
          </Button>
        </ToggleTooltipTrigger>
        <ToggleTooltipContent className="max-w-52">
          Hover or click to see this content. Works on touch devices too.
        </ToggleTooltipContent>
      </ToggleTooltip>
      <p className="text-muted-foreground text-sm">
        Tooltip: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
