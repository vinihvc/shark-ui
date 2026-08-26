"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Fragment } from "react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/react/components/command";

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
          {collection.group().map(([group, items], index) => (
            <Fragment key={group}>
              {index !== 0 && <CommandSeparator />}
              <CommandGroup heading={group}>
                {items.map((item) => (
                  <CommandItem item={item} key={item.value}>
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Fragment>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

const initialItems = [
  { group: "Fruit", label: "Apple", value: "apple" },
  { group: "Fruit", label: "Banana", value: "banana" },
  { group: "Fruit", label: "Cherry", value: "cherry" },
  { group: "Countries", label: "United States", value: "us" },
  { group: "Countries", label: "United Kingdom", value: "uk" },
  { group: "Countries", label: "Germany", value: "de" },
];

export default Example;
