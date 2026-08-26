"use client";

import { Badge } from "@registry/react/components/badge";
import { Card, CardContent } from "@registry/react/components/card";
import { Separator } from "@registry/react/components/separator";
import React from "react";
import {
  createHotkeyStore,
  useHotkey,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const TIMEOUT_MS = 600;

const store = createHotkeyStore({ sequenceTimeoutMs: TIMEOUT_MS });

const Example = () => {
  const [count, setCount] = React.useState(0);

  useHotkey({
    action: () => setCount((value) => value + 1),
    hotkey: "X > Y",
    options: { preventDefault: true },
    store,
  });

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <p className="text-muted-foreground text-sm">
            Press <Kbd>X</Kbd> then <Kbd>Y</Kbd> within the timeout
          </p>
          <Badge variant="secondary">{TIMEOUT_MS}ms</Badge>
        </div>
        <Separator className="my-4" />
        <p className="flex items-end gap-2 text-muted-foreground">
          <span className="font-bold text-2xl text-foreground tabular-nums">
            {count}
          </span>{" "}
          {count === 1 ? "completion" : "completions"}
        </p>
      </CardContent>
    </Card>
  );
};

export default Example;
