"use client";

import { Card, CardContent } from "@registry/react/components/card";
import { Separator } from "@registry/react/components/separator";
import React from "react";
import {
  useFormatHotkey,
  useHotkey,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const HOTKEY = "mod+shift+H";

const Example = () => {
  const formatHotkey = useFormatHotkey();

  const [count, setCount] = React.useState(0);

  useHotkey({
    action: () => setCount((value) => value + 1),
    hotkey: HOTKEY,
    options: { preventDefault: true },
  });

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <p className="text-muted-foreground">
          Press <Kbd>{formatHotkey(HOTKEY)}</Kbd> anywhere on this page
        </p>

        <Separator className="my-4" />

        <p className="flex items-end gap-2 text-muted-foreground">
          <span className="font-bold text-2xl text-foreground tabular-nums">
            {" "}
            {count}
          </span>{" "}
          {count === 1 ? "time" : "times"}
        </p>
      </CardContent>
    </Card>
  );
};

export default Example;
