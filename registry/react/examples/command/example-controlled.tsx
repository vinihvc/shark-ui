"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { useState } from "react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/react/components/command";

const Example = () => {
  const [value, setValue] = useState(["linear"]);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  const selected = initialItems.find((item) => item.value === value[0]);

  const handleInputValueChange = (details: { inputValue: string }) => {
    filter(details.inputValue);
  };

  const handleValueChange = (details: { value: string[] }) => {
    setValue(details.value);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Command
        collection={collection}
        onInputValueChange={handleInputValueChange}
        onValueChange={handleValueChange}
        value={value}
      >
        <CommandInput />
        <CommandContent>
          <CommandEmpty />
          <CommandList>
            {collection.group().map(([group, items], index) => (
              <CommandGroup heading={group} key={group}>
                {items.map((item) => (
                  <CommandItem item={item} key={item.value}>
                    {item.label}
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  </CommandItem>
                ))}
                {index < collection.group().length - 1 && <CommandSeparator />}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandContent>
      </Command>
      <p className="text-muted-foreground text-sm">
        Selected: {selected?.label ?? "(none)"}
      </p>
    </div>
  );
};

const initialItems = [
  { group: "Suggestions", label: "Linear", shortcut: "⌘L", value: "linear" },
  { group: "Suggestions", label: "Figma", shortcut: "⌘F", value: "figma" },
  { group: "Suggestions", label: "Slack", shortcut: "⌘S", value: "slack" },
  { group: "Settings", label: "Settings", shortcut: "⌘,", value: "settings" },
  { group: "Settings", label: "Help", shortcut: "⌘?", value: "help" },
];

export default Example;
