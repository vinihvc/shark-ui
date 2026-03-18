"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";

const initialItems = [
  { label: "New File", shortcut: "⌘N", value: "new" },
  { label: "Save", shortcut: "⌘S", value: "save" },
  { label: "Copy", shortcut: "⌘C", value: "copy" },
  { label: "Paste", shortcut: "⌘V", value: "paste" },
  { label: "Undo", shortcut: "⌘Z", value: "undo" },
  { label: "Find", shortcut: "⌘F", value: "find" },
];

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Command
      className="w-full max-w-md"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <CommandInput placeholder="Search..." />
      <CommandContent>
        <CommandEmpty />
        <CommandList>
          {collection.items.map((item) => (
            <CommandItem item={item} key={item.value}>
              {item.label}
              <CommandShortcut>{item.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

export default Example;
