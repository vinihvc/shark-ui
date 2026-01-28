"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-64 space-y-2">
      <Collapsible onOpenChange={({ open }) => setOpen(open)} open={open}>
        <CollapsibleTrigger asChild>
          <Button className="w-full" variant="outline">
            {open ? "Collapse" : "Expand"}
            <CollapsibleIndicator />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="p-2">
          <p className="text-muted-foreground text-sm">
            This collapsible is controlled. The state is managed externally.
          </p>
        </CollapsibleContent>
      </Collapsible>

      <p className="text-center text-muted-foreground text-sm">
        State: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
