"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/react/components/command";

const initialItems = [
  { label: "Apple", value: "apple", group: "Fruit" },
  { label: "Banana", value: "banana", group: "Fruit" },
  { label: "Cherry", value: "cherry", group: "Fruit" },
  { label: "United States", value: "us", group: "Countries" },
  { label: "United Kingdom", value: "uk", group: "Countries" },
  { label: "Germany", value: "de", group: "Countries" },
];

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
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
          {collection.group().map(([group, items]) => (
            <CommandGroup heading={group} key={group}>
              {items.map((item) => (
                <CommandItem item={item} key={item.value}>
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

export default Example;
