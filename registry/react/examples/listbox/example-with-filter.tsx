"use client";

import { useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import React from "react";
import { Input } from "@/registry/react/components/input";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const [search, setSearch] = React.useState("");

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
    filter: contains,
  });

  const isEmpty = collection.items.length === 0 && search;

  return (
    <Item className="flex w-full max-w-64 flex-col gap-2 p-1" variant="outline">
      <Input
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          filter(value);
        }}
        placeholder="Search..."
        value={search}
      />
      <Listbox collection={collection}>
        <ListboxContent>
          {collection.items.map((item) => (
            <ListboxItem item={item} key={item.value}>
              <ListboxItemText>{item.label}</ListboxItemText>
              <ListboxItemIndicator />
            </ListboxItem>
          ))}

          {isEmpty && <ListboxEmpty>No results found.</ListboxEmpty>}
        </ListboxContent>
      </Listbox>
    </Item>
  );
};

export default Example;
