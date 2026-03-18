"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { CornerDownLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";
import { Kbd } from "@/registry/react/components/kbd";

const initialItems = [
  { label: "New File", shortcut: "⌘N", value: "new", group: "File" },
  { label: "Save", shortcut: "⌘S", value: "save", group: "File" },
  { label: "Open", shortcut: "⌘O", value: "open", group: "File" },
  { label: "Undo", shortcut: "⌘Z", value: "undo", group: "Edit" },
  { label: "Redo", shortcut: "⌘⇧Z", value: "redo", group: "Edit" },
  { label: "Cut", shortcut: "⌘X", value: "cut", group: "Edit" },
  { label: "Copy", shortcut: "⌘C", value: "copy", group: "Edit" },
];

const Example = () => {
  const [open, setOpen] = React.useState(false);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <CommandDialog onOpenChange={({ open: o }) => setOpen(o)} open={open}>
      <CommandDialogTrigger asChild>
        <Button variant="outline">Open Command Palette</Button>
      </CommandDialogTrigger>
      <CommandDialogContent>
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={() => setOpen(false)}
        >
          <CommandInput placeholder="Search commands..." />
          <CommandContent>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {collection.group().map(([group, items]) => (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) => (
                    <CommandItem item={item} key={item.value}>
                      {item.label}
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>
          <CommandFooter>
            <div className="flex items-center gap-2">
              <Kbd variant="outline">
                <CornerDownLeftIcon className="size-3" />
              </Kbd>
              <span className="text-muted-foreground">To select</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};

export default Example;
