"use client";

import { useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
import {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxValueText,
} from "@/registry/react/components/listbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => {
  const [search, setSearch] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
      { label: "Canada", value: "ca" },
    ],
    filter: contains,
  });

  const isEmpty = collection.items.length === 0 && search;

  return (
    <Listbox
      className="w-full max-w-48"
      collection={collection}
      onSelect={() => {
        setIsOpen(false);
      }}
    >
      <Popover onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
        <PopoverTrigger asChild>
          <Button
            className="justify-between"
            clickEffect={false}
            variant="outline"
          >
            <ListboxValueText placeholder="Select framework" />
            <ChevronsUpDown className="opacity-64" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-64 gap-2 p-1">
          <Input
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
              filter(value);
            }}
            placeholder="Search..."
            value={search}
          />
          <ListboxContent>
            {collection.items.map((item) => (
              <ListboxItem item={item} key={item.value}>
                <ListboxItemText>{item.label}</ListboxItemText>
                <ListboxItemIndicator />
              </ListboxItem>
            ))}

            {isEmpty && <ListboxEmpty>No results found.</ListboxEmpty>}
          </ListboxContent>
        </PopoverContent>
      </Popover>
    </Listbox>
  );
};

export default Example;
