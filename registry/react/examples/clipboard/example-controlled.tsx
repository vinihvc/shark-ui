"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";

const Example = () => {
  const [value, setValue] = React.useState("https://x.com/vinihvc");

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <Clipboard value={value}>
        <ClipboardInput />

        <ClipboardTrigger asChild>
          <Button size="icon-md">
            <ClipboardIndicator />
          </Button>
        </ClipboardTrigger>
      </Clipboard>

      <Button
        onClick={() => setValue("https://x.com/shadcn")}
        variant="secondary"
      >
        Change URL
      </Button>
    </div>
  );
};

export default Example;
