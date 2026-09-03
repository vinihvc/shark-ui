"use client";

import { useState } from "react";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Reasoning duration={8} onOpenChange={handleOpenChange} open={open}>
        <ReasoningTrigger duration={8} />
        <ReasoningContent>
          The form already validates empty fields. I should add a format check
          next to `validateForm` and keep the regex in a helper so the UI can
          reuse it.
        </ReasoningContent>
      </Reasoning>
      <p className="text-muted-foreground text-sm">
        Reasoning: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
