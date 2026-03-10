"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <HoverCard
        onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
        open={open}
      >
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover here</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium">Controlled</h4>
            <p className="text-muted-foreground text-sm">
              The open state is managed externally with <code>open</code> and{" "}
              <code>onOpenChange</code>.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <p className="text-center text-muted-foreground text-sm">
        {open ? "✅" : "❌"}
      </p>
    </div>
  );
};

export default Example;
