"use client";

import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  type CommandGroupValue,
  CommandInput,
  CommandItem,
  type CommandItemValue,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/react/components/command";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const suggestions: CommandItemValue[] = [
  { label: "Linear", shortcut: "⌘L", value: "linear" },
  { label: "Figma", shortcut: "⌘F", value: "figma" },
  { label: "Slack", shortcut: "⌘S", value: "slack" },
  { label: "YouTube", shortcut: "⌘Y", value: "youtube" },
  { label: "Raycast", shortcut: "⌘R", value: "raycast" },
];

const commands: CommandItemValue[] = [
  {
    label: "Clipboard History",
    shortcut: "⌘⇧C",
    value: "clipboard-history",
  },
  {
    label: "Import Extension",
    shortcut: "⌘I",
    value: "import-extension",
  },
  { label: "Create Snippet", shortcut: "⌘N", value: "create-snippet" },
  {
    label: "System Preferences",
    shortcut: "⌘,",
    value: "system-preferences",
  },
  {
    label: "Window Management",
    shortcut: "⌘⇧W",
    value: "window-management",
  },
];

const groupedItems: CommandGroupValue[] = [
  { items: suggestions, value: "Suggestions" },
  { items: commands, value: "Commands" },
];

export default function CommandExample() {
  const [open, setOpen] = useState(false);

  function handleItemSelect(_value: string) {
    setOpen(false);
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog onOpenChange={(e) => setOpen(e.open)} open={open}>
      <CommandDialogTrigger asChild>
        <Button variant="outline">
          Open Command Palette
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>J</Kbd>
          </KbdGroup>
        </Button>
      </CommandDialogTrigger>
      <CommandDialogContent>
        <Command
          items={groupedItems}
          onValueChange={(e) => {
            const val = Array.isArray(e.value) ? e.value[0] : e.value;
            if (val) {
              handleItemSelect(val);
            }
          }}
        >
          <CommandInput placeholder="Search for apps and commands..." />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: CommandGroupValue, _index: number) => (
                <Fragment key={group.value}>
                  <CommandGroup>
                    <CommandGroupLabel>{group.value}</CommandGroupLabel>
                    <CommandCollection items={group.items}>
                      {(item: CommandItemValue) => (
                        <CommandItem item={item} key={item.value}>
                          <span className="flex-1">{item.label}</span>
                          {item.shortcut ? (
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          ) : null}
                        </CommandItem>
                      )}
                    </CommandCollection>
                  </CommandGroup>
                  <CommandSeparator />
                </Fragment>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <KbdGroup>
                  <Kbd>
                    <ArrowUpIcon />
                  </Kbd>
                  <Kbd>
                    <ArrowDownIcon />
                  </Kbd>
                </KbdGroup>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>
                  <CornerDownLeftIcon />
                </Kbd>
                <span>Open</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Kbd>Esc</Kbd>
              <span>Close</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
}
