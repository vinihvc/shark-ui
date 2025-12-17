"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectTrigger,
  SelectValueText,
} from "@/registry/react/components/select";

const SelectDemo = () => {
  const collection = createListCollection({
    items: ["Banana", "Apple", "Orange", "Pineapple"],
  });

  return (
    <Select collection={collection}>
      <SelectTrigger className="w-48">
        <SelectValueText placeholder="Select a fruit" />
      </SelectTrigger>

      <SelectContent>
        <SelectItemGroup>
          <SelectItemGroupLabel>Fruits</SelectItemGroupLabel>

          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;
