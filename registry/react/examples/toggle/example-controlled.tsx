"use client";

import React from "react";
import { Toggle } from "@/registry/react/components/toggle";

const Example = () => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Toggle onPressedChange={setPressed} pressed={pressed} variant="outline">
        Toggle
      </Toggle>
      <p className="text-muted-foreground text-sm">{pressed ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
