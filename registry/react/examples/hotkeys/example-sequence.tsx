"use client";

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
          Press the keys in order, one after the other
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
              <div className="flex items-center gap-1">
                <Kbd>{formatHotkey(command.keys[0])}</Kbd>
                <kbd className="text-xs">{"then"}</kbd>
                <Kbd>{formatHotkey(command.keys[1])}</Kbd>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const commands = [
  { hotkey: "G > H", id: "home", keys: ["G", "H"], label: "Home" },
  { hotkey: "G > S", id: "settings", keys: ["G", "S"], label: "Settings" },
];

export default Example;
