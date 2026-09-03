"use client";

import { BoldIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Tooltip onOpenChange={handleOpenChange} open={open}>
        <TooltipTrigger asChild>
          <Button
            aria-label="Bold"
            clickEffect={false}
            size="icon-md"
            variant="outline"
          >
            <BoldIcon aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Bold</TooltipContent>
      </Tooltip>
      <p className="text-muted-foreground text-sm">
        Tooltip: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
