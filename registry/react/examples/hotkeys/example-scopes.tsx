"use client";

import { useState } from "react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  createHotkeyStore,
  useFormatHotkey,
  useHotkeys,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const commands = [
  { hotkey: "mod+shift+B", id: "bold", label: "Bold", scope: "editor" },
  { hotkey: "mod+shift+R", id: "print", label: "Print", scope: "reader" },
];

const store = createHotkeyStore({ activeScopes: ["editor"] });

const Example = () => {
  const formatHotkey = useFormatHotkey();
  const [scope, setScope] = useState("editor");
  const [fired, setFired] = useState<string | null>(null);

  useHotkeys({
    commands: commands.map((command) => ({
      action: () => setFired(command.id),
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
    setFired(null);
    store.setScope(next);
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        Only commands in the active scope respond.
      </p>
      <div className="flex items-center justify-between gap-3">
        <Button onClick={toggle} size="sm" variant="outline">
          Switch scope
        </Button>
        <Badge variant="secondary">{scope}</Badge>
      </div>
      <ul className="flex flex-col gap-2">
        {commands.map((command) => {
          const active = command.scope === scope;

          return (
            <li
              className="flex items-center justify-between gap-3 text-sm"
              key={command.id}
            >
              <span
                className={active ? "text-foreground" : "text-muted-foreground"}
              >
                {command.label} · {command.scope}
              </span>
              <Kbd>{formatHotkey(command.hotkey)}</Kbd>
            </li>
          );
        })}
      </ul>
      {fired ? (
        <Badge className="self-start" variant="secondary">
          Last fired: {fired}
        </Badge>
      ) : null}
    </div>
  );
};

export default Example;
