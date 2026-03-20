"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Hint,
  HintContent,
  HintTrigger,
} from "@/registry/react/components/hint";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <Hint onOpenChange={setOpen} open={open}>
        <HintTrigger asChild>
          <Button type="button" variant="secondary">
            Hover/Click to show hint
          </Button>
        </HintTrigger>
        <HintContent>Controlled by React state below.</HintContent>
      </Hint>

      <Button
        onClick={() => setOpen((previous) => !previous)}
        variant="outline"
      >
        {open ? "Hide hint" : "Show hint"}
      </Button>
    </div>
  );
};

export default Example;
