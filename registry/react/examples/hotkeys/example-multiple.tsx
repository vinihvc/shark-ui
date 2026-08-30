"use client";

import { Badge } from "@registry/react/components/badge";
import { Card, CardContent } from "@registry/react/components/card";
import { Separator } from "@registry/react/components/separator";
import React from "react";
import {
  useFormatHotkey,
  useHotkeys,
  usePlatform,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const Example = () => {
  const platform = usePlatform();
  const formatHotkey = useFormatHotkey();

  const [selected, setSelected] = React.useState<string | null>(null);

  useHotkeys({
    commands: commands.map((command) => ({
      ...command,
      action: () => setSelected(command.id),
      options: { preventDefault: true },
    })),
  });

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <p className="flex items-center gap-2 text-muted-foreground text-sm">
          <span className="uppercase">Detected platform </span>
          <span className="font-medium text-foreground">
            <Badge variant="secondary">{platform}</Badge>
          </span>
        </p>
        <Separator className="my-4" />
        <ul className="flex flex-col gap-2">
          {commands.map((command) => (
            <li
              className="flex items-center justify-between gap-3 rounded-lg p-2 text-sm data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"
              data-selected={selected === command.id}
              key={command.id}
            >
              <span>{command.label}</span>
              <Kbd>{formatHotkey(command.hotkey)}</Kbd>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const commands = [
  { category: "File", hotkey: "mod+S", id: "save", label: "Save" },
  { category: "Edit", hotkey: "mod+Z", id: "undo", label: "Undo" },
  { category: "Edit", hotkey: "mod+Y", id: "redo", label: "Redo" },
];

export default Example;
