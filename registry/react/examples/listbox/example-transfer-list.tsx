"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useCallback } from "react";
import { Button } from "@/registry/react/components/button";
import { Item } from "@/registry/react/components/item";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const [available, setAvailable] = React.useState(["Brazil", "Ireland"]);
  const [selected, setSelected] = React.useState<string[]>(["Mexico"]);
  const [availableValue, setAvailableValue] = React.useState<string[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string[]>([]);

  const availableCollection = createListCollection({
    items: available.map((label) => ({ label, value: label })),
    itemToValue: (item) => (item as { value: string }).value,
    itemToString: (item) => (item as { label: string }).label,
  });

  const selectedCollection = createListCollection({
    items: selected.map((label) => ({ label, value: label })),
    itemToValue: (item) => (item as { value: string }).value,
    itemToString: (item) => (item as { label: string }).label,
  });

  const moveToSelected = useCallback(() => {
    setAvailable((prev) =>
      prev.filter((item) => !availableValue.includes(item))
    );
    setSelected((prev) => [...prev, ...availableValue]);
    setAvailableValue([]);
  }, [availableValue]);

  const moveToAvailable = useCallback(() => {
    setSelected((prev) => prev.filter((item) => !selectedValue.includes(item)));
    setAvailable((prev) => [...prev, ...selectedValue]);
    setSelectedValue([]);
  }, [selectedValue]);

  return (
    <div className="flex w-full max-w-lg gap-2 max-sm:flex-col sm:gap-4">
      <Item className="w-full p-1" variant="outline">
        <Listbox
          className="min-h-40"
          collection={availableCollection}
          onValueChange={(e) => setAvailableValue(e.value)}
          selectionMode="multiple"
          value={availableValue}
        >
          <ListboxContent>
            <ListboxItemGroup heading="Available">
              {availableCollection.items.map((item) => (
                <ListboxItem item={item} key={item.value}>
                  <ListboxItemText>{item.label}</ListboxItemText>
                  <ListboxItemIndicator />
                </ListboxItem>
              ))}
            </ListboxItemGroup>
          </ListboxContent>
        </Listbox>
      </Item>
      <div className="flex flex-row-reverse justify-center gap-2 sm:flex-col">
        <Button
          disabled={availableValue.length === 0}
          onClick={moveToSelected}
          size="icon-md"
          variant="outline"
        >
          <ChevronRightIcon />
        </Button>
        <Button
          disabled={selectedValue.length === 0}
          onClick={moveToAvailable}
          size="icon-md"
          variant="outline"
        >
          <ChevronLeftIcon />
        </Button>
      </div>
      <Item className="w-full p-1" variant="outline">
        <Listbox
          className="min-h-40"
          collection={selectedCollection}
          onValueChange={(e) => setSelectedValue(e.value)}
          selectionMode="multiple"
          value={selectedValue}
        >
          <ListboxContent className="max-h-48 min-h-40">
            <ListboxItemGroup heading="Selected">
              {selectedCollection.items.map((item) => (
                <ListboxItem item={item} key={item.value}>
                  <ListboxItemText>{item.label}</ListboxItemText>
                  <ListboxItemIndicator />
                </ListboxItem>
              ))}
            </ListboxItemGroup>
          </ListboxContent>
        </Listbox>
      </Item>
    </div>
  );
};

export default Example;
