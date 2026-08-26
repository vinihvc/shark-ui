"use client";

import { Badge } from "@registry/react/components/badge";
import { Button } from "@registry/react/components/button";
import { Card, CardContent } from "@registry/react/components/card";
import { Separator } from "@registry/react/components/separator";
import React from "react";
import {
  createHotkeyStore,
  useFormatHotkey,
  useHotkeys,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const commands = [
  { hotkey: "mod+shift+B", id: "bold", label: "Bold", scope: "editor" },
  { hotkey: "mod+shift+U", id: "print", label: "Print", scope: "reader" },
];

const store = createHotkeyStore({ activeScopes: ["editor"] });

const Example = () => {
  const formatHotkey = useFormatHotkey();
  const [scope, setScope] = React.useState("editor");
  const [selected, setSelected] = React.useState<string | null>(null);

  useHotkeys({
    commands: commands.map((command) => ({
      action: () => setSelected(command.id),
      hotkey: command.hotkey,
      id: command.id,
      options: { preventDefault: true },
      scopes: [command.scope],
    })),
    store,
  });

  const toggle = () => {
    const next = scope === "editor" ? "reader" : "editor";
    setScope(next);
    setSelected(null);
    store.setScope(next);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <p className="flex items-center justify-between gap-2 text-muted-foreground text-sm">
          <span>Active scope</span>
          <span className="flex items-center gap-2">
            <Button onClick={toggle} size="sm" variant="outline">
              Switch
            </Button>
            <Badge variant="secondary">{scope}</Badge>
          </span>
        </p>
        <Separator className="my-4" />
        <ul className="flex flex-col gap-2">
          {commands.map((command) => {
            const active = command.scope === scope;

            return (
              <li
                className="flex items-center justify-between gap-3 rounded-lg p-2 text-sm data-[selected=true]:bg-primary data-[active=false]:text-muted-foreground data-[selected=true]:text-primary-foreground"
                data-active={active}
                data-selected={selected === command.id}
                key={command.id}
              >
                <span>
                  {command.label} · {command.scope}
                </span>
                <Kbd>{formatHotkey(command.hotkey)}</Kbd>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Example;
