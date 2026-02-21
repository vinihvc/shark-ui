"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import { Show } from "@/registry/react/components/show";

const ShowDemo = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setValue((v) => Math.max(0, v - 1))}
          size="sm"
          type="button"
          variant="outline"
        >
          -
        </Button>
        <span className="min-w-[2rem] text-center font-medium">
          Value: {value}
        </span>
        <Button
          onClick={() => setValue((v) => v + 1)}
          size="sm"
          type="button"
          variant="outline"
        >
          +
        </Button>
      </div>
      <Show
        fallback={
          <p className="text-muted-foreground text-sm">
            Not there yet. Keep clicking...
          </p>
        }
        when={value >= 10}
      >
        <p className="font-medium text-success">Value is now 10 or more!</p>
      </Show>
    </div>
  );
};

export default ShowDemo;
